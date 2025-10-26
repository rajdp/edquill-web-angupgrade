# 🚀 EdQuill Quick Start Guide

## 🎯 Start Development (Localhost)

### Web Application
```bash
cd /Applications/MAMP/htdocs/edquill-web/web
npm start
```
Access: **http://localhost:8211**

### Admin Application
```bash
cd /Applications/MAMP/htdocs/edquill-web/admin
npm start
```
Access: **http://localhost:4211**

---

## 📍 All Environment Commands

### Web App Commands
| Command | Environment | Backend |
|---------|-------------|---------|
| `npm start` | 🏠 Local | localhost:8888 |
| `npm run start:dev` | 🔧 Dev | dev.edquill.com |
| `npm run start:staging` | 🧪 Staging | staging.edquill.com |
| `npm run start:prod` | 🚀 Production | edquill.com |

### Admin App Commands
Same commands as Web App above!

---

## 🏗️ Build for Deployment

### Web Application
```bash
cd /Applications/MAMP/htdocs/edquill-web/web

# Build for production
npm run build:prod

# Output: dist/web/
```

### Admin Application
```bash
cd /Applications/MAMP/htdocs/edquill-web/admin

# Build for production
npm run build:prod

# Output: dist/admin/
```

---

## 📋 Environment Configurations

### 🏠 Local (localhost)
- **API:** http://localhost:8888/rista/api/
- **DB:** edquill_production @ localhost:8889
- **Web:** http://localhost:8211
- **Admin:** http://localhost:4211

### 🔧 Development
- **API:** https://dev.edquill.com/rista/api/
- **Web:** https://dev.edquill.com/web
- **Admin:** https://dev.edquill.com/admin

### 🧪 Staging
- **API:** https://staging.edquill.com/rista/api/
- **Web:** https://staging.edquill.com/web
- **Admin:** https://staging.edquill.com/admin

### 🚀 Production
- **API:** https://edquill.com/rista/api/
- **Web:** https://edquill.com/web
- **Admin:** https://edquill.com/admin

---

## ✅ What Changed

Previously, environment was determined by complex URL detection and remote API calls. Now:

✅ **Simple:** Use npm scripts to control environment
✅ **Clear:** Each environment has its own file
✅ **Reliable:** No runtime environment detection
✅ **Fast:** No remote API calls on startup

---

## 💡 Tips

**Default behavior:**
- `npm start` → Uses **local** environment
- `npm run build` → Uses **local** environment

**For other environments:**
- Use `:dev`, `:staging`, or `:prod` suffix
- Example: `npm run start:dev`

**Check active environment:**
- Open browser console
- Look for: `[ENV] Environment loaded: { env: 'LOCAL', ... }`

---

## 🔄 Switching Environments

```bash
# Stop current server (Ctrl+C)

# Start with different environment
npm run start:dev

# App restarts with dev.edquill.com backend
```

---

For detailed information, see: [ENVIRONMENT_SETUP.md](./ENVIRONMENT_SETUP.md)




