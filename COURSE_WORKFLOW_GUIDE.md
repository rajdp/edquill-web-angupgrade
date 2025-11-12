# Course Management Workflow Guide

## 🎯 Overview
We've created a streamlined, step-by-step workflow for course management that guides users through creating categories, courses, and classes in a logical sequence.

## ✨ New Features

### 1. **Course Creation Wizard** 🪄
A guided 3-step workflow that simplifies the entire course setup process.

**Access:** 
- **URL:** `http://localhost:8211/#/course/wizard`
- **Quick Access Buttons:** Available on all course-related pages

**Workflow Steps:**

#### Step 1: Select or Create Category
- View all existing categories in a card-based layout
- Click any category card to select it
- Selected category shows a check mark
- **Create New Category** button navigates to category creation form
- Cannot proceed without selecting a category

#### Step 2: Create Course
- Shows the selected category
- **Create New Course** button opens the course creation form
- Pre-fills the category selection in the course form
- Category is locked to the one selected in Step 1

#### Step 3: Create Class
- Shows the selected category and created course
- **Create New Class** button opens the class creation form
- Pre-fills the course selection in the class form
- Course is linked to the one created in Step 2

**Features:**
- ✅ Visual progress indicator showing current step
- ✅ Step completion tracking
- ✅ Navigation between steps with validation
- ✅ Cancel at any time to return to course list
- ✅ Finish button to complete the workflow

---

### 2. **Enhanced Course Details Page** 📚

**Access:** `http://localhost:8211/#/course/details/list`

**New Features:**

#### Quick Setup Wizard Button
- Green **"Quick Setup Wizard"** button in the header
- Tooltip: "Guided workflow to create Category → Course → Class"
- Launches the step-by-step wizard

#### View Classes for Each Course
- New **"View Classes"** button (users icon) in the Actions column
- Click to see all classes associated with a specific course
- Navigates to the Class List with the course filter applied
- Shows only classes linked to that course

**Updated Actions Column:**
- 🔵 **View Classes** (blue button with users icon)
- 🔷 **Edit Course** (blue button with pencil icon)

---

### 3. **Enhanced Category List Page** 📁

**Access:** `http://localhost:8211/#/course/category/list`

**New Features:**
- **Quick Setup Wizard** button in the header
- Launches the guided workflow starting from category selection

---

## 🔄 Typical Workflows

### Workflow 1: Using the Wizard (Recommended for New Users)
1. Click **"Quick Setup Wizard"** from any course page
2. **Step 1:** Select existing category or create new
3. **Step 2:** Create course for the selected category
4. **Step 3:** Create class for the created course
5. Click **"Finish"** to complete

### Workflow 2: Traditional Method
1. Go to **Course Category** → Create category
2. Go to **Course Details** → Create course → Select category
3. Go to **Classes** → Create class → Select course

### Workflow 3: View Classes for a Course
1. Go to **Course Details** list
2. Find the course you want
3. Click the **"View Classes"** (users icon) button
4. See all classes for that course

---

## 📋 Navigation Map

```
Course Management
│
├── Quick Setup Wizard (/course/wizard)
│   ├── Step 1: Category Selection
│   ├── Step 2: Course Creation
│   └── Step 3: Class Creation
│
├── Course Category (/course/category/list)
│   ├── List categories
│   ├── Add category
│   └── Launch wizard
│
├── Course Details (/course/details/list)
│   ├── List courses
│   ├── Add course
│   ├── View classes (per course)
│   └── Launch wizard
│
└── Classes (/class/list-class)
    ├── List all classes
    ├── Filter by course
    └── Add class
```

---

## 💡 Best Practices

### For New Schools/First-Time Setup:
1. Use the **Quick Setup Wizard**
2. Create categories first (e.g., "Math", "English", "Science")
3. Create courses under each category
4. Create classes for each course offering

### For Existing Schools:
1. Use **Course Details** → **View Classes** to manage course offerings
2. See which courses have active classes
3. Identify courses that need new class sections

### For Quick Course Creation:
1. If category exists: Start from **Course Details** → **Add Course**
2. If category doesn't exist: Use **Quick Setup Wizard**

---

## 🎨 UI/UX Improvements

### Visual Indicators
- ✅ **Progress bar** in wizard showing current step
- ✅ **Check marks** on completed steps
- ✅ **Icons** for all buttons and actions
- ✅ **Color coding**:
  - Green: Wizard/Quick Actions
  - Blue: Primary actions (Edit, View)
  - Red: Delete actions

### User Guidance
- ✅ **Tooltips** on all buttons
- ✅ **Helper text** explaining each step
- ✅ **Validation** prevents proceeding without required selections
- ✅ **Clear navigation** with Previous/Next/Finish buttons

---

## 🔗 API Endpoints Used

### Course List
- **POST** `/course/list` - Get courses with classes

### Category List
- **POST** `/category/list` - Get all categories

### Class List (Filtered)
- **POST** `/class/list` - Get classes (with course filter)

---

## 🐛 Troubleshooting

### Wizard doesn't show categories
- Ensure categories exist in the database
- Check school_id is properly set in session
- Verify category list API is returning data

### View Classes shows no results
- Verify classes are linked to the course via `course_id`
- Check that classes have the correct `entity_id`

### Category/Course pre-selection not working
- Clear browser session storage
- Ensure wizard session keys are being set correctly

---

## 📞 Support

For issues or questions about the course workflow:
1. Check this guide first
2. Verify database relationships (category_id, course_id, entity_id)
3. Check browser console for errors
4. Review API responses in Network tab

---

**Created:** 2025-11-05  
**Version:** 1.0  
**Components:** CourseWizardComponent, Course Details, Category List




