import { Component, OnDestroy, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {ClassService} from '../../../shared/service/class.service';
import {ContentService} from '../../../shared/service/content.service';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { CreatorService } from '../../../shared/service/creator.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent implements OnInit, OnDestroy {
  public contentQuestionList: any;
  public questionsItems: any;
  public type: any;
  public webhost: any;
  public contentName: any;
  public showApiFeedBackTypeQns = true;
  constructor(public auth: AuthService, public classService: ClassService, public creator: CreatorService,
     public contentService: ContentService, public config: ConfigurationService,  public sanitizer: DomSanitizer, public router: Router, public route: ActivatedRoute) {
    this.route.params.forEach((params) => {
      this.type = params.type;
    });
    this.webhost = this.config.getimgUrl();
    if (this.type == 'add'){
      this.questionsItems = 'multipleChoice';
    }else if (this.type == 'edit'){
    }
  }

  ngOnInit(): void {
    const editData = JSON.parse(this.auth.getSessionData('editresources'));
    this.contentName = editData.name;
    this.contentQuestion();
    this.creator.changeViewList(true);
    const qnsList = JSON.parse(this.auth.getSessionData('qnsList'));
    this.showApiFeedBackTypeQns = qnsList ? qnsList.length == 0 : true;
    console.log(this.showApiFeedBackTypeQns)
  }

  ngOnDestroy(): void {
    this.creator.changeViewList(false);
  }

  checkNeedToShow(data) {
    return data.resource_type == 'Essay Writing' && data.types.some(qns => qns.question_type_id == '55') && !this.showApiFeedBackTypeQns;
  }

  backAction(){
    this.auth.setSessionData('cfs_question_no', '');
    this.router.navigate(['content-text-resource/text-assignment/qEdit']);
  }

  contentQuestion() {
    const data = {
      platform: 'web',
      role_id: this.auth.getRoleId(),
      user_id: this.auth.getUserId(),
      content_format: '3'
    };
    this.contentService.contentQuestion(data).subscribe( (successData) => {
          this.gradeListSuccess(successData);
        },
        (error) => {
          this.gradeListFailure(error);
        });
  }
  gradeListSuccess(successData) {
    if (successData.IsSuccess) {
      this.contentQuestionList = successData.ResponseObject;
      this.questionsItems = this.contentQuestionList[0].resource_type;
    }
  }
  gradeListFailure(error){}
  questionType(type){
    this.questionsItems = type;
  }
  questionsSelected(value) {
    console.log(value, 'questionValue')
    this.auth.setSessionData('questionID', value.question_type_id);
    this.router.navigate(['/content-text-resource/question-paper/add']);
  }
}
