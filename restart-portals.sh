#!/bin/bash

echo "=========================================="
echo "EdQuill Portal Restart Script"
echo "=========================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to kill Angular processes
kill_angular() {
    echo -e "${YELLOW}Stopping any running Angular servers...${NC}"
    
    # Kill processes on port 8211 (web portal)
    lsof -ti:8211 | xargs kill -9 2>/dev/null
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Stopped web portal (port 8211)${NC}"
    fi
    
    # Kill processes on port 4211 (admin portal)
    lsof -ti:4211 | xargs kill -9 2>/dev/null
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Stopped admin portal (port 4211)${NC}"
    fi
    
    # Kill any other node processes running ng serve
    pkill -f "ng serve" 2>/dev/null
    
    sleep 2
    echo ""
}

# Function to check backend status
check_backends() {
    echo "Checking backend availability..."
    echo ""
    
    # Check CI3
    if curl -s http://localhost:8888/rista/api/index.php/v1/ > /dev/null 2>&1; then
        echo -e "${GREEN}✓ CI3 Backend is running${NC}"
    else
        echo -e "${RED}✗ CI3 Backend is not accessible${NC}"
    fi
    
    # Check CI4
    if curl -s http://localhost:8888/rista_ci4/public/ > /dev/null 2>&1; then
        echo -e "${GREEN}✓ CI4 Backend is running${NC}"
    else
        echo -e "${RED}✗ CI4 Backend is not accessible${NC}"
        echo -e "${YELLOW}  Start it with: cd ../rista_ci4 && php spark serve${NC}"
    fi
    
    echo ""
}

# Main execution
kill_angular
check_backends

echo "=========================================="
echo "Choose which portal(s) to start:"
echo "=========================================="
echo "1. Web Portal only (port 8211) - Uses CI4"
echo "2. Admin Portal only (port 4211) - Uses CI3"
echo "3. Both Portals"
echo "4. Exit"
echo ""
read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo ""
        echo -e "${GREEN}Starting Web Portal on port 8211...${NC}"
        echo -e "${YELLOW}Backend: CI4 (http://localhost:8888/rista_ci4/public/)${NC}"
        echo ""
        cd web
        npm start
        ;;
    2)
        echo ""
        echo -e "${GREEN}Starting Admin Portal on port 4211...${NC}"
        echo -e "${YELLOW}Backend: CI3 (http://localhost:8888/rista/api/index.php/admin/)${NC}"
        echo ""
        cd admin
        npm start
        ;;
    3)
        echo ""
        echo -e "${GREEN}Starting both portals...${NC}"
        echo -e "${YELLOW}Web Portal: CI4, Admin Portal: CI3${NC}"
        echo ""
        
        # Start web portal in background
        cd web
        npm start &
        WEB_PID=$!
        
        # Wait a bit
        sleep 3
        
        # Start admin portal in background
        cd ../admin
        npm start &
        ADMIN_PID=$!
        
        echo ""
        echo -e "${GREEN}✓ Web Portal started (PID: $WEB_PID)${NC}"
        echo -e "${GREEN}✓ Admin Portal started (PID: $ADMIN_PID)${NC}"
        echo ""
        echo "Press Ctrl+C to stop both portals"
        
        # Wait for both processes
        wait
        ;;
    4)
        echo "Exiting..."
        exit 0
        ;;
    *)
        echo -e "${RED}Invalid choice${NC}"
        exit 1
        ;;
esac

