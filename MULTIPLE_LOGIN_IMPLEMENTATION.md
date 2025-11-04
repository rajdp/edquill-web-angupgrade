# Multiple Login Control Implementation

## Summary
Implemented role-based multiple login control for the EdQuill platform to enforce single-session restrictions for students while allowing multiple sessions for admin and teacher users.

## Changes Made

### 1. Backend - Database Token Management (`UserModel.php`)

**Location**: `/Applications/MAMP/htdocs/rista_ci4/app/Models/V1/UserModel.php` (Lines 107-124)

**What Changed**:
- Added role-based logic during login to control token management
- **Students (role_id = 5)**: All previous tokens are invalidated (status set to 0) when a new login occurs
- **Admin & Teachers (role_id = 1, 2, 4, 6, 7)**: Multiple tokens remain active, allowing concurrent sessions

```php
// Role-based multiple login control
if ($user['role'] == 5) {
    // For students: Invalidate all previous tokens (single session only)
    $db->table('user_token')
        ->where('user_id', $user['user_id'])
        ->update(['status' => 0, 'modified_date' => date('Y-m-d H:i:s')]);
}
// For admin/teachers: Keep all tokens active (multiple sessions allowed)
```

### 2. Backend - Token Validation (`AuthFilter.php`)

**Location**: `/Applications/MAMP/htdocs/rista_ci4/app/Filters/AuthFilter.php` (Lines 121-131)

**What Changed**:
- Added database check to verify token is still active (status = 1)
- Returns 401 with clear message when token has been invalidated
- Prevents inactive tokens from being used even if JWT is still valid

```php
// Check if token is still active in database (for multiple login control)
$tokenStatus = $db->table('user_token')
    ->select('status')
    ->where('access_token', $token)
    ->get()
    ->getRowArray();

if (!$tokenStatus || (int)$tokenStatus['status'] !== 1) {
    return $this->unauthorizedResponse('Your session has expired. You have logged in from another device. Please re-login');
}
```

### 3. Backend - Logout Endpoint (`User.php`)

**Location**: `/Applications/MAMP/htdocs/rista_ci4/app/Controllers/User.php` (Lines 433-480)

**What Changed**:
- Created new `logout()` method to properly invalidate tokens
- Sets token status to 0 in database
- Returns proper CI3-format JSON response

### 4. Backend - Routes Configuration (`Routes.php`)

**Location**: `/Applications/MAMP/htdocs/rista_ci4/app/Config/Routes.php` (Line 38)

**What Changed**:
- Added logout route: `$routes->match(['POST', 'OPTIONS'], 'user/logout', 'User::logout');`

### 5. Frontend - Auth Service (`auth.service.ts`)

**Location**: `/Applications/MAMP/htdocs/edquill-web_angupgrade/web/src/app/shared/service/auth.service.ts` (Lines 533-568)

**What Changed**:
- Updated `logout()` method to call backend API before clearing local storage
- Added optional `showMessage` parameter to control toast notification
- Separated logout logic into `performLogout()` private method

```typescript
logout(showMessage: boolean = true) {
    // Call logout API to invalidate token in backend
    const logoutData = {
        platform: 'web',
        role_id: this.getRoleId(),
        user_id: this.getUserId()
    };
    
    this.postService(logoutData, 'user/logout').subscribe({
        complete: () => {
            this.performLogout(showMessage);
        }
    });
}
```

## How It Works

### For Students (Role ID = 5):
1. **First Login**: Student logs in from Device A → Token A created with status = 1
2. **Second Login**: Student logs in from Device B → Token A status set to 0, Token B created with status = 1
3. **Device A Makes Request**: 
   - Token A sent to server
   - AuthFilter checks database → Token A has status = 0
   - Returns 401 Unauthorized
   - Frontend interceptor catches 401 → calls `auth.logout()`
   - Shows message: "You have logged in another Device. Please Re-login"

### For Admin & Teachers (Role ID = 1, 2, 4, 6, 7):
1. **Multiple Logins**: All tokens remain active (status = 1)
2. **Concurrent Sessions**: Can work on multiple devices simultaneously
3. **Each Device**: Maintains its own valid token

## User Experience

### Students:
- ✅ Can only be logged in on ONE device at a time
- ❌ Logging in on a new device automatically logs out the previous session
- 💬 Clear message when session is invalidated

### Admin & Teachers:
- ✅ Can be logged in on MULTIPLE devices simultaneously
- ✅ Work seamlessly across desktop, tablet, mobile
- 🔒 Each session has its own secure token

## Security Benefits

1. **Token Control**: Tokens are server-side controlled, can be invalidated immediately
2. **Database Validation**: Every request validates token status in database
3. **Role-Based**: Different security requirements for different user types
4. **Audit Trail**: Token table maintains login history with timestamps

## Database Schema Reference

### `user_token` Table:
- `user_id`: Foreign key to user table
- `access_token`: JWT token string
- `status`: 1 = active, 0 = inactive/invalidated
- `created_date`: When token was created
- `modified_date`: When token was last modified (e.g., invalidated)

## Testing Checklist

### Student Users (Role ID = 5):
- [ ] Log in on Device A
- [ ] Log in on Device B with same credentials
- [ ] Verify Device A is automatically logged out
- [ ] Verify Device A shows "logged in another device" message

### Admin/Teacher Users (Role ID = 1, 2, 4, 6, 7):
- [ ] Log in on Device A
- [ ] Log in on Device B with same credentials
- [ ] Verify both sessions remain active
- [ ] Verify can work simultaneously on both devices

### Logout:
- [ ] Click logout button
- [ ] Verify token is invalidated in database
- [ ] Verify cannot use old token for API requests

## Role ID Reference

- **1**: Admin
- **2**: Teacher
- **3**: Content Creator
- **4**: Tutor/Individual Teacher
- **5**: Student (Single session only)
- **6**: Corporate Admin
- **7**: Parent/Guardian

## Notes

- HTTP Interceptor (`http.interceptor.ts`) already catches 401 errors and triggers logout
- No changes needed to interceptor - it works with the new implementation
- Frontend logout now properly invalidates backend token before clearing storage
- Error message is clear and user-friendly






