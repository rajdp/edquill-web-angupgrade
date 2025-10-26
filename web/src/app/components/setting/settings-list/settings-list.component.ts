import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../../../shared/service/book.service';

@Component({
    selector: 'app-settings-list',
    templateUrl: './settings-list.component.html',
    styleUrls: ['./settings-list.component.scss']
})
export class SettingsListComponent implements OnInit {

    constructor(public authService: AuthService, public settingsList: BookService, public formBuilder: FormBuilder) {
        this.getSettingsList();
        this.addCategoryForm = this.formBuilder.group({
            is_parent: [''],
            category_name: [''],
            description: [''],
            parent_category: [''],
            is_edit: ['0'],
            category_id: ['0']
        });
    }

    @ViewChild('content') content;
    public closeResult: string;
    public products = [];
    public addCategoryForm: FormGroup;


    public settings = {
        hideSubHeader: true,
        mode: 'external',
        edit: {
            confirmSave: false,
        },
        actions: {
            position: 'right',
            edit: true
        },
        columns: {
            name: {
                title: 'Name',
                editable: false
            },
            value: {
                title: 'Value',
                editable: true
            }
        },
    };

    getSettingsList() {
        const data = {
            user_id: this.authService.getUserId(),
            platform: 'web',
            role_id: this.authService.getRoleId()
        };
        this.settingsList.getSettingsList(data).subscribe((successData) => {
                this.getSettingsListSuccess(successData);
            },
            (error) => {
                console.error(error);
            });
    }

    getSettingsListSuccess(successData) {
        if (successData.IsSuccess) {
            this.products = successData.ResponseObject;
        }
    }

    ngOnInit() {
    }

}

@Component({
    selector: 'button-view',
    template: `
        <div class="form-group">
            <label class="mb-1">Featured</label><br>
            <!--<label class="switch ml-2"><input type="checkbox" id="togBtn" [(ngModel)]="status" (change)="statusListing(status)"><div class="slider round"   >&lt;!&ndash;ADDED HTML &ndash;&gt;<span class="on" >ON</span><span class="off" >OFF</span>&lt;!&ndash;END&ndash;&gt;</div></label>-->
        </div>
        <style>
            /*//toogle button on off*/
            .switch {
                position: relative;
                display: inline-block;
                width: 90px;
                height: 34px;
            }

            .switch input {
                display: none;
            }

            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ca2222;
                -webkit-transition: .4s;
                transition: .4s;
            }

            .slider:before {
                position: absolute;
                content: "";
                height: 26px;
                width: 26px;
                left: 4px;
                bottom: 4px;
                background-color: white;
                -webkit-transition: .4s;
                transition: .4s;
            }

            input:checked + .slider {
                background-color: #2ab934;
            }

            input:focus + .slider {
                box-shadow: 0 0 1px #2196F3;
            }

            input:checked + .slider:before {
                -webkit-transform: translateX(55px);
                -ms-transform: translateX(55px);
                transform: translateX(55px);
            }

            /*------ ADDED CSS ---------*/
            .on {
                display: none;
            }

            .on, .off {
                color: white;
                position: absolute;
                transform: translate(-50%, -50%);
                top: 50%;
                left: 50%;
                font-size: 10px;
                font-family: Verdana, sans-serif;
            }

            input:checked + .slider .on {
                display: block;
            }

            input:checked + .slider .off {
                display: none;
            }

            /*--------- END --------*/

            /* Rounded sliders */
            .slider.round {
                border-radius: 34px;
            }

            .slider.round:before {
                border-radius: 50%;
            }

            .btn-qooh-color {
                background: blue;
                color: #fff;
            }

        </style>
    `
})

export class ButtonViewComponent {
    status: any;
    renderValue: string;

    @Input() value: string | number;
    @Input() rowData: any;

    @Output() save: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.status = false;
        // this.renderValue = this.value.toString().toUpperCase();
    }

    // onNoClick(value): void {
    //   this.dialogRef.close(value);
    // }
    statusListing(event) {
        this.status = !this.status;
        this.rowData.status = this.status;
        this.save.emit(this.rowData);
        // this.statusValue = event;
    }
}
