#!/bin/bash

# EdQuill V2 Frontend Verification Script

echo "🔍 Verifying EdQuill V2 Frontend Files..."
echo ""

# Check admin dashboard component
if [ -f "src/app/components/admin/admin-dashboard/admin-dashboard.component.ts" ]; then
    echo "✅ Admin Dashboard Component exists"
else
    echo "❌ Admin Dashboard Component NOT FOUND"
fi

# Check dashboard service
if [ -f "src/app/shared/service/dashboard.service.ts" ]; then
    echo "✅ Dashboard Service exists"
else
    echo "❌ Dashboard Service NOT FOUND"
fi

# Check admin routing
if grep -q "admin-dashboard" src/app/components/admin/admin-routing.module.ts 2>/dev/null; then
    echo "✅ Admin Dashboard route configured"
else
    echo "❌ Admin Dashboard route NOT configured"
fi

# Check CRM service enhancements
if grep -q "assignClass\|approve" src/app/components/crm/registrations/crm-registrations.service.ts 2>/dev/null; then
    echo "✅ CRM Service enhanced (assignClass, approve methods)"
else
    echo "⚠️  CRM Service enhancements may be missing"
fi

echo ""
echo "📋 To see changes:"
echo "1. Restart dev server: npm start"
echo "2. Navigate to: http://localhost:8211/#/admin/dashboard"
echo ""

