import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { urls } from 'src/app/shared/utils/urls';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-course-wizard',
    templateUrl: './course-wizard.component.html',
    styleUrls: ['./course-wizard.component.scss']
})
export class CourseWizardComponent implements OnInit, OnDestroy {
    currentStep = 1;
    totalSteps = 3;
    
    // Step data
    selectedCategory: any = null;
    selectedCourse: any = null;
    categoryList: any[] = [];
    filteredCategoryList: any[] = [];
    courseList: any[] = [];
    filteredCourseList: any[] = [];
    createdCourse: any = null;
    createdClass: any = null;
    
    // Search
    categorySearchText = '';
    courseSearchText = '';
    
    // Flags
    hasExistingCourses = false;
    skipCourseCreation = false;
    
    // Subscriptions
    private routeSubscription: Subscription;
    
    // Progress tracking
    steps = [
        { number: 1, title: 'Select Category', icon: 'fa-folder', completed: false, active: true },
        { number: 2, title: 'Select/Create Course', icon: 'fa-book', completed: false, active: false },
        { number: 3, title: 'Create Class', icon: 'fa-users', completed: false, active: false }
    ];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private auth: AuthService,
        private toastr: ToastrService
    ) {}

    ngOnInit(): void {
        // Subscribe to query parameter changes for step navigation
        this.routeSubscription = this.route.queryParams.subscribe(params => {
            const step = params['step'];
            if (step) {
                const stepNum = parseInt(step, 10);
                if (stepNum >= 1 && stepNum <= this.totalSteps) {
                    this.currentStep = stepNum;
                    this.updateStepStatus();
                }
            } else {
                // No step param, default to step 1
                this.updateUrlWithStep(1);
            }
        });
        
        this.loadCategoriesWithCourses();
        
        // Check if returning from edit/create
        const wizardReturn = this.auth.getSessionData('wizard_return');
        if (wizardReturn === 'true') {
            // Restore wizard state after user returns from edit/create
            setTimeout(() => {
                this.restoreWizardState();
            }, 500);
        }
    }

    ngOnDestroy(): void {
        if (this.routeSubscription) {
            this.routeSubscription.unsubscribe();
        }
    }

    updateUrlWithStep(step: number) {
        // Update URL with current step without triggering navigation
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { step: step },
            queryParamsHandling: 'merge',
            replaceUrl: false  // Create history entry for back button
        });
    }

    loadCategoriesWithCourses() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        
        // Load categories
        this.auth.postService(data, urls.categoryList).subscribe(
            (response: any) => {
                if (response.IsSuccess) {
                    this.categoryList = response.ResponseObject;
                    this.filteredCategoryList = [...this.categoryList];
                    this.loadAllCourses();
                }
            },
            (error) => {
                console.error('Error loading categories:', error);
                this.toastr.error('Failed to load categories');
            }
        );
    }

    loadAllCourses() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        
        this.auth.postService(data, urls.courseList).subscribe(
            (response: any) => {
                if (response.IsSuccess) {
                    this.courseList = response.ResponseObject;
                    this.calculateCourseCounts();
                }
            },
            (error) => {
                console.error('Error loading courses:', error);
            }
        );
    }

    calculateCourseCounts() {
        // Count courses per category
        this.categoryList.forEach(category => {
            const count = this.courseList.filter(course => 
                course.category_id && course.category_id.includes(category.category_id.toString())
            ).length;
            category.course_count = count;
        });
        this.filteredCategoryList = [...this.categoryList];
    }

    searchCategories() {
        if (!this.categorySearchText.trim()) {
            this.filteredCategoryList = [...this.categoryList];
            return;
        }
        
        const searchLower = this.categorySearchText.toLowerCase();
        this.filteredCategoryList = this.categoryList.filter(cat =>
            cat.category_name.toLowerCase().includes(searchLower) ||
            (cat.description && cat.description.toLowerCase().includes(searchLower))
        );
    }

    searchCourses() {
        if (!this.courseSearchText.trim()) {
            this.filteredCourseList = this.getCoursesForCategory();
            return;
        }
        
        const searchLower = this.courseSearchText.toLowerCase();
        this.filteredCourseList = this.getCoursesForCategory().filter(course =>
            course.course_name.toLowerCase().includes(searchLower) ||
            (course.description && course.description.toLowerCase().includes(searchLower))
        );
    }

    getCoursesForCategory() {
        if (!this.selectedCategory) return [];
        
        return this.courseList.filter(course => 
            course.category_id && 
            course.category_id.includes(this.selectedCategory.category_id.toString())
        );
    }

    selectCategory(category: any) {
        this.selectedCategory = category;
        this.auth.setSessionData('wizard_category', JSON.stringify(category));
        
        // Load courses for this category
        const coursesForCategory = this.getCoursesForCategory();
        this.hasExistingCourses = coursesForCategory.length > 0;
        this.filteredCourseList = coursesForCategory;
        this.courseSearchText = '';
    }

    selectCourse(course: any) {
        this.selectedCourse = course;
        this.skipCourseCreation = true;
        this.auth.setSessionData('wizard_course', JSON.stringify(course));
    }

    createNewCategory() {
        // Navigate to category creation with return path
        this.saveWizardState();
        this.auth.setSessionData('wizard_return', 'true');
        this.router.navigate(['/course/category/add']);
    }

    editCategory(category: any, event: Event) {
        // Prevent card selection when clicking edit button
        event.stopPropagation();
        
        // Save current wizard state
        this.saveWizardState();
        
        // Set category for editing
        this.auth.setSessionData('edit_course_category_Data', JSON.stringify(category));
        this.auth.setSessionData('course_category_maximumCount', this.categoryList.length);
        this.auth.setSessionData('wizard_return', 'true');
        this.auth.setSessionData('wizard_editing', 'category');
        
        // Navigate to edit
        this.router.navigate(['/course/category/edit']);
    }

    editCourse(course: any, event: Event) {
        // Prevent card selection when clicking edit button
        event.stopPropagation();
        
        // Save current wizard state
        this.saveWizardState();
        
        // Set course for editing
        sessionStorage.setItem('getCourseDetails', JSON.stringify(course));
        this.auth.setSessionData('wizard_return', 'true');
        this.auth.setSessionData('wizard_editing', 'course');
        
        // Navigate to edit
        this.router.navigate(['/course/details/edit']);
    }

    saveWizardState() {
        // Save current progress for when user returns
        const state = {
            currentStep: this.currentStep,
            selectedCategory: this.selectedCategory,
            selectedCourse: this.selectedCourse,
            categorySearchText: this.categorySearchText,
            courseSearchText: this.courseSearchText
        };
        this.auth.setSessionData('wizard_state', JSON.stringify(state));
    }

    restoreWizardState() {
        const stateStr = this.auth.getSessionData('wizard_state');
        if (stateStr) {
            try {
                const state = JSON.parse(stateStr);
                this.currentStep = state.currentStep || 1;
                this.selectedCategory = state.selectedCategory;
                this.selectedCourse = state.selectedCourse;
                this.categorySearchText = state.categorySearchText || '';
                this.courseSearchText = state.courseSearchText || '';
                
                this.updateStepStatus();
                this.updateUrlWithStep(this.currentStep);
                
                // Reload lists if needed
                if (this.selectedCategory) {
                    this.filteredCourseList = this.getCoursesForCategory();
                    this.hasExistingCourses = this.filteredCourseList.length > 0;
                }
            } catch (e) {
                console.error('Error restoring wizard state:', e);
            }
        }
    }

    goToStep(stepNumber: number) {
        if (stepNumber === 2 && !this.selectedCategory) {
            this.toastr.warning('Please select a category first');
            return;
        }
        
        if (stepNumber === 3 && !this.selectedCourse && !this.createdCourse) {
            this.toastr.warning('Please select or create a course first');
            return;
        }

        this.currentStep = stepNumber;
        this.updateStepStatus();
        this.updateUrlWithStep(stepNumber);
    }

    nextStep() {
        if (this.currentStep === 1 && !this.selectedCategory) {
            this.toastr.warning('Please select a category first');
            return;
        }

        if (this.currentStep === 2 && this.hasExistingCourses && !this.selectedCourse && !this.skipCourseCreation) {
            this.toastr.warning('Please select an existing course or choose to create a new one');
            return;
        }

        // If user selected existing course in step 2, use it
        if (this.currentStep === 2 && this.selectedCourse) {
            this.createdCourse = this.selectedCourse;
        }

        if (this.currentStep < this.totalSteps) {
            this.steps[this.currentStep - 1].completed = true;
            this.steps[this.currentStep - 1].active = false;
            this.currentStep++;
            this.steps[this.currentStep - 1].active = true;
            this.updateUrlWithStep(this.currentStep);
        }
    }

    chooseToCreateNewCourse() {
        this.selectedCourse = null;
        this.skipCourseCreation = false;
    }

    previousStep() {
        if (this.currentStep > 1) {
            this.steps[this.currentStep - 1].active = false;
            this.currentStep--;
            this.steps[this.currentStep - 1].active = true;
            this.updateUrlWithStep(this.currentStep);
        }
    }

    updateStepStatus() {
        this.steps.forEach((step, index) => {
            step.active = (index + 1) === this.currentStep;
            step.completed = (index + 1) < this.currentStep;
        });
    }

    createCourse() {
        // Save wizard state
        this.saveWizardState();
        
        // Navigate to course creation with pre-selected category
        this.auth.setSessionData('wizard_category_id', this.selectedCategory.category_id);
        this.auth.setSessionData('wizard_return', 'true');
        this.auth.setSessionData('wizard_step', '2');
        this.router.navigate(['/course/details/add']);
    }

    createClass() {
        // Save wizard state
        this.saveWizardState();
        
        // Navigate to class creation with pre-selected course
        const courseToUse = this.selectedCourse || this.createdCourse;
        if (courseToUse) {
            this.auth.setSessionData('wizard_course_id', courseToUse.course_id);
            this.auth.setSessionData('wizard_course_name', courseToUse.course_name);
        }
        this.auth.setSessionData('wizard_return', 'true');
        this.router.navigate(['/class/create-class/add']);
    }

    finish() {
        this.clearWizardData();
        this.toastr.success('Workflow completed successfully!');
        this.router.navigate(['/course/details/list']);
    }

    cancel() {
        this.clearWizardData();
        this.router.navigate(['/course/details/list']);
    }

    clearWizardData() {
        this.auth.removeSessionData('wizard_category');
        this.auth.removeSessionData('wizard_category_id');
        this.auth.removeSessionData('wizard_course_id');
        this.auth.removeSessionData('wizard_return');
        this.auth.removeSessionData('wizard_step');
    }
}

