# Dashboard school_id Debugging Guide

## Issue
Dashboard counts and charts not displaying because the database contains data for multiple `school_id` values, and the API requires the correct `school_id` to filter the data.

## Root Cause
The dashboard API calls depend on `school_id` being present in the session/localStorage. If `school_id` is missing or incorrect, the API returns no data, causing:
- Count widgets show 0 or undefined
- Bar charts fail to initialize
- ApexCharts errors

## Debugging Steps

### Step 1: Check Browser Console Logs

After implementing the fix, the dashboard now logs detailed information. Open browser DevTools (F12) → Console and look for:

**On Page Load:**
```
Dashboard ngOnInit - Session Data: {
  school_id: "123",      ← Should have a value
  user_id: "456",        ← Should have a value
  role_id: "2",          ← Should have a value
  schoolStatus: [...]    ← May be array or object
}
```

**On API Calls:**
```
Dashboard API Request: {
  platform: "web",
  role_id: "2",
  user_id: "456",
  school_id: "123"       ← This MUST be present
}
```

**On API Response:**
```
Dashboard API Response: {
  IsSuccess: true,
  ResponseObject: {
    over_all: { teachers: 10, students: 50, ... },
    month_wise: [...]
  }
}
```

### Step 2: Identify the Problem

#### ❌ Problem 1: school_id is null/undefined
**Console shows:**
```
⚠️ Dashboard Warning: school_id not found in session storage
Available localStorage keys: [...]
```

**Solution:**
1. Check if user is properly logged in
2. Verify login process sets school_id
3. Check localStorage for the prefixed key (e.g., `edquill_school_id` or `rista_school_id`)

#### ❌ Problem 2: school_id exists but API returns no data
**Console shows:**
```
Dashboard API Request: { school_id: "123", ... }
Dashboard API Response: { IsSuccess: false, ErrorObject: "..." }
```

**Solution:**
1. Verify school_id value is correct
2. Check if that school has any data in the database
3. Verify backend API endpoint is working
4. Check database connection

#### ❌ Problem 3: school_id format mismatch
**Console shows:**
```
Dashboard API Request: { school_id: "123", ... }
Dashboard API Response: { IsSuccess: true, ResponseObject: {} }
```

**Solution:**
1. Check if school_id should be integer vs string
2. Verify database column type for school_id
3. Check API parameter parsing

### Step 3: Verify Session Data

#### Check localStorage in Browser Console

```javascript
// Check if school_id exists
localStorage.getItem('school_id')
// or with prefix
localStorage.getItem('edquill_school_id')
localStorage.getItem('rista_school_id')

// List all localStorage keys
Object.keys(localStorage)

// Get all session data
for(let key in localStorage) {
  if (key.includes('school')) {
    console.log(key, '=', localStorage.getItem(key));
  }
}
```

#### Expected Values

You should see something like:
```
edquill_school_id = "123"
edquill_school_details = "{...}"
edquill_user_id = "456"
edquill_roleid = "2"
```

### Step 4: Check Login Flow

The `school_id` should be set during login. Check:

**1. Login Component**
- Does it call `auth.setSessionData('school_id', value)` after successful login?
- Is the school_id extracted from the login response?

**2. Auth Service**
- Verify `getSessionData('school_id')` adds the correct prefix
- Verify `setSessionData('school_id', value)` is called during login

**3. Environment Prefix**
Check `environment.local.ts` or `environment.ts`:
```typescript
export const environment = {
  prefixName: 'edquill_',  // or 'rista_'
  // ...
};
```

### Step 5: Backend API Verification

#### Test the API Directly

Use Postman or curl to test:
```bash
# Test dashboard API
curl -X POST http://localhost:8888/rista_ci4/public/dashboard/registerList \
  -H "Content-Type: application/json" \
  -d '{
    "platform": "web",
    "role_id": "2",
    "user_id": "YOUR_USER_ID",
    "school_id": "YOUR_SCHOOL_ID"
  }'
```

**Expected Response:**
```json
{
  "IsSuccess": true,
  "ResponseObject": {
    "over_all": {
      "teachers": 10,
      "students": 50,
      "schools": 1,
      "content_creators": 5,
      "created_date": "2025-10-24"
    },
    "month_wise": [
      {
        "monthname": "Oct",
        "yearname": "2025",
        "teacher": 2,
        "student": 10,
        "schools": 0,
        "contentcreator": 1
      }
    ]
  }
}
```

### Step 6: Database Verification

Check if data exists for the school_id:

```sql
-- Check if school exists
SELECT * FROM schools WHERE school_id = 123;

-- Check teacher count for school
SELECT COUNT(*) FROM teachers WHERE school_id = 123;

-- Check student count for school
SELECT COUNT(*) FROM students WHERE school_id = 123;

-- Check recent registrations
SELECT * FROM registrations 
WHERE school_id = 123 
AND created_date >= DATE_SUB(NOW(), INTERVAL 6 MONTH);
```

## Quick Fixes

### Fix 1: Force Set school_id (Temporary for Testing)

In browser console:
```javascript
// Manually set school_id for testing
localStorage.setItem('edquill_school_id', '123');  // Use your actual school_id

// Refresh the page
location.reload();
```

### Fix 2: Check Login Response

After logging in, check browser Network tab:
1. Find the login API call
2. Check Response
3. Verify it contains `school_id`
4. Verify frontend stores it in localStorage

### Fix 3: Add Fallback school_id

If your account has a default school, you can add a fallback in the dashboard:

```typescript
// In getsection1List()
const schoolId = this.auth.getSessionData('school_id') || 'DEFAULT_SCHOOL_ID';
```

## Expected Behavior After Fix

### Console Logs (Successful Flow)

```
Dashboard ngOnInit - Session Data: { school_id: "123", user_id: "456", role_id: "2", ... }
Dashboard: Initializing with school_id 123
Dashboard API Request: { platform: "web", role_id: "2", user_id: "456", school_id: "123" }
Dashboard API Response: { IsSuccess: true, ResponseObject: { over_all: {...}, month_wise: [...] } }
Order List API Request: { platform: "web", ... school_id: "123" }
Order List API Response: { IsSuccess: true, ... }
Content List API Request: { platform: "web", ... school_id: "123" }
Content List API Response: { IsSuccess: true, ... }
```

### Console Logs (Problematic Flow)

```
Dashboard ngOnInit - Session Data: { school_id: null, ... }
⚠️ Dashboard Warning: school_id not found in session storage
Available localStorage keys: [...]
Dashboard Error: school_id is missing from session
Toast: "School information not found. Please log in again."
```

## Verification Checklist

After implementing the fix, verify:

- [ ] Console shows "Dashboard API Request" with valid school_id
- [ ] Console shows "Dashboard API Response" with data
- [ ] Count widgets display numbers (not 0 or undefined)
- [ ] Bar chart renders without errors
- [ ] No ApexCharts errors in console
- [ ] No "Cannot read properties of undefined" errors

## Common Issues & Solutions

### Issue: localStorage shows school_id but dashboard says it's missing
**Cause**: Prefix mismatch
**Solution**: Check `environment.ts` → `prefixName` value
```typescript
// If prefixName is 'edquill_'
localStorage.getItem('edquill_school_id')  // ✅ Correct
localStorage.getItem('school_id')           // ❌ Wrong
```

### Issue: school_id exists but API returns empty data
**Cause**: No data in database for that school_id
**Solution**: 
1. Verify school_id is correct
2. Check database has data for that school
3. Run database queries to confirm

### Issue: Different users see different dashboards
**Cause**: Each user has different school_id
**Solution**: This is expected - each school sees their own data

### Issue: Multi-school users don't see data
**Cause**: School selector not setting school_id
**Solution**: 
1. Check if school dropdown triggers `newSubject.schoolChange`
2. Verify `init(params)` is called with correct school_id
3. Check if `serviceCalled()` is executed

## Files Modified

**`web/src/app/components/dashboard/dashboard.component.ts`** - Added:
1. school_id validation in all API calls
2. Detailed console logging
3. User-friendly error messages
4. Graceful degradation when school_id is missing
5. Debug information in ngOnInit

## Next Steps

### If school_id is Missing:
1. Check login component - ensure it sets school_id
2. Check auth service - verify setSessionData is called
3. Check environment prefix - ensure it matches

### If school_id is Present but No Data:
1. Test backend API directly (Postman/curl)
2. Check database for data
3. Verify SQL queries include school_id filter
4. Check backend logs for errors

### If Everything Looks Correct:
1. Clear browser cache and localStorage
2. Log out and log back in
3. Check browser console for detailed logs
4. Review backend API response structure

## Production Recommendations

Once issue is resolved:

1. **Remove excessive console.log** statements (keep only important ones)
2. **Add proper error tracking** (e.g., Sentry, LogRocket)
3. **Monitor API errors** for school_id issues
4. **Add school_id validation** on every protected route
5. **Implement session timeout** handling

## Support

If issue persists:
1. Share console logs (with school_id visible)
2. Share API response (Network tab)
3. Verify database has data for your school_id
4. Check backend logs for SQL errors

---

**Status**: Enhanced with school_id validation and debugging
**Version**: 1.2
**Last Updated**: October 24, 2025

