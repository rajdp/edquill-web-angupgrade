# 🌍 Environment Configuration Guide

This guide explains how to run and build the EdQuill applications for different environments.

---

## 📁 Environment Files

Both **Admin** and **Web** applications now have separate environment configurations:

### Web Application (`/web/src/environments/`)
- `environment.ts` - Default (local development)
- `environment.local.ts` - **Localhost** development
- `environment.dev.ts` - **Development** server
- `environment.staging.ts` - **Staging** server
- `environment.prod.ts` - **Production** server

### Admin Application (`/admin/src/environments/`)
- `environment.ts` - Default (local development)
- `environment.local.ts` - **Localhost** development
- `environment.dev.ts` - **Development** server
- `environment.staging.ts` - **Staging** server
- `environment.prod.ts` - **Production** server

---

## 🚀 Running Applications

### Web Application (Port 8211)

```bash
cd /Applications/MAMP/htdocs/edquill-web/web

# Local Development (default)
npm start
# OR explicitly:
npm run start:local

# Development Server
npm run start:dev

# Staging Server
npm run start:staging

# Production Server (for testing)
npm run start:prod
```

### Admin Application (Port 4211)

```bash
cd /Applications/MAMP/htdocs/edquill-web/admin

# Local Development (default)
npm start
# OR explicitly:
npm run start:local

# Development Server
npm run start:dev

# Staging Server
npm run start:staging

# Production Server (for testing)
npm run start:prod
```

---

## 🏗️ Building Applications

### Web Application

```bash
cd /Applications/MAMP/htdocs/edquill-web/web

# Build for Local
npm run build:local

# Build for Development
npm run build:dev

# Build for Staging
npm run build:staging

# Build for Production
npm run build:prod
```

### Admin Application

```bash
cd /Applications/MAMP/htdocs/edquill-web/admin

# Build for Local
npm run build:local

# Build for Development
npm run build:dev

# Build for Staging
npm run build:staging

# Build for Production
npm run build:prod
```

---

## ⚙️ Environment Configuration Details

### **LOCAL** (localhost:8888)
- **Backend API:** `http://localhost:8888/rista/api/`
- **Database:** `edquill_production` on `localhost:8889`
- **Purpose:** Local MAMP development
- **Features:** Full debugging, source maps

### **DEVELOPMENT** (dev.edquill.com)
- **Backend API:** `https://dev.edquill.com/rista/api/`
- **Purpose:** Remote development testing
- **Features:** Debugging enabled, source maps

### **STAGING** (staging.edquill.com)
- **Backend API:** `https://staging.edquill.com/rista/api/`
- **Purpose:** Pre-production testing
- **Features:** Optimized build, limited debugging

### **PRODUCTION** (edquill.com)
- **Backend API:** `https://edquill.com/rista/api/`
- **Purpose:** Live production environment
- **Features:** Full optimization, no debugging

---

## 📊 Quick Reference

| Command | Environment | Backend URL | Local Port |
|---------|-------------|-------------|------------|
| `npm start` | Local | localhost:8888 | 8211/4211 |
| `npm run start:local` | Local | localhost:8888 | 8211/4211 |
| `npm run start:dev` | Dev | dev.edquill.com | 8211/4211 |
| `npm run start:staging` | Staging | staging.edquill.com | 8211/4211 |
| `npm run start:prod` | Production | edquill.com | 8211/4211 |

---

## 🔧 How It Works

1. **Angular Build System** reads `angular.json`
2. Each **configuration** specifies which environment file to use
3. The environment file is **replaced** during build/serve
4. `environment.service.ts` reads the loaded environment
5. All API calls use the correct backend URL

---

## ✅ Benefits

✅ **No more manual config changes**
✅ **Single command** to switch environments
✅ **Build-time configuration** (secure)
✅ **No hardcoded URLs** in code
✅ **Easy deployment** to different servers

---

## 🎯 Best Practices

### For Local Development
```bash
npm start
```
This uses `environment.local.ts` automatically.

### For Deploying to Dev
```bash
npm run build:dev
```
This creates an optimized build for the dev server.

### For Production Release
```bash
npm run build:prod
```
This creates a fully optimized production build.

---

## 🔍 Troubleshooting

### Issue: App is calling wrong API

**Check console logs:**
```
[ENV] Environment loaded: { env: 'LOCAL', apiHost: '...' }
```

This shows which environment is active.

### Issue: Need to change environment mid-development

**Solution:** Restart with different command:
```bash
# Stop current server (Ctrl+C)
npm run start:dev  # Or any other environment
```

### Issue: Environment not changing

**Solution:** 
1. Stop the dev server
2. Clear Angular cache: `rm -rf .angular`
3. Restart with desired environment

---

## 📝 Notes

- `npm start` always uses **local** environment (localhost)
- Environment files are **replaced** at build time
- The active environment is logged to browser console
- Changes to environment files require **server restart**




