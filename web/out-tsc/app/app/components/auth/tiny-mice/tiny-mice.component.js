import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "@angular/platform-browser";
import * as i3 from "../../../shared/service/category.service";
import * as i4 from "../../../shared/service/configuration.service";
import * as i5 from "@angular/common";
import * as i6 from "@tinymce/tinymce-angular";
function TinyMiceComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "img", 5);
    i0.ɵɵelementEnd();
} }
function TinyMiceComponent_editor_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor", 6);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("init", ctx_r0.editorConf)("id", ctx_r0.id)("initialValue", ctx_r0.editorPatchValue);
} }
function TinyMiceComponent_editor_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor", 7);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", ctx_r0.id)("init", ctx_r0.editorConf);
} }
export class TinyMiceComponent {
    //// tiny mice closed
    constructor(auth, sanitizer, category, config, cdr) {
        this.auth = auth;
        this.sanitizer = sanitizer;
        this.category = category;
        this.config = config;
        this.cdr = cdr;
        ////tinymicee //
        this.emitEditorValue = new EventEmitter();
        this.hideMatEditor = false;
        this.inlineEditor = false;
        this.showLoader = true;
        ///// hiding bacground coldr toolbar in the editor
        this.hideBackcolr = this.hideBackcolr ? this.hideBackcolr : false;
        this.imageToolHide = this.imageToolHide ? this.imageToolHide : false;
        this.imgUrl = this.config?.getimgUrl();
    }
    ngOnChanges(changes) {
        // // set read only funtionlity
        if (this.readonly) {
            this.editorParent?.mode?.set('readonly');
        }
        else {
            this.editorParent?.mode?.set('design');
        }
    }
    ngOnInit() {
        let toolbar;
        if (this.hideBackcolr) {
            toolbar = ' undo redo | formatselect | imagetools | \\\n' +
                '      alignleft aligncenter alignright alignjustify | \\\n' +
                '      tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry  customInsertButton mybutton image | \\\n' +
                '      bullist numlist outdent indent | removeformat | help';
        }
        else if (this.imageToolHide) {
            toolbar = ' undo redo | formatselect | bold italic forecolor backcolor | \\\n' +
                '      alignleft aligncenter alignright alignjustify | \\\n' +
                '      tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry  customInsertButton mybutton | \\\n' +
                '      bullist numlist outdent indent | removeformat | help';
        }
        else if (this.hideMatEditor) {
            toolbar = 'undo redo | formatselect | bold italic forecolor backcolor imagetools | \\\n' +
                '      alignleft aligncenter alignright alignjustify | \\\n' +
                '      customInsertButton mybutton image | \\\n' +
                '      bullist numlist outdent indent | removeformat | help';
        }
        else {
            toolbar = 'undo redo | formatselect | bold italic forecolor backcolor imagetools | \\\n' +
                '      alignleft aligncenter alignright alignjustify | \\\n' +
                '      tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry  customInsertButton mybutton image | \\\n' +
                '      bullist numlist outdent indent | removeformat | help';
        }
        let input;
        this.imgUrl = this.config?.getimgUrl();
        this.getRandom = Math.random().toFixed(6);
        this.editorConf = {
            height: this.height ? this.height : 110,
            width: this.width ? this.width : '100%',
            menubar: false,
            inline: this.inlineEditor,
            hidden_input: false,
            body_class: 'inlineEditor',
            branding: false,
            // a11y_advanced_options: true,
            file_picker_types: 'image',
            paste_data_images: true,
            paste_as_text: true,
            image_advtab: false,
            image_uploadtab: true,
            relative_urls: false,
            remove_script_host: false,
            convert_urls: true,
            draggable_modal: true,
            elementpath: false,
            toolbar_mode: 'sliding',
            toolbar_sticky: false,
            license_key: 'gpl',
            base_url: 'tinymce',
            suffix: '.min',
            // images_upload_base_path: this.imgUrl,
            // images_upload_base_path: this.config?.getimgUrl() + '/' ,
            file_picker_callback: (cb, value, meta) => {
                console.log(this.config?.getimgUrl(), 'this.config?.getimgUrl()');
                console.log(cb, 'cb');
                console.log(value, 'value');
                console.log(meta, 'meta');
                this.parentCb = cb;
                input = document.getElementById('imageUpload' + this.getRandom);
                console.log(input, 'input');
                input.click();
            },
            plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount image imagetools',
            setup: editor => {
                this.editorParent = editor;
                // console.log(editor , 'editor');
                editor.on('init', () => {
                    console.log('onInit1');
                    this.showLoader = false;
                    if (this.readonly) {
                        editor.mode.set('readonly');
                    }
                    if (this.editorPatchValue) {
                        editor.setContent(this.editorPatchValue || '');
                    }
                    const content = editor.getContent();
                    const content1 = { editor, content };
                    this.emitEditorValue.emit(content1);
                    this.cdr.detectChanges();
                });
                editor.on('change', () => {
                    const content = editor.getContent();
                    if (this.readonly) {
                        editor.mode.set('readonly');
                    }
                    // if (this.editorPatchValue){
                    //   editor.setContent(this.editorPatchValue || '');
                    // }
                    const content1 = { editor, content };
                    this.emitEditorValue.emit(content1);
                });
                editor.on('keyup', () => {
                    const content = editor.getContent();
                    const content1 = { editor, content };
                    this.emitEditorValue.emit(content1);
                });
                if (this.showDropBtn) {
                    editor.ui.registry.addButton('mybutton', {
                        type: 'menubutton',
                        text: 'Add Drop Down',
                        onAction: function (_) {
                            editor.insertContent('<input class="dropDownValue" readonly placeholder="DropDown box">');
                        }
                    });
                }
                if (this.showInputBtn) {
                    editor.ui.registry.addButton('customInsertButton', {
                        text: 'Add Input',
                        onAction: function (_) {
                            editor.insertContent('<input class="inputValue" readonly placeholder="input box">');
                            // openInputDialog();
                        }
                    });
                }
            },
            external_plugins: {
                tiny_mce_wiris: 'https://www.wiris.net/demo/plugins/tiny_mce/plugin.js'
            },
            toolbar
        };
    }
    // manuallTrigger1(event){
    //   this.editorSet = event.editor;
    // }
    // manuallTrigger(){
    //   console.log(this.editorSet , 'set');
    //
    // }
    encodeImageFileAsURL(event) {
        console.log(event, 'lkhljl');
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const imgDetails = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const url = event.target.result;
                const getUrl = url.split(',');
                const pic = imgDetails.type.split('/');
                if (pic[1] == 'jpeg' || pic[1] == 'png' || pic[1] == 'jpg') {
                    this.onUploadKYCFinished(getUrl, imgDetails);
                }
                else {
                    console.error('JPEG ,PNG & JPG are the required type');
                }
            };
            reader.readAsDataURL(event.target.files[i]);
        }
    }
    onUploadKYCFinished(getUrlEdu, data) {
        const imgData = [{
                image: getUrlEdu[1],
                size: data.size,
                type: data.type,
                name: data.name
            }];
        this.getUrlImage(imgData);
    }
    getUrlImage(imgData) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: imgData,
            uploadtype: 'profile'
        };
        this.category.getImgUrl(data).subscribe((successData) => {
            this.getUrlImageSuccess(successData);
        }, (error) => {
            console.error(error, 'uploadFailed_TinyMice');
        });
    }
    getUrlImageSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(this.config?.getimgUrl() + '/' + successData.ResponseObject.imagepath[0].original_image_url, 'path');
            this.parentCb(this.config?.getimgUrl() + '/' + successData.ResponseObject.imagepath[0].original_image_url, { title: 'RISTA' });
            let input = document.getElementById('imageUpload' + this.getRandom);
            input.value = '';
        }
    }
    static { this.ɵfac = function TinyMiceComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TinyMiceComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.DomSanitizer), i0.ɵɵdirectiveInject(i3.CategoryService), i0.ɵɵdirectiveInject(i4.ConfigurationService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TinyMiceComponent, selectors: [["app-tiny-mice"]], inputs: { editorPatchValue: "editorPatchValue", readonly: "readonly", height: "height", width: "width", id: "id", showInputBtn: "showInputBtn", showDropBtn: "showDropBtn", hideBackcolr: "hideBackcolr", hideMatEditor: "hideMatEditor", imageToolHide: "imageToolHide", inlineEditor: "inlineEditor" }, outputs: { emitEditorValue: "emitEditorValue" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 4, vars: 5, consts: [["id", "custom-pdf-loader-editor", "style", "height: 10vh", 4, "ngIf"], [3, "init", "id", "initialValue", 4, "ngIf"], [3, "id", "init", 4, "ngIf"], ["accept", ".png, .jpg, .jpeg", "type", "file", 2, "display", "none", 3, "change", "id"], ["id", "custom-pdf-loader-editor", 2, "height", "10vh"], ["src", "assets/images/pre-loader/loader-01.svg", "alt", ""], [3, "init", "id", "initialValue"], [3, "id", "init"]], template: function TinyMiceComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TinyMiceComponent_div_0_Template, 2, 0, "div", 0)(1, TinyMiceComponent_editor_1_Template, 1, 3, "editor", 1)(2, TinyMiceComponent_editor_2_Template, 1, 2, "editor", 2);
            i0.ɵɵelementStart(3, "input", 3);
            i0.ɵɵlistener("change", function TinyMiceComponent_Template_input_change_3_listener($event) { return ctx.encodeImageFileAsURL($event); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showLoader);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.editorPatchValue);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.editorPatchValue);
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate1("id", "imageUpload", ctx.getRandom, "");
        } }, dependencies: [CommonModule, i5.NgIf, FormsModule, EditorModule, i6.EditorComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TinyMiceComponent, [{
        type: Component,
        args: [{ selector: 'app-tiny-mice', standalone: true, imports: [CommonModule, FormsModule, EditorModule], template: "<!--<editor id=\"editor\" *ngIf=\"editorPatchValue\"-->\n<div id=\"custom-pdf-loader-editor\" *ngIf=\"showLoader\" style=\"height: 10vh\">\n    <img src=\"assets/images/pre-loader/loader-01.svg\" alt=\"\">\n</div>\n<editor *ngIf=\"editorPatchValue\"\n        [init]=\"editorConf\"\n        [id]=\"id\"\n        [initialValue]=\"editorPatchValue\"\n></editor>\n<!--(onInit)=\"manuallTrigger1($event)\"-->\n\n<editor [id]=\"id\" *ngIf=\"!editorPatchValue\"\n        [init]=\"editorConf\"\n></editor>\n\n<input (change)=\"encodeImageFileAsURL($event)\" accept=\".png, .jpg, .jpeg\"  id=\"imageUpload{{getRandom}}\" style=\"display: none\" type='file' />\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.DomSanitizer }, { type: i3.CategoryService }, { type: i4.ConfigurationService }, { type: i0.ChangeDetectorRef }], { emitEditorValue: [{
            type: Output
        }], editorPatchValue: [{
            type: Input
        }], readonly: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], id: [{
            type: Input
        }], showInputBtn: [{
            type: Input
        }], showDropBtn: [{
            type: Input
        }], hideBackcolr: [{
            type: Input
        }], hideMatEditor: [{
            type: Input
        }], imageToolHide: [{
            type: Input
        }], inlineEditor: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TinyMiceComponent, { className: "TinyMiceComponent" }); })();
//# sourceMappingURL=tiny-mice.component.js.map