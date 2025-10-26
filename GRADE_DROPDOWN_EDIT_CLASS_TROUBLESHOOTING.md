# Grade Dropdown & Edit Class Troubleshooting

## Status: Endpoints Are Working ✅

Both endpoints are functioning correctly:

### 1. **grade/list** - ✅ Working
```json
{
  "IsSuccess": true,
  "count": 21,
  "grades": [
    {"grade_id": "52", "grade_name": "KG"},
    {"grade_id": "53", "grade_name": "1"},
    {"grade_id": "54", "grade_name": "2"}
    // ... 18 more grades
  ]
}
```

### 2. **classes/classDetail** - ✅ Working  
Returns all fields needed for editing:
- `class_id`, `class_name`
- `grade_id`, `grade_name`
- `subject_id`, `subject_name`
- `classDate_status`, `class_status`
- `students`, `availabilityDate`, `notes`
- All other class fields

---

## Issue 1: Empty Grade Dropdown

### Possible Causes:

#### A. **School ID Not Set**
The grade list is called with `school_id` from session storage. If not set, the API returns no grades for that school.

**Check:**
```typescript
// In browser console (F12):
sessionStorage.getItem('school_id')
// Should return a number like "1" or "2"
```

**Fix:**
1. Make sure you're logged in
2. Select a school from the school dropdown (if available)
3. Check that school_id is in sessionStorage

#### B. **Timing Issue**
The `gradeList()` is called in `init()` which is called after `schoolIdNum` is set. If `schoolIdNum` is undefined/null, the API call fails.

**Check browser console for:**
```
error_gradeList
```

**Temporary Fix:**
Add console logging to see the API call:
1. Open browser console
2. Look for network tab
3. Filter by "grade/list"
4. Check the request payload
5. Verify school_id is present

#### C. **CORS or Network Issue**
The API might be blocked or returning an error.

**Check:**
- Network tab in DevTools
- Look for "grade/list" call
- Check if it returns HTTP 200
- Verify response has IsSuccess: true

---

## Issue 2: Edit Class Not Opening

### How It Should Work:

1. User clicks "Edit class" button
2. Calls `enterList(i, 'no', event)`
3. Fetches class details via `classes/classDetail`
4. Stores data in sessionStorage:
   - `editclass`
   - `card-data`
   - `studentlist`
   - `updatedStudent`
5. Navigates to `/class/create-class/edit`
6. `AddClassComponent` loads
7. Reads data from sessionStorage
8. Populates form

### Possible Issues:

#### A. **classDetail API Fails**
**Check browser console for:**
```
Class detail response error: ...
Unable to load class details
```

**Debug:**
```javascript
// In browser console:
fetch('http://localhost:8888/rista_ci4/public/classes/classDetail', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    platform: 'web',
    role_id: '2',
    user_id: '1',
    school_id: '2',
    class_id: '64',
    grade: ['1'],
    teacher_id: '0'
  })
})
.then(r => r.json())
.then(d => console.log('ClassDetail:', d));
```

#### B. **Navigation Not Triggering**
**Check:**
- Does the URL change to `/class/create-class/edit`?
- If yes → Edit component has an issue loading
- If no → Navigation is being blocked

**Debug:**
```javascript
// Check if data is in session:
JSON.parse(sessionStorage.getItem('editclass'))
// Should return class data
```

#### C. **Route Not Defined**
The route `/class/create-class/edit` should map to `AddClassComponent`.

**Verified:** ✅ Route exists in `class-routing.module.ts`:
```typescript
{
  path: 'create-class/:type',
  component: AddClassComponent
}
```

---

## Quick Fixes to Try

### Fix 1: Clear Browser Cache
```bash
# In browser:
1. Press Cmd+Shift+Del (Mac) or Ctrl+Shift+Del (Windows)
2. Select "Cached images and files"
3. Click "Clear data"
4. Refresh page (Cmd+R or Ctrl+R)
```

### Fix 2: Check Session Storage
```javascript
// In browser console (F12):
// Check if school is selected
sessionStorage.getItem('school_id')
// Should return: "1" or "2"

// Check if user is logged in
sessionStorage.getItem('user_id')
sessionStorage.getItem('role_id')
```

### Fix 3: Test Grade API Directly
```javascript
// In browser console:
fetch('http://localhost:8888/rista_ci4/public/grade/list', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    platform: 'web',
    role_id: '2',
    user_id: '1',
    school_id: '1',
    type: 'active'
  })
})
.then(r => r.json())
.then(d => console.log('Grades:', d.ResponseObject.length, 'items'));
// Should log: "Grades: 21 items"
```

### Fix 4: Check Network Tab
1. Open DevTools (F12)
2. Go to Network tab
3. Filter by "grade" or "classDetail"
4. Click "Edit class" button
5. Watch for API calls
6. Check if they return 200 OK
7. Check response data

---

## Expected Behavior

### When Grade Dropdown Works:
```
Add Student Modal:
┌─────────────────────┐
│ Select Grade ▼      │
├─────────────────────┤
│ KG                  │
│ 1                   │
│ 2                   │
│ 3                   │
│ ...                 │
│ 12                  │
└─────────────────────┘
```

### When Edit Class Works:
1. Click "Edit class" button
2. Loader appears briefly
3. URL changes to `/class/create-class/edit`
4. Edit form loads with:
   - Class name pre-filled
   - Subject pre-selected
   - Grade pre-selected (if class has grade)
   - Dates pre-filled
   - Student list visible

---

## If Still Not Working

### Check These in Browser Console:

```javascript
// 1. Is school_id set?
console.log('School ID:', sessionStorage.getItem('school_id'));

// 2. Test grade API
fetch('http://localhost:8888/rista_ci4/public/grade/list', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    platform: 'web',
    role_id: sessionStorage.getItem('role_id'),
    user_id: sessionStorage.getItem('user_id'),
    school_id: sessionStorage.getItem('school_id'),
    type: 'active'
  })
})
.then(r => r.json())
.then(d => console.log('Grade API Response:', d));

// 3. Check if class detail works
// (Replace class_id with actual class ID from your list)
fetch('http://localhost:8888/rista_ci4/public/classes/classDetail', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    platform: 'web',
    role_id: sessionStorage.getItem('role_id'),
    user_id: sessionStorage.getItem('user_id'),
    school_id: sessionStorage.getItem('school_id'),
    class_id: '64',  // Use your actual class_id
    grade: ['1'],
    teacher_id: '0'
  })
})
.then(r => r.json())
.then(d => console.log('ClassDetail Response:', d));
```

### Share These Results:
If the issue persists, please share:
1. Output of the above console commands
2. Any red errors in console
3. Screenshot of the empty dropdown
4. What happens when you click "Edit class"

---

## Backend Status: ✅ CONFIRMED WORKING

```bash
# Both endpoints tested and confirmed working:

✅ grade/list (with type=active)
   Returns: 21 grades for school_id=1

✅ classes/classDetail  
   Returns: Complete class data with all edit fields
```

The backend is working correctly. The issue is likely on the frontend side with:
- Session data not being set
- API calls failing silently  
- Component not calling the methods
- Routing issue

---

**Next Steps:**
1. Check browser console for errors
2. Verify session storage has school_id
3. Check Network tab for failed API calls
4. Share any errors you see

The endpoints are ready and working - just need to debug the frontend! 🔍




