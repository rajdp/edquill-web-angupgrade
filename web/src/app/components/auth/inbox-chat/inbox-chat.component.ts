import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef, EventEmitter,
  inject,
  Input,
  OnDestroy,
  OnInit, Output,
  ViewChild
} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {EnvironmentService} from '../../../environment.service';
import {CommonService} from '../../../shared/service/common.service';
import {ToastrService} from 'ngx-toastr';
import {IDropdownSettings} from 'ng-multiselect-dropdown/multiselect.model';
import {SseClient} from 'ngx-sse-client';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-inbox-chat',
  templateUrl: './inbox-chat.component.html',
  styleUrls: ['./inbox-chat.component.scss']
})
export class InboxChatComponent implements OnInit, AfterViewInit, OnDestroy{

  public auth = inject(AuthService);
  public env = inject(EnvironmentService);
  public common = inject(CommonService);
  public toastr = inject(ToastrService);
  private sseClient = inject(SseClient);
  private cdr = inject(ChangeDetectorRef);
  public showSkeletonLoader = false;
  public messageList: any = [];
  public sendMessageInbox: any = '';
  public uploadMailFiles: any = [];
  public skeletonArray: any = [];
  public messageId = '';
  public messageData: any = {};
  @ViewChild('messageInput') messageInput!: ElementRef;
  @ViewChild('messagerChat', {static: false}) messagerChat: ElementRef;
  @Input() choosedData: any = {};
  @Input() arrayList: any = [];
  public studentList = [];
  @Input() to_id: any = [];
  @Output() updateCount?: EventEmitter<any> = new EventEmitter();
  public maximumAllowedUploadedSize = 10;
  public selectedStudent: any;
  public settings: IDropdownSettings = {
    singleSelection: false,
    idField: 'user_id',
    textField: 'name',
    enableCheckAll: true,
    selectAllText: 'Select all',
    unSelectAllText: 'UnSelect all',
    allowSearchFilter: true,
    clearSearchFilter: true,
    itemsShowLimit: 3,
    searchPlaceholderText: 'Search Student',
    noDataAvailablePlaceholderText: 'No data available',
    closeDropDownOnSelection: false,
  };
  subs: Subscription[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.messageList = this.arrayList;
    if (this.auth.getRoleId() != '5') {
      this.choosedData[0]?.students.forEach((items) => items.name = items.first_name + ' ' + items.last_name);
      this.studentList = this.choosedData[0]?.students ?? [];
      this.selectedStudent = [...this.studentList];
    }
    setTimeout(() => {
      const element = document.getElementById('messagerChat');
      if (element) {
        element.scrollTo({ behavior: 'smooth', top: element.scrollHeight });
      }
    }, 0);
    this.listMessage();
    this.updateMessageCount();
  }

  deleteUploadFiles(index) {
    this.uploadMailFiles.splice(index, 1);
  }

  clearReplyData() {
    this.messageData = {};
    this.messageId = '';
    this.auth.getRoleId() != '5' ? this.selectedStudent = [...this.studentList] : '';
    this.messageInput.nativeElement.focus();
  }

  encodePdfFileAsURL(event: any) {
    const images = [];
    const fileSize = [];
    const imageLength = event.target.files.length;
    const max10MB = (1024 * 1024) * this.maximumAllowedUploadedSize;
    event.target.files.forEach((items, index) => this.skeletonArray.push(index));
    this.auth.setSessionData('sse_loader', 'true');
    this.showSkeletonLoader = true;
    for (let i = 0; i < event.target.files.length; i++) {
      const fileDetails = event.target.files[i];
      const checkForDuplicateFile = this.uploadMailFiles.some(items => items.image == fileDetails[i].image && items.size == fileDetails[i].size);
      fileSize.push(fileDetails.size);
      const isLastElement = fileSize.length - 1 === i;
      if (isLastElement) {
        const currentFilesize = fileSize.reduce((a, c) => a + c);
        const oldFilesize = this.uploadMailFiles.length == 0 ? 0 : this.uploadMailFiles.map(o => o.size).reduce((a, c) => a + c);
        const totalSize = currentFilesize + oldFilesize;
        if (max10MB >= totalSize) {
          if (!checkForDuplicateFile) {
            const reader = new FileReader();
            reader.onload = (event: any) => {
              const uploadTypeList = event.target.result.split(',');
              const pic = fileDetails.name.split('.').slice(-1)[0];
              images.push({
                image: uploadTypeList[1],
                size: fileDetails.size,
                type: ['xlsx', 'xls', 'csv'].includes(pic.toLowerCase()) ? 'application/xlsx' : fileDetails.type,
                name: fileDetails.name,
              });
              const allowedTypes = ['pdf', 'doc', 'txt', 'docx', 'msword', 'xlsx', 'xls', 'csv', 'document', 'jpg', 'jpeg', 'png'];
              if (allowedTypes.includes(pic.toLowerCase())) {
                if (imageLength == images.length) {
                  images.forEach((items) => {
                    const name = items.name.split('.');
                    name.pop();
                    items.name = name.length > 1 ? name.join('.').toString() : name.toString();
                  });
                  setTimeout(() => {
                    this.onUploadKYCFinishedpdf(images);
                  }, 0);
                }
              } else {
                this.toastr.error('Pdf, Doc, Text, Excel and Docx are the required file format');
                this.auth.setSessionData('sse_loader', 'false');
                this.showSkeletonLoader = false;
                this.skeletonArray = [];
              }
            };
            reader.readAsDataURL(event.target.files[i]);
          } else {
            this.toastr.error('File already exist. Please choose a different file');
            this.auth.setSessionData('sse_loader', 'false');
            this.showSkeletonLoader = false;
            this.skeletonArray = [];
            break;
          }
        } else {
          this.toastr.error('Total upload file size calculate must be less than ' + this.maximumAllowedUploadedSize + ' MB');
          this.showSkeletonLoader = false;
          this.auth.setSessionData('sse_loader', 'false');
          this.skeletonArray = [];
          break;
        }
      } else {
        this.auth.setSessionData('sse_loader', 'false');
        this.showSkeletonLoader = false;
        this.skeletonArray = [];
      }
    }
  }

  listMessage() {
    const payload = {
      platform: 'web',
      role_id: this.auth.getRoleId(),
      user_id: this.auth.getUserId(),
      school_id: this.auth.getSessionData('school_id'),
      class_id: this.choosedData[0]?.class_id,
      response_type: 'SSE'
    };
    console.log(payload, 'payload');
    this.subs.push(this.sseClient.stream('mailbox/listMessages',
        { keepAlive: true, reconnectionDelay: 2000, responseType: 'event' },
        {body: payload}, 'POST').subscribe((event) => {
      if (event.type === 'error') {
        const errorEvent = event as ErrorEvent;
      } else if (event.type == 'message') {
        const data = JSON.parse((event as MessageEvent).data);
        data.messageList.forEach((item) => {
          let checkTeacherIdExist = true;
          const checkStudentIdExist = this.studentList.length != 0 ? this.studentList?.some(student => student.user_id == item.from_id) : false;
          if (this.auth.getRoleId() != '5') {
            checkTeacherIdExist = this.choosedData[0]?.teacher_ids.some(teacher => teacher == item.from_id);
          } else if (this.auth.getRoleId() == '5') {
            checkTeacherIdExist = this.choosedData[0]?.teacher_id.some(teacher => teacher == item.from_id);
          }
          item.createdByMe = item.from_id == this.auth.getUserId();
          item.allowReply = !item.createdByMe && (checkStudentIdExist || checkTeacherIdExist);
        });
        this.messageList = data.messageList;
        this.messageList.forEach(item => {
          if (item.parent_message_id) {
            const getIndex = this.messageList.findIndex(index => index.message_id == item.parent_message_id);
            item.parent_message_data = this.messageList[getIndex].body ?? '';
          } else {
            item.parent_message_data = '';
          }
        });
        this.cdr.detectChanges();
      }
    }));
  }

  updateMessageCount() {
    const payload = {
      platform: 'web',
      role_id: this.auth.getRoleId(),
      user_id: this.auth.getUserId(),
      class_id: this.choosedData[0]?.class_id,
      school_id: this.auth.getSessionData('school_id'),
      is_read: '1'
    };
    this.auth.postService(payload, 'mailbox/update').subscribe((successData: any) => {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
          this.updateCount.emit(0);
        }
    }, (error) => console.error(error, 'error_updateCount'));
  }

  routeToParentMessage(data, event) {
    console.log(data.parent_message_id);
    if (!data.parent_message_id) {
      event.stopPropagation();
      return;
    }
    const element = document.getElementById('message' + data.parent_message_id);
    console.log(element, 'eee');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  sendMessage() {
    if (this.sendMessageInbox.trim() != '' || this.uploadMailFiles.length != 0) {
      const sendId = this.auth.getRoleId() == '4' ? [...this.selectedStudent.map(user => user.user_id), ...this.to_id] : this.to_id;
      const payload = {
        platform: 'web',
        role_id: this.auth.getRoleId(),
        user_id: this.auth.getUserId(),
        school_id: this.auth.getSessionData('school_id'),
        body: this.sendMessageInbox,
        class_id: this.choosedData[0]?.class_id,
        attachment: this.uploadMailFiles,
        message_id: this.messageId ?? '',
        to_id: sendId
      };
      this.auth.postService(payload, 'mailbox/sendMessage').subscribe((successData: any) => {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
          this.sendMessageInbox = '';
          this.messageInput.nativeElement.value = '';
          this.uploadMailFiles = [];
          this.messageId = '';
          if (this.auth.getRoleId() != '5') {
            this.selectedStudent = [...this.studentList];
          }
          this.listMessage();
          setTimeout(() => {
            const element = document.getElementById('messagerChat');
            if (element) {
              console.log(element);
              element.scrollTo({ behavior: 'smooth', top: element.scrollHeight });
            }
          }, 1000);
        }
      }, (error) => console.error(error, 'error_Message'));
    }
  }

  reply(data) {
    console.log(data, 'messageData');
    this.messageData = data;
    this.messageId = data.message_id;
    this.messageInput.nativeElement.focus();
    this.studentList.forEach((items) => {
      if (items.user_id == data.from_id) {
        this.selectedStudent = [];
        this.selectedStudent = [...[items]];
      }
    });
  }

  onUploadKYCFinishedpdf(getUrlEdu) {
    const data = {
      platform: 'web',
      role_id: this.auth.getRoleId(),
      user_id: this.auth.getUserId(),
      image_path: getUrlEdu,
      uploadtype: 'mailbox'
    };
    this.common.fileUpload(data).subscribe(
        (successData) => {
          this.pdfuploadSuccess(successData);
        },
        (error) => {
          this.auth.setSessionData('sse_loader', 'false');
          this.showSkeletonLoader = false;
          this.skeletonArray = [];
          console.error(error);
        }
    );
  }

  pdfuploadSuccess(successData) {
    if (successData.IsSuccess) {
      this.toastr.success(successData.ResponseObject.message);
      this.uploadMailFiles = [...this.uploadMailFiles, ...successData.ResponseObject.imagepath];
      this.uploadMailFiles.map(items => items.sizeMb = ((items.size / 1048576).toFixed(2) + 'MB'));
      setTimeout(() => {
        this.messageInput.nativeElement.focus();
      }, 0);
      console.log(this.uploadMailFiles, 'response');
      this.showSkeletonLoader = false;
      this.auth.setSessionData('sse_loader', 'false');
      this.skeletonArray = [];
    } else {
      this.toastr.error(successData.ErrorObject.message);
      this.showSkeletonLoader = false;
      this.auth.setSessionData('sse_loader', 'false');
      this.skeletonArray = [];
    }
  }

  enterMessageValue(event) {
    this.sendMessageInbox = event;
  }

  ngAfterViewInit(): void {
    this.messageInput.nativeElement.focus();
  }

  ngOnDestroy(): void {
    this.subs.forEach((val) => {
      val.unsubscribe();
    });
    this.auth.setSessionData('sse_loader', 'false');
  }

}
