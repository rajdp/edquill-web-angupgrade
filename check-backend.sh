#!/bin/bash

# EdQuill Backend Configuration Checker
# Shows which backend the frontend is currently pointing to

echo "=========================================="
echo "EdQuill Backend Configuration Check"
echo "=========================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

check_environment_file() {
    local file=$1
    local portal=$2
    
    if [ -f "$file" ]; then
        echo -e "${BLUE}$portal Portal:${NC}"
        echo "File: $file"
        
        # Extract apiHost line
        api_host=$(grep "apiHost" "$file" | head -1)
        
        if [[ $api_host == *"rista_ci4"* ]]; then
            echo -e "${GREEN}✓ Using CI4 Backend${NC}"
            echo "$api_host"
        elif [[ $api_host == *"rista/api"* ]]; then
            echo -e "${YELLOW}⚠ Using CI3 Backend (Old)${NC}"
            echo "$api_host"
        else
            echo -e "${RED}? Unknown Backend${NC}"
            echo "$api_host"
        fi
        echo ""
    else
        echo -e "${RED}✗ File not found: $file${NC}"
        echo ""
    fi
}

echo "Web Portal Environment Files:"
echo "=========================================="
check_environment_file "web/src/environments/environment.ts" "Web (Local)"
check_environment_file "web/src/environments/environment.dev.ts" "Web (Dev)"
check_environment_file "web/src/environments/environment.staging.ts" "Web (Staging)"
check_environment_file "web/src/environments/environment.prod.ts" "Web (Production)"

echo ""
echo "Admin Portal Environment Files:"
echo "=========================================="
check_environment_file "admin/src/environments/environment.ts" "Admin (Local)"
check_environment_file "admin/src/environments/environment.dev.ts" "Admin (Dev)"
check_environment_file "admin/src/environments/environment.staging.ts" "Admin (Staging)"
check_environment_file "admin/src/environments/environment.prod.ts" "Admin (Production)"

echo ""
echo "=========================================="
echo "Backend Status Check"
echo "=========================================="

# Check if CI3 backend is accessible
if curl -s http://localhost:8888/rista/api/index.php/v1/ > /dev/null 2>&1; then
    echo -e "${GREEN}✓ CI3 Backend is running${NC}"
    echo "  URL: http://localhost:8888/rista/api/index.php/v1/"
else
    echo -e "${RED}✗ CI3 Backend is not accessible${NC}"
fi

# Check if CI4 backend is accessible
if curl -s http://localhost:8888/rista_ci4/public/ > /dev/null 2>&1; then
    echo -e "${GREEN}✓ CI4 Backend is running${NC}"
    echo "  URL: http://localhost:8888/rista_ci4/public/"
else
    echo -e "${RED}✗ CI4 Backend is not accessible${NC}"
fi

echo ""
echo "=========================================="
echo "Recommendation"
echo "=========================================="
echo ""
echo "To switch to CI4 backend:"
echo "1. Edit environment.ts files above"
echo "2. Change apiHost to: 'http://localhost:8888/rista_ci4/public/'"
echo "3. Restart Angular applications"
echo ""
echo "To test CI4 without changing frontend:"
echo "cd ../rista_ci4 && ./test-backend.sh"
echo ""

