import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { userListDB } from 'src/app/shared/tables/list-users';
import {CategoryService} from '../../../shared/service/category.service';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  public user_list = [];
  public listData: any;
  public deleteUser: any;
  public allowDelete: boolean;
  private modalRef: NgbModalRef;
  public closeResult: string;
  public imgUrl: any;
  @ViewChild('content') modalContent: TemplateRef<any>;

  constructor(public category: CategoryService, public config: NgbModalConfig, public confi: ConfigurationService, private modalService: NgbModal, public auth: AuthService, public commondata: CommonDataService, public route: Router) {
    this.user_list = userListDB.list_user;
    this.imgUrl = this.confi.getimgUrl();
    this.userList();
    config.backdrop = 'static';
    config.keyboard = false;
    this.allowDelete = false;
  }

  public settings = {
      hideSubHeader: false,
      actions: {
        custom: [
          {
            name: 'editAction',
            title: '<i class="fa  fa-pencil"></i>'
          },
          {
            name: 'deleteAction',
            title: '&nbsp;&nbsp;<i class="fa fa-trash" aria-hidden="true"></i>'
          }
        ],
        add: false,
        edit: false,
        delete: false,
        position: 'right',
      },


    columns: {
      avatar: {
        title: 'Avatar',
        type: 'html'
      },
      first_name: {
        title: 'First Name',
      },
      last_name: {
        title: 'Last Name'
      },
      gender: {
        title: 'Gender'
      },
      birthday: {
        title: 'DOB'
      },
      email_id: {
        title: 'Email'
      },
      mobile: {
        title: 'Mobile'
      },
      location: {
        title: 'Location'
      },
      status: {
        title: 'Status'
      },
      role: {
        title: 'Role'
      },
    },
  };

  ngOnInit() {

  }



  onCustomAction(event) {
    switch ( event.action) {
      case 'editAction':
       this.auth.setSessionData('editUser', JSON.stringify(event.data));
        this.route.navigate(['/settings/profile/edit']);
        break;

      case 'deleteAction':
        this.deleteUser = event.data;
         if(this.auth.getSessionData('go-userid') != this.deleteUser.user_id){
           this.allowDelete = true;
         } else{
           this.allowDelete = false;
         }
        this.showModal();
    }
  }


  showModal() {
    this.modalRef = this.modalService.open(this.modalContent);
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  open(content) {
    this.modalService.open(content);
  }

  onSave() {
    this.modalRef.close();
  }


  deleteConfirm(){
    this.commondata.showLoader(true);
    const data = {
      platform: 'web',
      selected_user_id: this.deleteUser.user_id,
      role_id: this.auth.getSessionData('go-roleid'),
      user_id: this.auth.getSessionData('go-userid')
    };
    this.category.deleteUser(data).subscribe( (successData) => {
          this.deleteConfirmSuccess(successData);
        },
        (error) => {
          this.deleteConfirmFailure(error);
        });
  }


  deleteConfirmSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.userList();
      this.onSave();
    }
  }
  deleteConfirmFailure(error) {
    this.commondata.showLoader(false);
    console.log(error, 'error');
  }



  userList() {
    this.commondata.showLoader(true);
    const data = {
      platform: 'web',
      type: 'list',
      role_id: this.auth.getSessionData('go-roleid'),
      user_id: this.auth.getSessionData('go-userid')
    };
    this.category.getUserList(data).subscribe( (successData) => {
          this.userListSuccess(successData);
        },
        (error) => {
          this.userListFailure(error);
        });
  }
  userListSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.listData = successData.ResponseObject;
      this.listData.forEach((value, index, array) => {
        this.listData[index].avatar = "<img src='assets/images/dashboard/default.png' class='imgTable'>";
        this.listData[index].role = this.listData[index].role == 1 ? 'Admin' : 'User';
        this.listData[index].status = this.listData[index].status == 1 ? 'Active' : this.listData[index].status == 2 ?
            'Inactive' : this.listData[index].status == 3 ? 'Suspended' : this.listData[index].status == 4 ? 'Deleted': '' ;
      });
    }
  }
  userListFailure(error) {
    this.commondata.showLoader(false);
    console.log(error, 'error');
  }


}

