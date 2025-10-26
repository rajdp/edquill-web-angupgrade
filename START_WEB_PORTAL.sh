#!/bin/bash

echo "=========================================="
echo "Starting EdQuill Web Portal"
echo "=========================================="
echo ""

# Kill any existing process on port 8211
echo "Stopping any existing web portal..."
lsof -ti:8211 | xargs kill -9 2>/dev/null
sleep 2

# Check environment configuration
echo "Checking environment configuration..."
API_HOST=$(grep "apiHost:" web/src/environments/environment.ts | head -1)
echo "$API_HOST"

if [[ $API_HOST == *"rista_ci4"* ]]; then
    echo "✓ Configured for CI4 Backend"
elif [[ $API_HOST == *"rista/api"* ]]; then
    echo "⚠ Still configured for CI3 Backend"
else
    echo "? Unknown configuration"
fi

echo ""
echo "Starting web portal..."
echo "URL: http://localhost:8211"
echo ""

cd web
npm start

