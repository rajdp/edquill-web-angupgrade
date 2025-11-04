import { Component, EventEmitter, Input, Output } from '@angular/core';
// import EventEmitter = require("events");
// import * as JXG from '../../assets/js/jsxgraphcore.js';
import * as JXG from '../../../../assets/js/jsxgraphcore.js';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/class.service";
import * as i3 from "../../../shared/service/content.service";
import * as i4 from "../../../shared/service/configuration.service";
import * as i5 from "@angular/platform-browser";
import * as i6 from "@angular/forms";
import * as i7 from "../../../shared/service/creator.service";
import * as i8 from "ngx-toastr";
import * as i9 from "@angular/router";
import * as i10 from "../../../shared/service/validation.service";
import * as i11 from "@angular/common";
const _c0 = a0 => ({ "myButton btn-primary": a0 });
const _c1 = a0 => ({ "color": a0 });
function GraphComponentComponent_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function GraphComponentComponent_div_1_button_3_Template_button_click_0_listener() { const item_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.markPoint(item_r4.type)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !item_r4.status)("ngClass", i0.ɵɵpureFunction1(4, _c0, ctx_r1.markType == item_r4.type))("ngStyle", i0.ɵɵpureFunction1(6, _c1, ctx_r1.markType == item_r4.type ? "white" : ""));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.name);
} }
function GraphComponentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "button", 5);
    i0.ɵɵlistener("click", function GraphComponentComponent_div_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetBoard()); });
    i0.ɵɵtext(2, "Reset");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, GraphComponentComponent_div_1_button_3_Template, 2, 8, "button", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.graphTools);
} }
export class GraphComponentComponent {
    // closed graphing vaariables
    constructor(auth, cd, classService, contentService, config, sanitizer, formBuilder, creator, toastr, router, validationService, route) {
        this.auth = auth;
        this.cd = cd;
        this.classService = classService;
        this.contentService = contentService;
        this.config = config;
        this.sanitizer = sanitizer;
        this.formBuilder = formBuilder;
        this.creator = creator;
        this.toastr = toastr;
        this.router = router;
        this.validationService = validationService;
        this.route = route;
        this.saveAndDuplicate = '';
        this.emitItem = new EventEmitter();
        this.valueChange = new EventEmitter();
        /// graphin varibales
        this.markType = '';
        this.lineArr = [];
        this.linePointsArr = [];
        this.trianglelineArr = [];
        this.trianglelinePointsArr = [];
        this.splineArr = [];
        this.splinePointsArr = [];
        this.graphTools = [
            { name: 'point', type: 'point', status: true },
            { name: 'Line', type: 'line', status: true },
            { name: 'circle', type: 'circle', status: true },
            { name: 'spline', type: 'spline', status: true },
            { name: 'ellipse', type: 'ellipse', status: true },
            { name: 'Polygon', type: 'triangle', status: true },
            // {name: 'parabola', type: 'parabola', status: true},
            // {name: 'hyperbola', type: 'hyperbola', status: true},
            // {name: 'Polygon', type: 'polygon', status: true},
            // {name: 'Polinomial', type: 'point', status: true},
            // {name: 'Logarithm', type: 'logarithm', status: true},
            // {name: 'tangent', type: 'tangent', status: false},
            // {name: 'area', type: 'area', status: false},
            // {name: 'exponential', type: 'exponential', status: false},
            // {name: 'sine', type: 'sine', status: false},
        ];
    }
    ngOnInit() {
        console.log(this.questionType, 'type');
        // this.findPointsDuplicate();
    }
    ngOnChanges() {
        if (this.saveAndDuplicate != '') {
            this.resetBoard();
        }
    }
    ngAfterContentInit() {
        /// graphin code start
        // if (this.questionId == '40') {
        //     this.markPoint('point');
        // } else if (this.questionId == '41') {
        //     this.markPoint('line');
        // }
        // console.log(this.questionId, 'iddd');
        setTimeout(() => {
            this.showGraphing();
        }, 1500);
        /// graphing code closed
    }
    setMarkType(item) {
        console.log(item, 'item');
        this.emitItem.emit(this.markType);
    }
    ///// graphing code start here
    setBoard() {
        this.board = JXG.JSXGraph.initBoard('box', {
            boundingbox: [-30, 30, 30, -30], axis: true,
            showcopyright: false,
            showFullscreen: false,
            // pan: {enabled: true},
            showNavigation: false,
            zoom: {
                wheel: true,
                enabled: true
            },
            pan: {
                needTwoFingers: false,
                enabled: true
            }
        });
    }
    getInfo(e) {
        console.log(e, 'any');
        let canCreate = true, i, coords, el;
        if (e[JXG.touchProperty]) {
            // index of the finger that is used to extract the coordinates
            i = 0;
        }
        coords = this.getMouseCoords(e, i);
        console.log(this.board.objects, 'objectssss');
        console.log(coords, 'cooords');
        for (el in this.board.objects) {
            console.log(this.board.objects[el], 'Jname');
            if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])) {
                this.currentPointInfo = {
                    name: this.board.objects[el].name,
                    scrCoords: coords.scrCoords,
                    usrCoords: coords.usrCoords
                };
            }
        }
        // if (canCreate) {
        //   this.board.create('point', [coords.usrCoords[1], coords.usrCoords[2]]);
        // }
    }
    getMouseCoords(e, i) {
        // tslint:disable-next-line:one-variable-per-declaration
        const cPos = this.board.getCoordsTopLeftCorner(e, i), absPos = JXG.getPosition(e, i), dx = absPos[0] - cPos[0], dy = absPos[1] - cPos[1];
        return new JXG.Coords(JXG.COORDS_BY_SCREEN, [dx, dy], this.board);
    }
    resetBoard() {
        // this.board.objects = [];
        this.markType = '';
        // console.log(this.board.objects , 'obj');
        // this.board.objects = [];
        console.log(this.board, 'board');
        for (const el in this.board.objects) {
            // console.log(this.board.objects[el] , 'e');
            // console.log(this.board.objects[el].existPoint , 'e');
            console.log(this.board.objects[el].elType, 'eeeeel type');
            if (this.board.objects[el].isDraggable && this.board.objects[el].isReal && this.board.objects[el].dump && this.board.objects[el].elType != 'grid') {
                console.log(this.board.objects[el], 'eeeeel');
                this.board.removeObject(this.board.objects[el]);
            }
        }
        this.drawSplinePoints = [];
        this.splinePointsArr = [];
        this.splineArr = [];
        this.lineArr = [];
        this.linePointsArr = [];
        this.trianglelinePointsArr = [];
        this.trianglelineArr = [];
        this.drawLinePoints = [];
        this.trianglelinePointsArr = [];
        this.board.objects = [];
        this.submitValue();
    }
    markPoint(type) {
        this.markType = type;
        this.drawLinePoints = [];
        this.drawCirclePoints = [];
        this.drawEllipsePoints = [];
        this.drawParabolaPoints = [];
        this.drawHyperbolaPoints = [];
        // this.findExistingPoints();
        this.setMarkType(this.markType);
    }
    findExistingPoints() {
        let el;
        console.log(this.board, 'this.board');
        for (const el in this.board.objects) {
            this.board.objects[el].existPoint = true;
        }
    }
    down(e) {
        let canCreate = true, i, coords, el;
        if (e[JXG.touchProperty]) {
            // index of the finger that is used to extract the coordinates
            i = 0;
        }
        coords = this.getMouseCoords(e, i);
        console.log('in');
        console.log(this.board.objects, 'this.board.objects');
        for (el in this.board.objects) {
            // console.log(this.board.objects[el] ,'conditon')
            // console.log(JXG.isPoint(this.board.objects[el]) ,'JXG.isPoint(this.board.objects[el]')
            // console.log(coords.usrCoords[1], coords.usrCoords[2] , 'coords.scrCoords[1], coords.scrCoords[2]')
            // console.log(this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2]), 'coords.scrCoords[1], coords.scrCoords[2]')
            // if(coords.usrCoords[1] != 0 && coords.usrCoords[2] != 0){
            if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2]) && this.board.objects[el].name != '') {
                this.board.objects[el].existPoint = false;
                canCreate = false;
                break;
            }
            // }
            // if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])) {
            //   this.board.objects[el].existPoint = false;
            //   canCreate = false;
            //   break;
            //
            // }
        }
        console.log(canCreate, 'can');
        if (canCreate) {
            console.log('create');
            let point = this.board.create('point', [coords.usrCoords[1], coords.usrCoords[2]]);
            point.existPoint = true;
        }
    }
    zoom(type) {
        console.log(this.board, 'board');
        console.log(this.board.attr.zoomx, 'board');
        // if (type == 'in'){
        //     this.board.attr.zoomx +=30;
        //     this.board.zoomY +=30;
        // }else {
        //     this.board.zoomX -=30;
        //     this.board.zoomY -=30;
        // }
        // this.board.setAttribute({
        //     zoomx: 60,
        //     zoomy: 60
        // });
        this.board.fullUpdate();
        this.cd.detectChanges();
    }
    showGraphing() {
        console.log(this.editPatchValue, 'valeee');
        if (this.editPatchValue == false) {
            if (this.questionType == '40') {
                //   [x1, y1, x2, y2]
                // this.board = JXG.JSXGraph.initBoard('box1', {
                console.log(this.graphId, '1');
                console.log(JXG, 'jxgggg');
                // this.board = JXG.JSXGraph.initBoard(this.graphId, {
                this.board = JXG.JSXGraph.initBoard(this.graphId, {
                    boundingbox: [-10, 10, 10, -10], axis: true,
                    renderer: 'canvas',
                    showcopyright: false,
                    showFullscreen: false,
                    drag: {
                        enabled: this.editMode
                    },
                    scalable: true,
                    ignoreLabels: false,
                    showScreenshot: false,
                    maxNameLength: 3,
                    // pan: {enabled: true},
                    grid: true,
                    // zoom: {
                    //   factorX: 1.25,
                    //   factorY: 1.25,
                    //   wheel: true,
                    //   needshift: true,
                    //   eps: 0.1
                    // },
                    showNavigation: true,
                });
            }
            else {
                // this.board = JXG.JSXGraph.initBoard('box1', {originX: 50, originY: 450, unitX: 50, unitY: 50, axis: true ,
                this.board = JXG.JSXGraph.initBoard(this.graphId, { originX: 50, originY: 450, unitX: 50, unitY: 50, axis: true,
                    showcopyright: false,
                    showFullscreen: false,
                    grid: true,
                    drag: {
                        enabled: this.editMode
                    },
                    scalable: true,
                    ignoreLabels: false,
                    showScreenshot: false,
                    maxNameLength: 3,
                    // zoom: {
                    //   factorX: 1.25,
                    //   factorY: 1.25,
                    //   wheel: true,
                    //   needshift: true,
                    //   eps: 0.1
                    // },
                    showNavigation: true,
                    needsRegularUpdate: true,
                    enhancedRendering: true,
                    // zoomX: 30,
                    // zoomY: 40
                });
            }
            this.initiateDrawGraph();
        }
        else {
            // console.log(this.editPatchValue , 'this.editPatchValue');
            // console.log(this.editPatchValue.objects , 'this.editPatchValu attee')
            // this.board = JXG.JSXGraph.initBoard('box2', this.editPatchValue.attr);
            // this.editPatchValue.attr.unitX = this.editPatchValue.unitX;
            // this.editPatchValue.attr.unitY = this.editPatchValue.unitY;
            // this.editPatchValue.attr.zoomx = this.editPatchValue.zoomX;
            // this.editPatchValue.attr.zoomy = this.editPatchValue.zoomY;
            // this.editPatchValue.attr.zoom.factorx = this.editPatchValue.zoomY;
            // this.editPatchValue.attr.zoom.factory = this.editPatchValue.zoomY;
            if (this.questionType == '40') {
                //   [x1, y1, x2, y2]
                // this.board = JXG.JSXGraph.initBoard('box1', {
                this.board = JXG.JSXGraph.initBoard(this.graphId, {
                    boundingbox: [-10, 10, 10, -10], axis: true,
                    showcopyright: false,
                    showFullscreen: false,
                    // pan: {enabled: true},
                    grid: true,
                    drag: {
                        enabled: this.editMode
                    },
                    scalable: true,
                    ignoreLabels: false,
                    showScreenshot: false,
                    maxNameLength: 3,
                    zoom: {
                        factorX: this.editPatchValue.attr.zoom.factorx,
                        factorY: this.editPatchValue.attr.zoom.factory,
                        wheel: true,
                        needshift: true,
                        eps: 0.1
                    },
                    showNavigation: true,
                });
            }
            else {
                this.board = JXG.JSXGraph.initBoard(this.graphId, { originX: 50, originY: 450, unitX: 50, unitY: 50, axis: true,
                    showcopyright: false,
                    showFullscreen: false,
                    drag: {
                        enabled: this.editMode
                    },
                    scalable: true,
                    ignoreLabels: false,
                    showScreenshot: false,
                    maxNameLength: 3,
                    grid: true,
                    // zoom: {
                    //   factorX: 1.25,
                    //   factorY: 1.25,
                    //   wheel: true,
                    //   needshift: true,
                    //   eps: 0.1
                    // },
                    showNavigation: true,
                    needsRegularUpdate: true,
                    enhancedRendering: true,
                    // zoomX: 30,
                    // zoomY: 40
                });
            }
            // this.board = JXG.JSXGraph.initBoard(this.graphId, this.editPatchValue.attr);
            // this.board = JXG.JSXGraph.initBoard('box2', {originX: 50, originY: 450, unitX: 50, unitY: 50, axis: true ,
            // this.board = JXG.JSXGraph.initBoard(this.graphId,
            //     {originX: 50, originY: 450, unitX: 50, unitY: 50, axis: true ,
            //   showcopyright: false,
            //   showFullscreen: false,
            //   grid: true,
            //   // zoom: {
            //   //   factorX: 1.25,
            //   //   factorY: 1.25,
            //   //   wheel: true,
            //   //   needshift: true,
            //   //   eps: 0.1
            //   // },
            //   showNavigation: true,
            //   needsRegularUpdate: true,
            //   enhancedRendering: true,
            //   // zoomX: 30,
            //   // zoomY: 40
            // });
            // this.board.unitX = this.editPatchValue.unitX;
            // this.board.unitY = this.editPatchValue.unitY;
            // this.board.zoomX = this.editPatchValue.zoomX;
            // this.board.zoomY = this.editPatchValue.zoomY;
            // this.board.cPos = this.editPatchValue.cPos;
            // this.board = this.editPatchValue;
            // this.board = JXG.Board(this.editPatchValue.container,
            //     this.editPatchValue.renderer, this.editPatchValue.id,
            //     this.editPatchValue.origin, this.editPatchValue.zoomX, this.editPatchValue.zoomY,
            //     this.editPatchValue.unitX,
            //     this.editPatchValue.unitY,
            //     this.editPatchValue.canvasWidth,
            //     this.editPatchValue.canvasHeight,
            //     this.editPatchValue.attr);
            // JXG.JSXGraph.initRenderer('box2', this.editPatchValue.dimension, this.editPatchValue.document, this.editPatchValue.renderer)
            // this.board = JXG.JSXGraph.Board(this.editPatchValue);
            console.log(this.board, 'board');
            // this.board.unitX = 1.7111149707264;
            // this.board.unitY = 1.7111149707264;
            // this.board.zoomX = 0.06871947673600001;
            // this.board.zoomY = 0.06871947673600001;
            // this.boardPreviewObj = this.editPatchValue.objects;
            // this.board.objects = this.editPatchValue.objects;
            // this.board.objects.renderer = this.editPatchValue.renderer;
            // this.board.objects.objectsList = this.editPatchValue.objectsList;
            // console.log(this.board , 'board');
            // console.log(this.board.objects , 'board length');
            // this.board.objects = this.findPointsDuplicate(this.editPatchValue.objects);
            this.drawLinePoints = [];
            this.drawCirclePoints = [];
            this.drawEllipsePoints = [];
            this.drawParabolaPoints = [];
            this.drawHyperbolaPoints = [];
            this.findPointsDuplicate(this.editPatchValue.objects);
            //
            // this.initiatePatchGraph();
        }
        // tslint:disable-next-line:prefer-const one-variable-per-declaration only-arrow-functions
    }
    initiateDrawGraph() {
        for (const el in this.board.objects) {
            this.board.objects[el].lined = false;
            this.board.objects[el].triangle = false;
            this.board.objects[el].circleDrawn = false;
            this.board.objects[el].ellipseDrawn = false;
            this.board.objects[el].parabolaDrawn = false;
            this.board.objects[el].hyperbolaDrawn = false;
            this.board.objects[el].polygonDrawn = false;
            this.board.objects[el].logarithmDrawn = false;
            this.board.objects[el].splineDrawn = false;
            this.board.objects[el].existPoint = false;
            // if (this.editPatchValue && this.editMode){
            //   this.board.objects[el].existPoint = true;
            // }else{
            //   this.board.objects[el].existPoint = false;
            // }
        }
        const down = (e) => {
            console.log(e, 'event');
            // console.log(e.srcElement.className);
            if (e.srcElement.className != 'JXG_navigation_button') {
                if (this.markType === 'point') {
                    this.down(e);
                    this.submitValue();
                }
                else if (this.markType === 'line') {
                    console.log('sss');
                    this.drawLine(e);
                    this.submitValue();
                }
                else if (this.markType === 'circle') {
                    this.drawCircle(e);
                    this.submitValue();
                }
                else if (this.markType === 'ellipse') {
                    this.drawEllipse(e);
                    this.submitValue();
                }
                else if (this.markType === 'parabola') {
                    this.drawParabola(e);
                    this.submitValue();
                }
                else if (this.markType === 'hyperbola') {
                    this.drawHyperbola(e);
                    this.submitValue();
                }
                else if (this.markType === 'polygon') {
                    this.drawPolygon(e);
                    this.submitValue();
                }
                else if (this.markType === 'logarithm') {
                    this.drawlogarithm(e);
                    this.submitValue();
                }
                else if (this.markType === 'spline') {
                    this.drawsplineDrawn(e);
                    this.submitValue();
                }
                else if (this.markType === 'info') {
                    this.getInfo(e);
                    this.submitValue();
                }
                else if (this.markType === 'triangle') {
                    this.drawTriangleLine(e);
                    this.submitValue();
                }
            }
        };
        this.board.on('down', down);
    }
    removeDuplicates(originalArray, prop) {
        const newArray = [];
        const lookupObject = {};
        for (const i in originalArray) {
            lookupObject[originalArray[i][prop]] = originalArray[i];
        }
        for (const i in lookupObject) {
            newArray.push(lookupObject[i]);
        }
        return newArray;
    }
    async findPointsDuplicate(arrayWithDuplicates) {
        // var arrayWithDuplicates = [
        //   {"type":"1", "licenseNum": "12345", lastDragTime: 'Tue May 25 2021 12:45:07 GMT+0530 (India Standard Time)'},
        //   {"type":"2", "licenseNum": "A7846",  lastDragTime: 'Tue May 25 2021 12:45:07 GMT+0530 (India Standard Time)'},
        //   {"type":"3", "licenseNum": "12345", lastDragTime: 'Tue May 25 2021 12:42:07 GMT+0530 (India Standard Time)'},
        // ];
        // let userval = new Date(Number(Date.parse(arrayWithDuplicates[0].lastDragTime)));
        // let userval1 = new Date(Number(Date.parse(arrayWithDuplicates[2].lastDragTime)));
        // console.log(userval > userval1 ,'validate')
        // let uniqueArray = this.removeDuplicates(arrayWithDuplicates, "licenseNum");
        //  const a = this.removeDuplicates(arrayWithDuplicates, 'name');
        //  console.log('uniqueArray is: ' + JSON.stringify(a));
        this.board.objects = this.removeDuplicates(arrayWithDuplicates, 'name');
        this.initiatePatchGraph();
        // return a;
    }
    initiatePatchGraph() {
        // console.log(this.board.objects , 'boardPreviewObj')
        for (const el in this.board.objects) {
            // console.log(this.board.objects[el].elType , 'typeee');
            if (this.board.objects[el].elType === 'point') {
                // console.log(this.board.objects[el] , 'typeee enterrrr');
                // console.log(coords , 'coords');
                if (this.board.objects[el].name != '') {
                    const coords = this.board.objects[el].coords;
                    // console.log(this.board.objects[el] , 'typeee point');
                    // console.log(this.board.objects[el].lastDragTime , 'this.board.objects[el].lastDragTime');
                    this.board.create('point', [coords.usrCoords[1], coords.usrCoords[2]], { name: this.board.objects[el].name });
                }
            }
            else if (this.board.objects[el].elType === 'line') {
                // this.drawLine(e);
                // console.log(this.board.objects[el] , 'typeee enterrrr');
                // this.board.create('line', [this.board.objects[el].parents[0], this.board.objects[el].parents[1]], {
                //   straightFirst: false,
                //   straightLast: false,
                //   strokeWidth: 2
                // });
                this.board.create('line', [this.board.objects[el].inherits[0].name, this.board.objects[el].inherits[1].name], {
                    straightFirst: false,
                    straightLast: false,
                    strokeWidth: 2
                });
            }
            else if (this.board.objects[el].elType === 'circle') {
                // this.drawCircle(e);
                this.board.create('circle', [this.board.objects[el].inherits[0].name, this.board.objects[el].inherits[1].name], {
                    straightFirst: false,
                    straightLast: false,
                    strokeWidth: 2
                });
            }
            else if (this.board.objects[el].elType === 'curve') {
                // this.drawEllipse(e);
                // console.log(this.board.objects[el] , 'typeee enterrrr curve');
                if (this.board.objects[el].parents.length == 3) {
                    this.board.create('ellipse', [this.board.objects[el].inherits[1].name, this.board.objects[el].inherits[2].name, this.board.objects[el].inherits[3].name], {
                        straightFirst: false,
                        straightLast: false,
                        strokeWidth: 2
                    });
                }
                else {
                    const par = this.board.create('parabola', [
                        this.board.objects[el].quadraticform[0],
                        [this.board.objects[el].quadraticform[1], this.board.objects[el].quadraticform[2]]
                    ]);
                }
            }
            else if (this.board.objects[el].elType === 'spline') {
                console.log(this.board.objects[el], 'spline');
                let splineName = [];
                this.board.objects[el].splinePoints.forEach((item) => {
                    splineName.push(item);
                });
                let spline = this.board.create('spline', splineName, { strokeWidth: 2 });
                // let spline = this.board.create('spline', [this.board.objects[el].splinePoints[0], this.board.objects[el].splinePoints[1],
                //       this.board.objects[el].splinePoints[2] , this.board.objects[el].splinePoints[3]],
                //     {strokeWidth: 2});
                // spline.splinePoints =  [this.board.objects[el].splinePoints[0], this.board.objects[el].splinePoints[1],
                //   this.board.objects[el].splinePoints[2] , this.board.objects[el].splinePoints[3]];
                spline.splinePoints = splineName;
            }
            else if (this.board.objects[el].elType === 'axis') {
                // this.board.create('polygon', [this.drawPolygonPoints[0].name, this.drawPolygonPoints[1].name , this.drawPolygonPoints[2].name , this.drawPolygonPoints[3].name], {
                //   straightFirst: false,
                //   straightLast: false,
                //   strokeWidth: 2
                // });
                // this.drawParabola(e);
            }
        }
        if (this.editMode == true) {
            this.initiateDrawGraph();
        }
    }
    /// circle drawing code started
    drawCircle(e) {
        console.log(e, 'any');
        let canCreate = true, i, coords, el;
        if (e[JXG.touchProperty]) {
            i = 0;
        }
        coords = this.getMouseCoords(e, i);
        console.log(this.board.objects, 'objectssss');
        this.drawCirclePoints = [];
        for (el in this.board.objects) {
            if (coords.usrCoords[1] != 0 && coords.usrCoords[2] != 0) {
                if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])
                    && this.board.objects[el].circleDrawn == false) {
                    canCreate = false;
                    this.board.objects[el].existPoint = false;
                    this.getLengthOfSelectedCircle(el);
                    break;
                }
            }
            if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])) {
                this.board.objects[el].existPoint = false;
                canCreate = false;
                break;
            }
            // this.getLengthOfSelectedPoints(el);
        }
        if (canCreate) {
            if (this.drawCirclePoints.length < 2) {
                // this.makeLine();
                let point = this.board.create('point', [coords.usrCoords[1], coords.usrCoords[2]]);
                point.isCircle = true;
                this.getLengthOfSelectedCircle(el);
            }
            console.log(this.drawCirclePoints.length, 'length');
            if (this.drawCirclePoints.length == 2) {
                this.makeCircle();
            }
        }
    }
    makeCircle() {
        if (this.drawCirclePoints.length == 2) {
            const orgins = this.drawCirclePoints[0].coords.usrCoords;
            const orgins2 = this.drawCirclePoints[1].coords.usrCoords;
            for (const el in this.board.objects) {
                if (this.drawCirclePoints[0].name === this.board.objects[el].name) {
                    this.board.objects[el].circleDrawn = true;
                }
                if (this.drawCirclePoints[1].name === this.board.objects[el].name) {
                    this.board.objects[el].circleDrawn = true;
                }
            }
            // this.board.create('line' , [[orgins[1], orgins[2]], [orgins2[1], orgins2[2]]], {straightFirst:false, straightLast:false, strokeWidth:2});
            this.board.create('circle', [this.drawCirclePoints[0].name, this.drawCirclePoints[1].name], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2
            });
            this.drawCirclePoints = [];
        }
    }
    getLengthOfSelectedCircle(el) {
        this.drawCirclePoints = [];
        for (el in this.board.objects) {
            console.log(this.board.objects[el].circleDrawn, 'circleDrawn');
            if (this.board.objects[el].elType == 'point' && !this.board.objects[el].existPoint &&
                this.board.objects[el].isReal && this.board.objects[el].isDraggable
                && !this.board.objects[el].circleDrawn && this.board.objects[el].isCircle) {
                this.drawCirclePoints.push(this.board.objects[el]);
            }
        }
    }
    /// circle drawing closed
    /// ellipse drawing code started
    drawEllipse(e) {
        console.log(e, 'any');
        let canCreate = true, i, coords, el;
        if (e[JXG.touchProperty]) {
            i = 0;
        }
        coords = this.getMouseCoords(e, i);
        console.log(this.board.objects, 'objectssss');
        this.drawEllipsePoints = [];
        for (el in this.board.objects) {
            if (coords.usrCoords[1] != 0 && coords.usrCoords[2] != 0) {
                if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])
                    && this.board.objects[el].ellipseDrawn == false) {
                    this.board.objects[el].existPoint = false;
                    canCreate = false;
                    this.getLengthOfSelectedEllipse(el);
                    break;
                }
            }
            if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])) {
                this.board.objects[el].existPoint = false;
                canCreate = false;
                break;
            }
            // this.getLengthOfSelectedPoints(el);
        }
        if (canCreate) {
            if (this.drawEllipsePoints.length < 3) {
                // this.makeLine();
                let point = this.board.create('point', [coords.usrCoords[1], coords.usrCoords[2]]);
                point.isEllipse = true;
                this.getLengthOfSelectedEllipse(el);
            }
            console.log(this.drawEllipsePoints.length, 'length');
            if (this.drawEllipsePoints.length == 3) {
                this.makeEllipse();
            }
        }
    }
    makeEllipse() {
        if (this.drawEllipsePoints.length == 3) {
            const orgins = this.drawEllipsePoints[0].coords.usrCoords;
            const orgins2 = this.drawEllipsePoints[1].coords.usrCoords;
            const orgins3 = this.drawEllipsePoints[2].coords.usrCoords;
            for (const el in this.board.objects) {
                if (this.drawEllipsePoints[0].name === this.board.objects[el].name) {
                    this.board.objects[el].ellipseDrawn = true;
                }
                if (this.drawEllipsePoints[1].name === this.board.objects[el].name) {
                    this.board.objects[el].ellipseDrawn = true;
                }
                if (this.drawEllipsePoints[2].name === this.board.objects[el].name) {
                    this.board.objects[el].ellipseDrawn = true;
                }
            }
            // this.board.create('line' , [[orgins[1], orgins[2]], [orgins2[1], orgins2[2]]], {straightFirst:false, straightLast:false, strokeWidth:2});
            this.board.create('ellipse', [this.drawEllipsePoints[0].name, this.drawEllipsePoints[1].name, this.drawEllipsePoints[2].name], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2
            });
            this.drawEllipsePoints = [];
        }
    }
    getLengthOfSelectedEllipse(el) {
        this.drawEllipsePoints = [];
        for (el in this.board.objects) {
            console.log(this.board.objects[el].ellipseDrawn, 'ellipseDrawn');
            if (this.board.objects[el].elType == 'point' && !this.board.objects[el].existPoint &&
                this.board.objects[el].isReal && this.board.objects[el].isDraggable && this.board.objects[el].isEllipse
                && !this.board.objects[el].ellipseDrawn) {
                this.drawEllipsePoints.push(this.board.objects[el]);
            }
        }
    }
    /// ellipse drawing closed
    // /parabola drawing code started
    drawParabola(e) {
        console.log(e, 'any');
        let canCreate = true, i, coords, el;
        if (e[JXG.touchProperty]) {
            i = 0;
        }
        coords = this.getMouseCoords(e, i);
        console.log(this.board.objects, 'objectssss');
        this.drawParabolaPoints = [];
        for (el in this.board.objects) {
            if (coords.usrCoords[1] != 0 && coords.usrCoords[2] != 0) {
                if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])
                    && this.board.objects[el].parabolaDrawn == false) {
                    this.board.objects[el].existPoint = false;
                    canCreate = false;
                    this.getLengthOfSelectedParabola(el);
                    break;
                }
            }
            if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])) {
                this.board.objects[el].existPoint = false;
                canCreate = false;
                break;
            }
            // this.getLengthOfSelectedPoints(el);
        }
        if (canCreate) {
            if (this.drawParabolaPoints.length < 3) {
                // this.makeLine();
                this.board.create('point', [coords.usrCoords[1], coords.usrCoords[2]]);
                this.getLengthOfSelectedParabola(el);
            }
            console.log(this.drawParabolaPoints.length, 'length');
            if (this.drawParabolaPoints.length == 3) {
                this.makeParabola();
            }
        }
    }
    makeParabola() {
        if (this.drawParabolaPoints.length == 3) {
            const orgins = this.drawParabolaPoints[0].coords.usrCoords;
            const orgins2 = this.drawParabolaPoints[1].coords.usrCoords;
            const orgins3 = this.drawParabolaPoints[2].coords.usrCoords;
            for (const el in this.board.objects) {
                if (this.drawParabolaPoints[0].name === this.board.objects[el].name) {
                    this.board.objects[el].parabolaDrawn = true;
                }
                if (this.drawParabolaPoints[1].name === this.board.objects[el].name) {
                    this.board.objects[el].parabolaDrawn = true;
                }
                if (this.drawParabolaPoints[2].name === this.board.objects[el].name) {
                    this.board.objects[el].parabolaDrawn = true;
                }
            }
            // this.board.create('line' , [[orgins[1], orgins[2]], [orgins2[1], orgins2[2]]], {straightFirst:false, straightLast:false, strokeWidth:2});
            const l = this.board.create('line', [this.drawParabolaPoints[0].name, this.drawParabolaPoints[1].name], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2
            });
            // let C = this.board.create('point', [orgins3[1], orgins3[2]]);
            const el = this.board.create('parabola', [this.drawParabolaPoints[2].name, l]);
            this.drawParabolaPoints = [];
        }
    }
    getLengthOfSelectedParabola(el) {
        this.drawParabolaPoints = [];
        for (el in this.board.objects) {
            console.log(this.board.objects[el].parabolaDrawn, 'ellipseDrawn');
            if (this.board.objects[el].elType == 'point' && !this.board.objects[el].existPoint &&
                this.board.objects[el].isReal && this.board.objects[el].isDraggable
                && !this.board.objects[el].parabolaDrawn) {
                this.drawParabolaPoints.push(this.board.objects[el]);
            }
        }
    }
    /// parabolaa drawing closed
    // /parabola drawing code started
    drawHyperbola(e) {
        console.log(e, 'any');
        let canCreate = true, i, coords, el;
        if (e[JXG.touchProperty]) {
            i = 0;
        }
        coords = this.getMouseCoords(e, i);
        console.log(this.board.objects, 'objectssss');
        this.drawHyperbolaPoints = [];
        for (el in this.board.objects) {
            if (coords.usrCoords[1] != 0 && coords.usrCoords[2] != 0) {
                if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])
                    && this.board.objects[el].hyperbolaDrawn == false) {
                    this.board.objects[el].existPoint = false;
                    canCreate = false;
                    this.getLengthOfSelectedHyperbola(el);
                    break;
                }
            }
            if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])) {
                this.board.objects[el].existPoint = false;
                canCreate = false;
                break;
            }
            // this.getLengthOfSelectedPoints(el);
        }
        if (canCreate) {
            if (this.drawHyperbolaPoints.length < 3) {
                // this.makeLine();
                this.board.create('point', [coords.usrCoords[1], coords.usrCoords[2]]);
                this.getLengthOfSelectedHyperbola(el);
            }
            console.log(this.drawHyperbolaPoints.length, 'length');
            if (this.drawHyperbolaPoints.length == 3) {
                this.makeHyperbola();
            }
        }
    }
    makeHyperbola() {
        if (this.drawHyperbolaPoints.length == 3) {
            const orgins = this.drawHyperbolaPoints[0].coords.usrCoords;
            const orgins2 = this.drawHyperbolaPoints[1].coords.usrCoords;
            const orgins3 = this.drawHyperbolaPoints[2].coords.usrCoords;
            for (const el in this.board.objects) {
                if (this.drawHyperbolaPoints[0].name === this.board.objects[el].name) {
                    this.board.objects[el].hyperbolaDrawn = true;
                }
                if (this.drawHyperbolaPoints[1].name === this.board.objects[el].name) {
                    this.board.objects[el].hyperbolaDrawn = true;
                }
                if (this.drawHyperbolaPoints[2].name === this.board.objects[el].name) {
                    this.board.objects[el].hyperbolaDrawn = true;
                }
            }
            // this.board.create('line' , [[orgins[1], orgins[2]], [orgins2[1], orgins2[2]]], {straightFirst:false, straightLast:false, strokeWidth:2});
            const l = this.board.create('hyperbola', [this.drawHyperbolaPoints[0].name, this.drawHyperbolaPoints[1].name, this.drawHyperbolaPoints[2].name], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2
            });
            // let C = this.board.create('point', [orgins3[1], orgins3[2]]);
            // let el = this.board.create('parabola', [this.drawHyperbolaPoints[2].name, l]);
            this.drawHyperbolaPoints = [];
        }
    }
    getLengthOfSelectedHyperbola(el) {
        this.drawHyperbolaPoints = [];
        for (el in this.board.objects) {
            console.log(this.board.objects[el].hyperbolaDrawn, 'ellipseDrawn');
            if (this.board.objects[el].elType == 'point' && !this.board.objects[el].existPoint &&
                this.board.objects[el].isReal && this.board.objects[el].isDraggable
                && !this.board.objects[el].hyperbolaDrawn) {
                this.drawHyperbolaPoints.push(this.board.objects[el]);
            }
        }
    }
    /// parabolaa drawing closed
    // /polygon drawing code started
    drawPolygon(e) {
        console.log(e, 'any');
        let canCreate = true, i, coords, el;
        if (e[JXG.touchProperty]) {
            i = 0;
        }
        coords = this.getMouseCoords(e, i);
        console.log(this.board.objects, 'objectssss');
        this.drawPolygonPoints = [];
        for (el in this.board.objects) {
            if (coords.usrCoords[1] != 0 && coords.usrCoords[2] != 0) {
                if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])
                    && this.board.objects[el].polygonDrawn == false) {
                    this.board.objects[el].existPoint = false;
                    canCreate = false;
                    this.getLengthOfSelectedPolygon(el);
                    break;
                }
            }
            if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])) {
                this.board.objects[el].existPoint = false;
                canCreate = false;
                break;
            }
            // this.getLengthOfSelectedPoints(el);
        }
        if (canCreate) {
            if (this.drawPolygonPoints.length < 4) {
                // this.makeLine();
                this.board.create('point', [coords.usrCoords[1], coords.usrCoords[2]]);
                this.getLengthOfSelectedPolygon(el);
            }
            console.log(this.drawPolygonPoints.length, 'length');
            if (this.drawPolygonPoints.length == 4) {
                this.makePolygon();
            }
        }
    }
    makePolygon() {
        if (this.drawPolygonPoints.length == 4) {
            const orgins = this.drawPolygonPoints[0].coords.usrCoords;
            const orgins2 = this.drawPolygonPoints[1].coords.usrCoords;
            const orgins3 = this.drawPolygonPoints[2].coords.usrCoords;
            for (const el in this.board.objects) {
                if (this.drawPolygonPoints[0].name === this.board.objects[el].name) {
                    this.board.objects[el].polygonDrawn = true;
                }
                if (this.drawPolygonPoints[1].name === this.board.objects[el].name) {
                    this.board.objects[el].polygonDrawn = true;
                }
                if (this.drawPolygonPoints[2].name === this.board.objects[el].name) {
                    this.board.objects[el].polygonDrawn = true;
                }
                if (this.drawPolygonPoints[3].name === this.board.objects[el].name) {
                    this.board.objects[el].polygonDrawn = true;
                }
            }
            // this.board.create('line' , [[orgins[1], orgins[2]], [orgins2[1], orgins2[2]]], {straightFirst:false, straightLast:false, strokeWidth:2});
            const l = this.board.create('polygon', [this.drawPolygonPoints[0].name, this.drawPolygonPoints[1].name, this.drawPolygonPoints[2].name, this.drawPolygonPoints[3].name], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2
            });
            // let C = this.board.create('point', [orgins3[1], orgins3[2]]);
            // let el = this.board.create('parabola', [this.drawHyperbolaPoints[2].name, l]);
            this.drawPolygonPoints = [];
        }
    }
    getLengthOfSelectedPolygon(el) {
        this.drawPolygonPoints = [];
        for (el in this.board.objects) {
            console.log(this.board.objects[el].polygonDrawn, 'polygonDrawn');
            if (this.board.objects[el].elType == 'point' && !this.board.objects[el].existPoint &&
                this.board.objects[el].isReal && this.board.objects[el].isDraggable
                && !this.board.objects[el].polygonDrawn) {
                this.drawPolygonPoints.push(this.board.objects[el]);
            }
        }
    }
    /// polygon drawing closed
    // line drawing code  start
    drawLine(e) {
        console.log(e, 'any');
        let canCreate = true, i, coords, el;
        if (e[JXG.touchProperty]) {
            i = 0;
        }
        coords = this.getMouseCoords(e, i);
        console.log(this.board.objects, 'objectssss');
        this.drawLinePoints = [];
        for (el in this.board.objects) {
            if (coords.usrCoords[1] != 0 && coords.usrCoords[2] != 0) {
                if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])
                    && this.board.objects[el].lined == false) {
                    canCreate = false;
                    this.board.objects[el].existPoint = false;
                    this.getLengthOfSelectedPoints(el);
                    break;
                }
            }
            if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])) {
                this.board.objects[el].existPoint = false;
                canCreate = false;
                this.getLengthOfSelectedPoints(el);
                break;
            }
        }
        if (canCreate) {
            // if (this.drawLinePoints.length < 2) {
            // this.makeLine();
            let point = this.board.create('point', [coords.usrCoords[1], coords.usrCoords[2]]);
            point.isLine = true;
            this.getLengthOfSelectedPoints(el);
            // }
            console.log(this.drawLinePoints.length, 'length line');
            // if (this.drawLinePoints.length == 2) {
            if (this.drawLinePoints.length >= 1) {
                this.makeLine();
            }
        }
    }
    getLengthOfSelectedPoints(el) {
        // this.drawLinePoints = [];
        for (el in this.board.objects) {
            console.log(typeof this.board.objects[el].lined, 'lined');
            if (this.board.objects[el].elType == 'point' && !this.board.objects[el].existPoint &&
                this.board.objects[el].isReal && this.board.objects[el].isDraggable
                && !this.board.objects[el].lined && this.board.objects[el].isLine) {
                console.log(this.board.objects[el].existPoint, 'this.board.objects[el].edit');
                this.drawLinePoints.push(this.board.objects[el]);
            }
        }
    }
    makeLine() {
        // if (this.drawLinePoints.length == 2) {
        if (this.drawLinePoints.length >= 1) {
            for (const el in this.board.objects) {
                this.drawLinePoints.forEach((item) => {
                    if (item.name == this.board.objects[el].name) {
                        this.board.objects[el].lined = true;
                    }
                });
                // if (this.drawLinePoints[0].name === this.board.objects[el].name) {
                //   this.board.objects[el].lined = true;
                // }
                // if (this.drawLinePoints[1].name === this.board.objects[el].name) {
                //   this.board.objects[el].lined = true;
                // }
            }
            let orgnalData = this.drawLinePoints;
            orgnalData.forEach((item) => {
                this.lineArr.push(item);
            });
            // this.lineArr.forEach((item, index) => {
            // })
            // this.board.create('line' , [[orgins[1], orgins[2]], [orgins2[1], orgins2[2]]], {straightFirst:false, straightLast:false, strokeWidth:2});
            // this.board.create('line', [this.drawLinePoints[0].name, this.drawLinePoints[1].name], {
            if (this.lineArr.length >= 2) {
                this.linePointsArr = [];
                this.lineArr.forEach((item2) => {
                    console.log(item2, 'item');
                    console.log(item2.name, 'item name');
                    this.linePointsArr.push(item2.name);
                });
                console.log(this.lineArr, 'lineArr');
                console.log(this.drawLinePoints, 'drawLinePoints');
                console.log(this.linePointsArr, 'linePointsArr');
                if (this.linePointsArr.length == 3) {
                    this.linePointsArr.shift();
                    this.lineArr.shift();
                }
                this.board.create('line', this.linePointsArr, {
                    straightFirst: false,
                    straightLast: false,
                    strokeWidth: 2
                });
            }
            // this.drawLinePoints = [];
        }
    }
    drawTriangleLine(e) {
        console.log(e, 'any');
        let canCreate = true, i, coords, el;
        if (e[JXG.touchProperty]) {
            i = 0;
        }
        coords = this.getMouseCoords(e, i);
        this.drawTriangle = [];
        for (el in this.board.objects) {
            if (coords.usrCoords[1] != 0 && coords.usrCoords[2] != 0) {
                if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])
                    // tslint:disable-next-line:triple-equals
                    && this.board.objects[el].triangle == false) {
                    canCreate = false;
                    this.board.objects[el].existPoint = false;
                    this.getLengthOfSelectedTriangle(el);
                    break;
                }
            }
            if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])) {
                this.board.objects[el].existPoint = false;
                this.getLengthOfSelectedTriangle(el);
                this.makeTriangleLine1(this.board.objects[el], coords);
                canCreate = false;
                break;
            }
        }
        if (canCreate) {
            let point = this.board.create('point', [coords.usrCoords[1], coords.usrCoords[2]]);
            point.isTriangle = true;
            this.getLengthOfSelectedTriangle(el);
            if (this.drawTriangle.length >= 1) {
                this.makeTriangleLine();
            }
        }
    }
    makeTriangleLine() {
        if (this.drawTriangle.length >= 1) {
            for (const el in this.board.objects) {
                this.drawTriangle.forEach((item) => {
                    if (item.name == this.board.objects[el].name) {
                        this.board.objects[el].triangle = true;
                    }
                });
            }
            let orgnalData = this.drawTriangle;
            orgnalData.forEach((item) => {
                this.trianglelineArr.push(item);
            });
            if (this.trianglelineArr.length >= 2) {
                this.trianglelinePointsArr = [];
                this.trianglelineArr.forEach((item2) => {
                    this.trianglelinePointsArr.push(item2.name);
                });
                if (this.trianglelinePointsArr.length == 3) {
                    this.trianglelinePointsArr.shift();
                    this.trianglelineArr.shift();
                }
                console.log(this.trianglelinePointsArr, 'trianglelinePointsArr');
                this.board.create('line', this.trianglelinePointsArr, {
                    straightFirst: false,
                    straightLast: false,
                    strokeWidth: 2
                });
            }
        }
    }
    makeTriangleLine1(point, coords) {
        console.log(point, 'point');
        // if (this.drawTriangle.length >= 1) {
        for (const el in this.board.objects) {
            this.drawTriangle.forEach((item) => {
                if (item.name == this.board.objects[el].name) {
                    this.board.objects[el].triangle = true;
                }
            });
        }
        let orgnalData = this.drawTriangle;
        orgnalData.forEach((item) => {
            this.trianglelineArr.push(item);
        });
        this.trianglelineArr.shift();
        this.trianglelineArr.push(point);
        console.log(this.trianglelineArr, 'trianglelineArr');
        console.log(this.trianglelinePointsArr, 'trianglelineArr');
        if (this.trianglelineArr.length >= 2) {
            this.trianglelinePointsArr = [];
            this.trianglelineArr.forEach((item2) => {
                this.trianglelinePointsArr.push(item2.name);
            });
            if (this.trianglelinePointsArr.length == 3) {
                this.trianglelinePointsArr.shift();
                this.trianglelineArr.shift();
            }
            this.board.create('line', this.trianglelinePointsArr, {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2
            });
        }
        // }
    }
    getLengthOfSelectedTriangle(el) {
        for (el in this.board.objects) {
            if (this.board.objects[el].elType == 'point' && !this.board.objects[el].existPoint &&
                this.board.objects[el].isReal && this.board.objects[el].isDraggable
                && !this.board.objects[el].triangle && this.board.objects[el].isTriangle) {
                this.drawTriangle.push(this.board.objects[el]);
            }
        }
    }
    // line drawing code  ended
    ////
    drawsplineDrawn(e) {
        console.log(e, 'any');
        let canCreate = true, i, coords, el;
        if (e[JXG.touchProperty]) {
            i = 0;
        }
        coords = this.getMouseCoords(e, i);
        this.drawSplinePoints = [];
        for (el in this.board.objects) {
            // if(coords.usrCoords[1] != 0 && coords.usrCoords[2] != 0) {
            // && this.board.objects[el].name != ''
            if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])
                && this.board.objects[el].splineDrawn == false) {
                this.board.objects[el].existPoint = false;
                this.getLengthOfSelectedspline(el);
                canCreate = false;
                break;
            }
            // }
            if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])) {
                this.board.objects[el].existPoint = false;
                canCreate = false;
                break;
            }
        }
        if (canCreate) {
            // if (this.drawSplinePoints.length < 4) {
            // this.makeLine();
            let point = this.board.create('point', [coords.usrCoords[1], coords.usrCoords[2]]);
            point.isSpline = true;
            this.getLengthOfSelectedspline(el);
            // }
            console.log(this.drawSplinePoints.length, 'drawSplinePoints length');
            // if (this.drawSplinePoints.length == 4) {
            if (this.drawSplinePoints.length >= 1) {
                this.makeSpline();
            }
        }
    }
    getLengthOfSelectedspline(el) {
        // this.drawSplinePoints = [];
        for (el in this.board.objects) {
            console.log(this.board.objects[el].splineDrawn, 'splineDrawn');
            if (this.board.objects[el].elType == 'point' && !this.board.objects[el].existPoint &&
                this.board.objects[el].isReal && this.board.objects[el].isDraggable && this.board.objects[el].isSpline
                && !this.board.objects[el].splineDrawn) {
                // this.board.objects[el].splineDrawn = true;
                this.drawSplinePoints.push(this.board.objects[el]);
            }
        }
    }
    makeSpline() {
        // if (this.drawSplinePoints.length == 4) {
        if (this.drawSplinePoints.length >= 1) {
            for (const el in this.board.objects) {
                this.drawSplinePoints.forEach((item) => {
                    if (item.name == this.board.objects[el].name) {
                        this.board.objects[el].splineDrawn = true;
                    }
                });
            }
            console.log(this.drawSplinePoints, 'pints');
            let orgnalData = this.drawSplinePoints;
            orgnalData.forEach((item, index) => {
                this.splineArr.push(item);
            });
            this.splinePointsArr = [];
            let count = 0;
            for (const el in this.board.objects) {
                if (this.board.objects[el].elType == 'spline' && this.board.objects[el].isDraggable && this.board.objects[el].isReal && this.board.objects[el].dump) {
                    count += 1;
                    if (count > 1) {
                        console.log('remove');
                        this.board.removeObject(this.board.objects[el]);
                    }
                }
            }
            console.log(this.splineArr, 'splineArr');
            let spline = this.board.create('spline', this.splineArr, { strokeWidth: 2 });
            this.splineArr.forEach((item, index) => {
                this.splinePointsArr.push(item.name);
            });
            console.log(this.splinePointsArr, 'splinePointsArr name');
            spline.splinePoints = this.splinePointsArr;
        }
    }
    // logarithm drawing code  start
    drawlogarithm(e) {
        console.log(e, 'any');
        let canCreate = true, i, coords, el;
        if (e[JXG.touchProperty]) {
            i = 0;
        }
        coords = this.getMouseCoords(e, i);
        console.log(this.board.objects, 'objectssss');
        this.drawLogarithmPoints = [];
        for (el in this.board.objects) {
            // if(coords.usrCoords[1] != 0 && coords.usrCoords[2] != 0) {
            if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2] && this.board.objects[el].name != '')
                && this.board.objects[el].logarithmDrawn == false) {
                canCreate = false;
                this.board.objects[el].existPoint = false;
                this.getLengthOfSelectedlogarithm(el);
                break;
            }
            // }
            // if (JXG.isPoint(this.board.objects[el]) && this.board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])) {
            //   this.board.objects[el].existPoint = false;
            //   canCreate = false;
            //   break;
            //
            // }
            // this.getLengthOfSelectedPoints(el);
        }
        if (canCreate) {
            if (this.drawLogarithmPoints.length < 2) {
                // this.makeLine();
                this.board.create('point', [coords.usrCoords[1], coords.usrCoords[2]]);
                this.getLengthOfSelectedlogarithm(el);
            }
            console.log(this.drawLogarithmPoints.length, 'drawLogarithmPoints length');
            if (this.drawLogarithmPoints.length == 2) {
                this.makelogarithm();
            }
        }
    }
    getLengthOfSelectedlogarithm(el) {
        this.drawLogarithmPoints = [];
        for (el in this.board.objects) {
            console.log(this.board.objects[el].logarithmDrawn, 'logarithmDrawn');
            if (this.board.objects[el].elType == 'point' && !this.board.objects[el].existPoint &&
                this.board.objects[el].isReal && this.board.objects[el].isDraggable
                && !this.board.objects[el].logarithmDrawn) {
                this.drawLogarithmPoints.push(this.board.objects[el]);
            }
        }
    }
    makelogarithm() {
        if (this.drawLogarithmPoints.length == 2) {
            const orgins = this.drawLogarithmPoints[0].coords.usrCoords;
            const orgins2 = this.drawLogarithmPoints[1].coords.usrCoords;
            for (const el in this.board.objects) {
                if (this.drawLogarithmPoints[0].name === this.board.objects[el].name) {
                    this.board.objects[el].logarithmDrawn = true;
                }
                if (this.drawLogarithmPoints[1].name === this.board.objects[el].name) {
                    this.board.objects[el].logarithmDrawn = true;
                }
            }
            console.log(this.drawLogarithmPoints, 'pints');
            // this.board.create('line' , [[orgins[1], orgins[2]], [orgins2[1], orgins2[2]]], {straightFirst:false, straightLast:false, strokeWidth:2});
            // this.board.create('line', [this.drawLogarithmPoints[0].name, this.drawLogarithmPoints[1].name], {
            //      straightFirst: false,
            //      straightLast: false,
            //      strokeWidth: 2
            //  });
            // let A = this.board.create('point', [1, Math.exp(1)]);
            const A = this.drawLogarithmPoints[0];
            const B = this.drawLogarithmPoints[1];
            console.log(A, 'aa');
            console.log(A.Y(), 'aay');
            console.log(A.X(), 'aasx');
            const graph = this.board.create('functiongraph', [
                (x) => {
                    // var a = Math.log(A.Y()) / A.X();
                    const a = Math.log(B.Y()) / A.X();
                    return Math.exp(a * x);
                }
            ]);
            this.drawLogarithmPoints = [];
        }
    }
    submitValue() {
        this.valueChange.emit(this.board);
    }
    static { this.ɵfac = function GraphComponentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GraphComponentComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.ClassService), i0.ɵɵdirectiveInject(i3.ContentService), i0.ɵɵdirectiveInject(i4.ConfigurationService), i0.ɵɵdirectiveInject(i5.DomSanitizer), i0.ɵɵdirectiveInject(i6.FormBuilder), i0.ɵɵdirectiveInject(i7.CreatorService), i0.ɵɵdirectiveInject(i8.ToastrService), i0.ɵɵdirectiveInject(i9.Router), i0.ɵɵdirectiveInject(i10.ValidationService), i0.ɵɵdirectiveInject(i9.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GraphComponentComponent, selectors: [["app-graph-component"]], inputs: { questionType: "questionType", editPatchValue: "editPatchValue", editMode: "editMode", graphId: "graphId", saveAndDuplicate: "saveAndDuplicate" }, outputs: { emitItem: "emitItem", valueChange: "valueChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 2, consts: [[1, "container", "row"], ["class", "col-12 d-flex justify-content-center pl-5 pb-0", 4, "ngIf"], [1, "col-12", "mt-0", "d-flex", "justify-content-center"], [1, "jxgbox", "mt-3", 2, "width", "500px", "height", "500px", 3, "id"], [1, "col-12", "d-flex", "justify-content-center", "pl-5", "pb-0"], [1, "mt-2", "ii", "btn", "btn-danger", 2, "font-size", "9px", "padding", "7px", "margin-left", "-7%", "margin-right", "34px", 3, "click"], ["style", "font-size: 9px;padding: 7px;", "class", "myButton  mt-2 ml-2 mr-2 btn btn-outline-primary", 3, "disabled", "ngClass", "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "myButton", "mt-2", "ml-2", "mr-2", "btn", "btn-outline-primary", 2, "font-size", "9px", "padding", "7px", 3, "click", "disabled", "ngClass", "ngStyle"]], template: function GraphComponentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, GraphComponentComponent_div_1_Template, 4, 1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelement(3, "div", 3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.editMode);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("id", ctx.graphId);
        } }, dependencies: [i11.NgClass, i11.NgForOf, i11.NgIf, i11.NgStyle] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GraphComponentComponent, [{
        type: Component,
        args: [{ selector: 'app-graph-component', template: "<!--<div class=\"row\" *ngIf=\"editPatchValue == false\">-->\n<div class=\"container row\">\n      <!--                        <div class=\"row \">-->\n      <div class=\"col-12 d-flex justify-content-center pl-5 pb-0\" *ngIf=\"editMode\">\n            <button (click)=\"resetBoard()\" style=\"font-size: 9px;padding: 7px;margin-left: -7%;margin-right: 34px\"  class=\"mt-2 ii btn btn-danger\">Reset</button>\n\n            <button [disabled]=\"!item.status\" style=\"font-size: 9px;padding: 7px;\"\n                    [ngClass]=\"{'myButton btn-primary' : markType == item.type}\"\n                    [ngStyle]=\"{'color': markType == item.type ? 'white': ''}\"\n                    class=\"myButton  mt-2 ml-2 mr-2 btn btn-outline-primary\" *ngFor=\"let item of graphTools;let i=index\" (click)=\"markPoint(item.type)\">{{item.name}}</button>\n\n\n      </div>\n<!--      <div class=\"col-6 pr-5 pb-0\">-->\n<!--            <button style=\"font-size: 9px;padding: 7px;\" disabled  class=\"mt-2 ml-2 mr-2 btn btn-outline-primary\">Undo</button>-->\n\n<!--            <button style=\"font-size: 9px;padding: 7px;\" disabled  class=\"mt-2 ml-2 mr-2 btn btn-outline-primary\">Redo</button>-->\n<!--            <button style=\"font-size: 9px;padding: 7px;\" disabled  class=\"mt-2 ml-2 mr-2 btn btn-danger\">Delete</button>-->\n<!--            <button (click)=\"submitValue()\" style=\"font-size: 9px;padding: 7px;\"  class=\"mt-2 btn btn-danger\">update</button>-->\n<!--            <button (click)=\"setMarkType('s')\" style=\"font-size: 9px;padding: 7px;\"  class=\"mt-2 btn btn-danger\">emitt</button>-->\n<!--      </div>-->\n      <div class=\"col-12 mt-0 d-flex justify-content-center\" >\n            <div  [id]=\"graphId\" class=\"jxgbox mt-3\" style=\"width:500px; height:500px;\"></div>\n      </div>\n      <!--                        </div>-->\n\n</div>\n\n\n<!--<div class=\"row\" [hidden]=\"editPatchValue == false\">-->\n<!--      <div class=\"col-6 pl-5 pb-0\" *ngIf=\"editMode\">-->\n<!--            <button [disabled]=\"!item.status\" style=\"font-size: 9px;padding: 7px;\" class=\"myButton  mt-2 ml-2 mr-2 btn btn-outline-primary\" *ngFor=\"let item of graphTools;let i=index\" (click)=\"markPoint(item.type)\">{{item.name}}</button>-->\n<!--      </div>-->\n<!--      <div class=\"col-6 pr-5 pb-0\" [hidden]=\"!editMode\">-->\n<!--            &lt;!&ndash;            <button style=\"font-size: 9px;padding: 7px;\" disabled  class=\"mt-2 ml-2 mr-2 btn btn-outline-primary\">Undo</button>&ndash;&gt;-->\n\n<!--            &lt;!&ndash;            <button style=\"font-size: 9px;padding: 7px;\" disabled  class=\"mt-2 ml-2 mr-2 btn btn-outline-primary\">Redo</button>&ndash;&gt;-->\n<!--            &lt;!&ndash;            <button style=\"font-size: 9px;padding: 7px;\" disabled  class=\"mt-2 ml-2 mr-2 btn btn-danger\">Delete</button>&ndash;&gt;-->\n<!--            <button (click)=\"resetBoard()\" style=\"font-size: 9px;padding: 7px;\"  class=\"mt-2 btn btn-danger\">Reset</button>-->\n<!--            &lt;!&ndash;            <button (click)=\"submitValue()\" style=\"font-size: 9px;padding: 7px;\"  class=\"mt-2 btn btn-danger\">update</button>&ndash;&gt;-->\n<!--            &lt;!&ndash;            <button (click)=\"setMarkType('s')\" style=\"font-size: 9px;padding: 7px;\"  class=\"mt-2 btn btn-danger\">emitt</button>&ndash;&gt;-->\n<!--      </div>-->\n<!--      &lt;!&ndash;                        <div class=\"row \">&ndash;&gt;-->\n<!--      <div class=\"col-12 mt-0 d-flex justify-content-center\" >-->\n<!--            <div  [id]=\"graphId\" class=\"jxgbox mt-3\" style=\"width:500px; height:500px;\"></div>-->\n<!--      </div>-->\n<!--      &lt;!&ndash;                        </div>&ndash;&gt;-->\n\n<!--</div>-->\n" }]
    }], () => [{ type: i1.AuthService }, { type: i0.ChangeDetectorRef }, { type: i2.ClassService }, { type: i3.ContentService }, { type: i4.ConfigurationService }, { type: i5.DomSanitizer }, { type: i6.FormBuilder }, { type: i7.CreatorService }, { type: i8.ToastrService }, { type: i9.Router }, { type: i10.ValidationService }, { type: i9.ActivatedRoute }], { questionType: [{
            type: Input
        }], editPatchValue: [{
            type: Input
        }], editMode: [{
            type: Input
        }], graphId: [{
            type: Input
        }], saveAndDuplicate: [{
            type: Input
        }], emitItem: [{
            type: Output
        }], valueChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GraphComponentComponent, { className: "GraphComponentComponent" }); })();
//# sourceMappingURL=graph-component.component.js.map