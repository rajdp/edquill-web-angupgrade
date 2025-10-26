# Debug Frontend API Configuration

## Quick Check - Which API Am I Using?

### Method 1: Check Browser Console (Easiest)
1. Open your browser to `http://localhost:8211`
2. Open DevTools (F12)
3. Look at Console tab for logs:
   ```
   🔧 [ENVIRONMENT] API Host: http://localhost:8888/rista_ci4/public/
   ```

### Method 2: Check Network Tab (Most Accurate)
1. Open DevTools (F12)
2. Go to **Network** tab
3. Try to login or load any data
4. Look at the request URL in the Network tab

**If using CI4:**
✅ `http://localhost:8888/rista_ci4/public/user/login`

**If using CI3:**
❌ `http://localhost:8888/rista/api/index.php/v1/user/login`

### Method 3: Check Source Code
1. In DevTools, go to **Sources** tab
2. Find `webpack://` → `src` → `environments` → `environment.ts`
3. Check the `apiHost` value

## Problem: Still Seeing CI3 URLs?

### Solution 1: Hard Refresh
```
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)
```

### Solution 2: Clear Browser Cache
1. DevTools → Application tab
2. Clear Storage → Clear site data
3. Reload page

### Solution 3: Restart Angular Dev Server
```bash
# Stop current server (Ctrl+C in terminal)
# Or kill it:
lsof -ti:8211 | xargs kill -9

# Restart
cd /Applications/MAMP/htdocs/edquill-web/web
npm start
```

### Solution 4: Delete Angular Cache
```bash
cd /Applications/MAMP/htdocs/edquill-web/web
rm -rf .angular/cache
npm start
```

## Quick Test Commands

### Check Environment File
```bash
cd /Applications/MAMP/htdocs/edquill-web/web
grep "apiHost:" src/environments/environment.ts
```

**Should show:**
```typescript
apiHost: 'http://localhost:8888/rista_ci4/public/',
```

### Check if Angular is Running
```bash
lsof -ti:8211
```

If you get a process ID, Angular is running. Kill it and restart:
```bash
lsof -ti:8211 | xargs kill -9
cd /Applications/MAMP/htdocs/edquill-web/web
npm start
```

## Debugging Steps

1. **Verify environment file is correct:**
   ```bash
   cat /Applications/MAMP/htdocs/edquill-web/web/src/environments/environment.ts
   ```
   Should show `rista_ci4/public/`

2. **Kill and restart Angular:**
   ```bash
   lsof -ti:8211 | xargs kill -9
   cd /Applications/MAMP/htdocs/edquill-web/web
   npm start
   ```

3. **Open browser with DevTools:**
   - URL: `http://localhost:8211`
   - F12 → Console tab
   - Look for: `🔧 [ENVIRONMENT] API Host: ...`

4. **Test an API call:**
   - Try to login
   - Check Network tab
   - Verify URL starts with `rista_ci4`

## Success Indicators

✅ Console shows: `API Host: http://localhost:8888/rista_ci4/public/`
✅ Network tab shows: Requests to `/rista_ci4/public/...`
✅ API responses come back (even if 404 - means it's hitting CI4)
✅ No CORS errors

## Common Issues

### Issue: "Environment loaded: Object" but no details
**Cause:** Console log doesn't expand objects by default
**Solution:** Look at Network tab instead

### Issue: Still seeing rista/api URLs
**Cause:** Angular dev server hasn't restarted
**Solution:** Kill process and restart (see above)

### Issue: 404 errors from CI4
**Cause:** Controller/endpoint not migrated yet
**Solution:** This is expected! Check which endpoint is missing

### Issue: CORS errors
**Cause:** CI4 CORS not configured for frontend
**Solution:** Already configured in CI4 `.env` file

## Quick Restart Script

Save this as `restart-web.sh`:
```bash
#!/bin/bash
echo "Stopping web portal..."
lsof -ti:8211 | xargs kill -9 2>/dev/null
sleep 2
echo "Starting web portal..."
cd /Applications/MAMP/htdocs/edquill-web/web
npm start
```

Make executable:
```bash
chmod +x restart-web.sh
./restart-web.sh
```

## Contact Points Between Frontend and Backend

The frontend makes API calls through:
1. **HTTP Interceptor** (`http.interceptor.ts`)
   - Prepends `apiHost` to all requests
   - Adds `Accesstoken` header

2. **Services** (various `*.service.ts` files)
   - Use relative URLs like `'user/login'`
   - Interceptor adds the full host

3. **Environment Service** (`environment.service.ts`)
   - Loads configuration
   - Provides `apiHost` to interceptor

## Verification Checklist

- [ ] Environment file shows `rista_ci4/public/`
- [ ] Angular dev server restarted
- [ ] Browser cache cleared
- [ ] Console shows CI4 URL
- [ ] Network tab shows CI4 requests
- [ ] No CORS errors
- [ ] API responds (even with 404 is OK - means CI4 is being hit)

## Next Steps After Confirming CI4 Connection

1. Note which endpoints return 404
2. These are the controllers that still need migration
3. Report back which features work vs which need migration
4. Prioritize remaining controller migrations

## Emergency Rollback to CI3

If you need to go back to CI3 quickly:

```bash
# Edit environment file
cd /Applications/MAMP/htdocs/edquill-web/web/src/environments
# Change environment.ts back to:
# apiHost: 'http://localhost:8888/rista/api/index.php/v1/',

# Restart
lsof -ti:8211 | xargs kill -9
cd /Applications/MAMP/htdocs/edquill-web/web
npm start
```

