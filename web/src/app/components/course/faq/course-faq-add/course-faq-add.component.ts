import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {urls} from 'src/app/shared/utils/urls';
import {AuthService} from '../../../../shared/service/auth.service';
import {ValidationService} from '../../../../shared/service/validation.service';

@Component({
    selector: 'app-course-faq-add',
    templateUrl: './course-faq-add.component.html',
    styleUrls: ['./course-faq-add.component.scss']
})
export class CourseFaqAddComponent implements OnInit {
    public faqForm: FormGroup;
    public type = 'add';
    public faqEditDetails: any;
    public courseListData = [];
    public questionEditor: any = '';
    public answerEditor: any = '';

    constructor(public auth: AuthService, public builder: FormBuilder, public route: ActivatedRoute, public router: Router,
                public validatorService: ValidationService, public toastr: ToastrService) {
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.declareFormGroup();
        this.getCourseList();
        if (this.type == 'edit') {
            this.patchFaqDetails();
        }
    }

    ngOnInit(): void {
    }

    declareFormGroup() {
        this.faqForm = this.builder.group({
            question: ['', Validators.required],
            answer: ['', Validators.required],
            status: ['A', Validators.required],
            course_id: [[], Validators.required]
        });
    }

    getCourseList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.courseList).subscribe(
            (successData) => {
                this.courseListSuccess(successData);
            },
            (error) => {
                console.error(error, ' error');
            }
        );
    }

    courseListSuccess(successData) {
        console.log(successData, 'successData');
        this.courseListData = successData.IsSuccess ? successData.ResponseObject : [];
        console.log(this.courseListData, 'courseListData');
    }

    patchFaqDetails() {
        this.faqEditDetails = JSON.parse(this.auth.getSessionData('getFaqDetails'));
        this.faqForm.controls.course_id.patchValue(this.faqEditDetails.course_id);
        this.faqForm.controls.question.patchValue(this.faqEditDetails.title);
        this.questionEditor = this.faqEditDetails.title;
        this.faqForm.controls.answer.patchValue(this.faqEditDetails.answer);
        this.answerEditor = this.faqEditDetails.answer;
        this.faqForm.controls.status.patchValue(this.faqEditDetails.status);
    }

    editorQuestionValue(event) {
        this.faqForm.controls.question.patchValue(event.content);
    }

    editorAnswerValue(event) {
        this.faqForm.controls.answer.patchValue(event.content);
    }

    addFaqDetails() {
        if (this.faqForm.valid) {
            let data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                course_id: this.faqForm.controls.course_id.value,
                title: this.faqForm.controls.question.value ? this.faqForm.controls.question.value : '',
                answer: this.faqForm.controls.answer.value ? this.faqForm.controls.answer.value : '',
                status: this.faqForm.controls.status.value,
                school_id: this.auth.getSessionData('school_id')
            };
            if (this.type == 'edit') {
                data['id'] = this.faqEditDetails.id;
            }
            this.auth.postService(data, this.type == 'add' ? urls.addFaq : urls.updateFaq).subscribe(
                (successData) => {
                    this.addFaqSuccess(successData);
                },
                (error) => {
                    console.error(error, ' error');
                });
        } else {
            this.validatorService.validateAllFormFields(this.faqForm);
            this.toastr.error('Please fill all Mandatory fields');
        }
    }

    addFaqSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.router.navigate(['/course/faq/list']);
        } else {
            this.toastr.error(successData.ErrorObject);
        }
    }
}
