webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_app_component__ = __webpack_require__("../../../../../src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_board_component__ = __webpack_require__("../../../../../src/app/components/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__state_reducer__ = __webpack_require__("../../../../../src/app/state/reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_cell_component__ = __webpack_require__("../../../../../src/app/components/cell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tetromino__ = __webpack_require__("../../../../../src/app/components/tetromino.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_controls_component__ = __webpack_require__("../../../../../src/app/components/controls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_scoreboard_component__ = __webpack_require__("../../../../../src/app/components/scoreboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_next_tetromino_component__ = __webpack_require__("../../../../../src/app/components/next-tetromino.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_timer_provider__ = __webpack_require__("../../../../../src/app/providers/timer.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__components_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_board_component__["a" /* BoardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_cell_component__["a" /* CellComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_tetromino__["a" /* TetrominoComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_controls_component__["a" /* ControlsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_scoreboard_component__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_next_tetromino_component__["a" /* NextTetrominoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* StoreModule */].forRoot({ tetris: __WEBPACK_IMPORTED_MODULE_5__state_reducer__["a" /* tetrisReducer */] })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__providers_timer_provider__["a" /* TimerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__components_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_actions__ = __webpack_require__("../../../../../src/app/state/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_timer_provider__ = __webpack_require__("../../../../../src/app/providers/timer.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(store, timer) {
        this.store = store;
        this.timer = timer;
        this.state$ = store.select(function (state) { return state.tetris; });
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.timer.init();
    };
    AppComponent.prototype.newGame = function () {
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__state_actions__["k" /* newGame */])());
    };
    AppComponent.prototype.togglePause = function () {
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__state_actions__["n" /* togglePause */])());
    };
    AppComponent.prototype.softDrop = function () {
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__state_actions__["m" /* softDrop */])(false));
    };
    AppComponent.prototype.hardDrop = function () {
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__state_actions__["h" /* hardDrop */])());
    };
    AppComponent.prototype.moveLeft = function () {
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__state_actions__["i" /* moveActiveTetrominoLeft */])());
    };
    AppComponent.prototype.moveRight = function () {
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__state_actions__["j" /* moveActiveTetrominoRight */])());
    };
    AppComponent.prototype.rotate = function () {
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__state_actions__["l" /* rotateActiveTetromino */])());
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: "\n\t\t<div class=\"app\">\n\t\t\t<h1>Angular + Redux Tetris</h1>\n\t\t\t<div *ngIf=\"state$ | async as state\" class=\"app-container\">\n\n\t\t\t\t<app-board\n\t\t\t\t\t[state]=\"state\"\n\t\t\t\t\t(onSoftDrop)=\"softDrop()\"\n\t\t\t\t\t(onHardDrop)=\"hardDrop()\"\n\t\t\t\t\t(onMoveLeft)=\"moveLeft()\"\n\t\t\t\t\t(onMoveRight)=\"moveRight()\"\n\t\t\t\t\t(onTogglePause)=\"togglePause()\"\n\t\t\t\t\t(onNewGame)=\"newGame()\"\n\t\t\t\t\t(onRotate)=\"rotate()\">\n\t\t\t\t</app-board>\n\n\t\t\t\t<div class=\"app-side-panel\">\n\t\t\t\t\t<app-controls\n\t\t\t\t\t\t(onNew)=\"newGame()\"\n\t\t\t\t\t\t(onPause)=\"togglePause()\"\n\t\t\t\t\t\t[isStarted]=\"state.isStarted\"\n\t\t\t\t\t\t[isFinished]=\"state.isFinished\"\n\t\t\t\t\t\t[isTiming]=\"state.isTiming\">\n\t\t\t\t\t</app-controls>\n\n\t\t\t\t\t<app-next-tetromino\n\t\t\t\t\t\t[tetromino]=\"state.nextTetromino\"\n\t\t\t\t\t\t[cellSize]=\"state.cellSize\">\n\t\t\t\t\t</app-next-tetromino>\n\n\t\t\t\t\t<app-scoreboard\n\t\t\t\t\t\t[level]=\"state.level\"\n\t\t\t\t\t\t[lines]=\"state.linesUntilNextLevel\"\n\t\t\t\t\t\t[score]=\"state.score\">\n\t\t\t\t\t</app-scoreboard>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_timer_provider__["a" /* TimerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_timer_provider__["a" /* TimerService */]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_state_interface__ = __webpack_require__("../../../../../src/app/state/state.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_state_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__state_state_interface__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoardComponent = (function () {
    function BoardComponent() {
        this.onMoveLeft = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onMoveRight = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onSoftDrop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onRotate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onHardDrop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onTogglePause = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onNewGame = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    BoardComponent.prototype.onKeyUp = function ($event) {
        if ($event.keyCode === 78) {
            // N - new game
            this.onNewGame.emit();
            return;
        }
        if ($event.keyCode === 80 && this.state.isStarted && !this.state.isFinished) {
            // P - toggle pause
            this.onTogglePause.emit();
            return;
        }
        if (this.state.isStarted && !this.state.isFinished && this.state.isTiming) {
            switch ($event.keyCode) {
                case 37:
                    // Left arrow key
                    this.onMoveLeft.emit();
                    break;
                case 39:
                    // Right arrow key
                    this.onMoveRight.emit();
                    break;
                case 38:
                    // Up arrow key
                    this.onRotate.emit();
                    break;
                case 40:
                    // Down arrow key
                    this.onSoftDrop.emit();
                    break;
                case 32:
                    // Space bar
                    this.onHardDrop.emit();
                    break;
            }
        }
    };
    Object.defineProperty(BoardComponent.prototype, "width", {
        get: function () {
            return this.state.numCols * (this.state.cellSize - 1) + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoardComponent.prototype, "height", {
        get: function () {
            return this.state.numRows * (this.state.cellSize - 1) + 1;
        },
        enumerable: true,
        configurable: true
    });
    BoardComponent.prototype.unclearedCellsTrackBy = function (index) {
        return index;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__state_state_interface__["ITetrisState"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__state_state_interface__["ITetrisState"]) === "function" && _a || Object)
    ], BoardComponent.prototype, "state", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], BoardComponent.prototype, "onMoveLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], BoardComponent.prototype, "onMoveRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], BoardComponent.prototype, "onSoftDrop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], BoardComponent.prototype, "onRotate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], BoardComponent.prototype, "onHardDrop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], BoardComponent.prototype, "onTogglePause", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], BoardComponent.prototype, "onNewGame", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BoardComponent.prototype, "onKeyUp", null);
    BoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-board',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            template: "\n\t\t<div\n\t\t\tclass=\"app-board\"\n\t\t\t[style.width]=\"width + 'px'\"\n\t\t\t[style.height]=\"height + 'px'\"\n\t\t>\n\t\t\t<app-tetromino\n\t\t\t\t[cells]=\"state.ghostCells\"\n\t\t\t\t[cellSize]=\"state.cellSize\"\n\t\t\t\t[isGhost]=\"true\">\n\t\t\t</app-tetromino>\n\n\t\t\t<app-cell\n\t\t\t\t*ngFor=\"let cell of state.unclearedCells; trackBy: unclearedCellsTrackBy\"\n\t\t\t\t[cell]=\"cell\"\n\t\t\t\t[size]=\"state.cellSize\">\n\t\t\t</app-cell>\n\n\t\t\t<app-tetromino\n\t\t\t\t[cells]=\"state.activeTetromino?.cells\"\n\t\t\t\t[cellSize]=\"state.cellSize\"\n\t\t\t\t[isGhost]=\"false\">\n\t\t\t</app-tetromino>\n\t\t</div>\n\t"
        })
    ], BoardComponent);
    return BoardComponent;
    var _a;
}());

//# sourceMappingURL=board.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_cell_interface__ = __webpack_require__("../../../../../src/app/interfaces/cell.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_cell_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces_cell_interface__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CellComponent = (function () {
    function CellComponent() {
    }
    Object.defineProperty(CellComponent.prototype, "cellClass", {
        get: function () {
            return this.isGhost ? 'ghost' : this.cell.type;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces_cell_interface__["ICell"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces_cell_interface__["ICell"]) === "function" && _a || Object)
    ], CellComponent.prototype, "cell", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], CellComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CellComponent.prototype, "isGhost", void 0);
    CellComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cell',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            template: "\n\t\t<div\n\t\t\tclass=\"{{'app-cell app-cell-' + cellClass}}\"\n\t\t\t[style.width]=\"size + 'px'\"\n\t\t\t[style.height]=\"size + 'px'\"\n\t\t\t[style.left]=\"cell.column * (size - 1) + 'px'\"\n\t\t\t[style.top]=\"cell.row * (size - 1) + 'px'\"\n\t\t></div>\n\t"
        })
    ], CellComponent);
    return CellComponent;
    var _a;
}());

//# sourceMappingURL=cell.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/controls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ControlsComponent = (function () {
    function ControlsComponent() {
        this.onNew = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onPause = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Object.defineProperty(ControlsComponent.prototype, "isPaused", {
        get: function () {
            return this.isStarted && !this.isFinished && !this.isTiming;
        },
        enumerable: true,
        configurable: true
    });
    ControlsComponent.prototype.pauseBtnClicked = function ($event) {
        this.onPause.emit();
        $event.target.blur();
    };
    ControlsComponent.prototype.newGameBtnClicked = function ($event) {
        this.onNew.emit();
        $event.target.blur();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ControlsComponent.prototype, "isStarted", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ControlsComponent.prototype, "isFinished", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ControlsComponent.prototype, "isTiming", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ControlsComponent.prototype, "onNew", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ControlsComponent.prototype, "onPause", void 0);
    ControlsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-controls',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            template: "\n\t\t<div class=\"app-controls\">\n\t\t\t<button type=\"button\" (click)=\"newGameBtnClicked($event)\">New Game</button>\n\t\t\t<button\n\t\t\t\ttype=\"button\"\n\t\t\t\t[disabled]=\"!isStarted || isFinished\"\n\t\t\t\t(click)=\"pauseBtnClicked($event)\"\n\t\t\t>{{isPaused ? 'Resume Game' : 'Pause Game'}}</button>\n\t\t</div>\n\t"
        })
    ], ControlsComponent);
    return ControlsComponent;
}());

//# sourceMappingURL=controls.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/next-tetromino.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextTetrominoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_centerTetromino__ = __webpack_require__("../../../../../src/app/helpers/centerTetromino.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_offsetTetromino__ = __webpack_require__("../../../../../src/app/helpers/offsetTetromino.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NextTetrominoComponent = (function () {
    function NextTetrominoComponent() {
    }
    Object.defineProperty(NextTetrominoComponent.prototype, "rowSpan", {
        get: function () {
            if (this.tetromino === null) {
                return 0;
            }
            var rows = this.tetromino.cells.map(function (c) { return c.row; });
            return Math.max.apply(Math, rows) - Math.min.apply(Math, rows) + 1;
        },
        enumerable: true,
        configurable: true
    });
    NextTetrominoComponent.prototype.adjustTetrominoPosition = function (tetromino) {
        if (tetromino === null) {
            return tetromino;
        }
        var rowSpan = this.rowSpan;
        return Object(__WEBPACK_IMPORTED_MODULE_2__helpers_offsetTetromino__["a" /* offsetTetromino */])(Object(__WEBPACK_IMPORTED_MODULE_1__helpers_centerTetromino__["a" /* centerTetromino */])(tetromino, 3, false), 0, rowSpan, rowSpan, 3);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], NextTetrominoComponent.prototype, "tetromino", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], NextTetrominoComponent.prototype, "cellSize", void 0);
    NextTetrominoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-next-tetromino',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            template: "\n\t\t<div\n\t\t\tclass=\"app-next-tetromino-wrapper\"\n\t\t\t[style.height]=\"(6 * cellSize) + 'px'\"\n\t\t>\n\t\t\t<div class=\"app-next-tetromino-label\">Next Tetromino</div>\n\t\t\t<div\n\t\t\t\tclass=\"app-next-tetromino\"\n\t\t\t\t[style.width]=\"3 * cellSize + 'px'\"\n\t\t\t\t[style.height]=\"4 * cellSize + 'px'\"\n\t\t\t\t[style.top]=\"0.5 * (4 - rowSpan) * cellSize + 'px'\"\n\t\t\t>\n\t\t\t\t<app-tetromino\n\t\t\t\t\t[cells]=\"adjustTetrominoPosition(tetromino).cells\"\n\t\t\t\t\t[cellSize]=\"cellSize\"\n\t\t\t\t\t[isGhost]=\"false\">\n\t\t\t\t</app-tetromino>\n\t\t\t</div>\n\t\t</div>\n\t"
        })
    ], NextTetrominoComponent);
    return NextTetrominoComponent;
    var _a;
}());

//# sourceMappingURL=next-tetromino.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/scoreboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimerComponent = (function () {
    function TimerComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "lines", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "score", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "level", void 0);
    TimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-scoreboard',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            template: "\n\t\t<div class=\"app-scoreboard\">\n\t\t\t<div class=\"app-scoreboard-box app-scoreboard-box-score\">\n\t\t\t\t<div class=\"app-scoreboard-box-label\">Score</div>\n\t\t\t\t<div class=\"app-scoreboard-box-value\">{{score}}</div>\n\t\t\t</div>\n\t\t\t<div class=\"app-scoreboard-box app-scoreboard-box-level\">\n\t\t\t\t<div class=\"app-scoreboard-box-label\">Level</div>\n\t\t\t\t<div class=\"app-scoreboard-box-value\">{{level}}</div>\n\t\t\t</div>\n\t\t\t<div class=\"app-scoreboard-box app-scoreboard-box-lines\">\n\t\t\t\t<div class=\"app-scoreboard-box-label\">Lines until next level</div>\n\t\t\t\t<div class=\"app-scoreboard-box-value\">{{lines}}</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        })
    ], TimerComponent);
    return TimerComponent;
}());

//# sourceMappingURL=scoreboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tetromino.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TetrominoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TetrominoComponent = (function () {
    function TetrominoComponent() {
    }
    // Fine to track by cell index, tetromino always has 4 cells.
    TetrominoComponent.prototype.trackByFn = function (index, cell) {
        return index;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], TetrominoComponent.prototype, "cells", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], TetrominoComponent.prototype, "cellSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TetrominoComponent.prototype, "isGhost", void 0);
    TetrominoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tetromino',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            template: "\n\t\t<app-cell\n\t\t\t*ngFor=\"let cell of cells; trackBy: trackByFn\"\n\t\t\t[cell]=\"cell\"\n\t\t\t[size]=\"cellSize\"\n\t\t\t[isGhost]=\"isGhost\"\n\t\t></app-cell>\n\t"
        })
    ], TetrominoComponent);
    return TetrominoComponent;
}());

//# sourceMappingURL=tetromino.js.map

/***/ }),

/***/ "../../../../../src/app/enums/orientation.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Orientation; });
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Normal"] = 0] = "Normal";
    Orientation[Orientation["FlippedLeft"] = 1] = "FlippedLeft";
    Orientation[Orientation["UpsideDown"] = 2] = "UpsideDown";
    Orientation[Orientation["FlippedRight"] = 3] = "FlippedRight";
})(Orientation || (Orientation = {}));
//# sourceMappingURL=orientation.enum.js.map

/***/ }),

/***/ "../../../../../src/app/enums/tetromino.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TetrominoType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tetrominoEnumKeys; });
var TetrominoType;
(function (TetrominoType) {
    TetrominoType["L"] = "L";
    TetrominoType["O"] = "O";
    TetrominoType["Z"] = "Z";
    TetrominoType["S"] = "S";
    TetrominoType["T"] = "T";
    TetrominoType["I"] = "I";
    TetrominoType["J"] = "J";
})(TetrominoType || (TetrominoType = {}));
var tetrominoEnumKeys = Object.keys(TetrominoType).filter(function (key) { return isNaN(Number(key)); });
//# sourceMappingURL=tetromino.enum.js.map

/***/ }),

/***/ "../../../../../src/app/helpers/calculateInterval.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calculateInterval;
function calculateInterval(level) {
    return 100 + Math.max(0, 10 - level) * 50;
}
//# sourceMappingURL=calculateInterval.js.map

/***/ }),

/***/ "../../../../../src/app/helpers/calculateMaxSpacesLeft.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calculateSpacesLeft;
function calculateSpacesLeft(activeTetromino, unclearedCells, numRows) {
    var spacesToMove = numRows;
    var columns = activeTetromino.cells.map(function (cell) { return cell.column; });
    var minColumn = Math.min.apply(Math, columns);
    var maxColumn = Math.max.apply(Math, columns);
    var _loop_1 = function (i) {
        var cellsInColumn = activeTetromino.cells.filter(function (cell) { return cell.column === i; });
        var rows = cellsInColumn.map(function (cell) { return cell.row; });
        var maxRow = Math.max.apply(Math, rows);
        var unclearedCellsInColumn = unclearedCells
            .filter(function (cell) { return cell.column === i && cell.row > maxRow; });
        var highestUnclearedCellRow = unclearedCellsInColumn.length > 0 ? Math.min.apply(Math, unclearedCellsInColumn.map(function (cell) { return cell.row; })) :
            numRows;
        spacesToMove = Math.min(spacesToMove, highestUnclearedCellRow - maxRow - 1);
        if (spacesToMove === 0) {
            return "break";
        }
    };
    for (var i = minColumn; i <= maxColumn; i++) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    return spacesToMove;
}
//# sourceMappingURL=calculateMaxSpacesLeft.js.map

/***/ }),

/***/ "../../../../../src/app/helpers/centerTetromino.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = centerTetromino;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getTetrominoWidth__ = __webpack_require__("../../../../../src/app/helpers/getTetrominoWidth.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function centerTetromino(tetromino, numCols, roundToNearest) {
    if (roundToNearest === void 0) { roundToNearest = true; }
    var width = Object(__WEBPACK_IMPORTED_MODULE_0__getTetrominoWidth__["a" /* getTetrominoWidth */])(tetromino);
    var offset = roundToNearest ? Math.floor((numCols - width) / 2) : (numCols - width) / 2;
    var cells = tetromino.cells.map(function (cell) { return (__assign({}, cell, { column: cell.column + offset })); });
    var unrotatedCells = tetromino.unrotatedCells.map(function (cell) { return (__assign({}, cell, { column: cell.column + offset })); });
    return __assign({}, tetromino, { cells: cells, unrotatedCells: unrotatedCells });
}
//# sourceMappingURL=centerTetromino.js.map

/***/ }),

/***/ "../../../../../src/app/helpers/generateCell.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = generateCell;
function generateCell(row, column, type) {
    return { row: row, column: column, type: type };
}
//# sourceMappingURL=generateCell.js.map

/***/ }),

/***/ "../../../../../src/app/helpers/generateRandomTetromino.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = generateRandomTetromino;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__ = __webpack_require__("../../../../../src/app/enums/tetromino.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generateTetromino__ = __webpack_require__("../../../../../src/app/helpers/generateTetromino.ts");


function generateRandomTetromino() {
    var rand = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__["b" /* tetrominoEnumKeys */].length);
    var type = __WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__["a" /* TetrominoType */][__WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__["b" /* tetrominoEnumKeys */][rand]];
    return Object(__WEBPACK_IMPORTED_MODULE_1__generateTetromino__["a" /* generateTetromino */])(type);
}
//# sourceMappingURL=generateRandomTetromino.js.map

/***/ }),

/***/ "../../../../../src/app/helpers/generateTetromino.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = generateTetromino;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__ = __webpack_require__("../../../../../src/app/enums/tetromino.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_orientation_enum__ = __webpack_require__("../../../../../src/app/enums/orientation.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generateCell__ = __webpack_require__("../../../../../src/app/helpers/generateCell.ts");



function generateTetromino(type) {
    var cells;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__["a" /* TetrominoType */].O:
            cells = [
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-2, 0, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-2, 1, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-1, 0, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-1, 1, type)
            ];
            break;
        case __WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__["a" /* TetrominoType */].T:
            cells = [
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-1, 0, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-1, 1, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-1, 2, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-2, 1, type)
            ];
            break;
        case __WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__["a" /* TetrominoType */].I:
            cells = [
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-4, 0, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-3, 0, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-2, 0, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-1, 0, type)
            ];
            break;
        case __WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__["a" /* TetrominoType */].L:
            cells = [
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-3, 0, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-2, 0, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-1, 0, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-1, 1, type)
            ];
            break;
        case __WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__["a" /* TetrominoType */].J:
            cells = [
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-3, 1, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-2, 1, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-1, 1, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-1, 0, type)
            ];
            break;
        case __WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__["a" /* TetrominoType */].Z:
            cells = [
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-2, 0, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-2, 1, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-1, 1, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-1, 2, type)
            ];
            break;
        case __WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__["a" /* TetrominoType */].S:
            cells = [
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-1, 0, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-1, 1, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-2, 1, type),
                Object(__WEBPACK_IMPORTED_MODULE_2__generateCell__["a" /* generateCell */])(-2, 2, type)
            ];
            break;
        default:
            cells = [];
            break;
    }
    return {
        type: type,
        orientation: __WEBPACK_IMPORTED_MODULE_1__enums_orientation_enum__["a" /* Orientation */].Normal,
        cells: cells,
        unrotatedCells: cells
    };
}
//# sourceMappingURL=generateTetromino.js.map

/***/ }),

/***/ "../../../../../src/app/helpers/getTetrominoWidth.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTetrominoWidth;
function getTetrominoWidth(tetromino) {
    var columns = tetromino.cells.map(function (cell) { return cell.column; });
    var min = Math.min.apply(Math, columns);
    var max = Math.max.apply(Math, columns);
    return max - min + 1;
}
//# sourceMappingURL=getTetrominoWidth.js.map

/***/ }),

/***/ "../../../../../src/app/helpers/isOverlapping.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isOverlapping;
function isOverlapping(tetromino, unclearedCells) {
    var isOverlapping = false;
    var _loop_1 = function (i, n) {
        var cell = tetromino.cells[i];
        if (unclearedCells.filter(function (c) { return c.row === cell.row && c.column === cell.column; }).length > 0) {
            isOverlapping = true;
            return "break";
        }
    };
    for (var i = 0, n = tetromino.cells.length; i < n; i++) {
        var state_1 = _loop_1(i, n);
        if (state_1 === "break")
            break;
    }
    return isOverlapping;
}
//# sourceMappingURL=isOverlapping.js.map

/***/ }),

/***/ "../../../../../src/app/helpers/offsetTetromino.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = offsetTetromino;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function offsetTetromino(tetromino, dx, dy, numRows, numCols) {
    var _dx = dx;
    var _dy = dy;
    if (dx < 0) {
        var minX = Math.min.apply(Math, tetromino.cells.map(function (cell) { return cell.column; }));
        _dx = Math.max(-minX, _dx);
    }
    else {
        var maxX = Math.max.apply(Math, tetromino.cells.map(function (cell) { return cell.column; }));
        _dx = Math.min(numCols - maxX - 1, _dx);
    }
    if (dy < 0) {
        var minY = Math.min.apply(Math, tetromino.cells.map(function (cell) { return cell.row; }));
        _dy = Math.max(-minY, _dy);
    }
    else {
        var maxY = Math.max.apply(Math, tetromino.cells.map(function (cell) { return cell.row; }));
        _dy = Math.min(numRows - maxY - 1, _dy);
    }
    if (_dx === 0 && _dy === 0) {
        return tetromino;
    }
    return __assign({}, tetromino, { cells: tetromino.cells.map(function (cell) { return (__assign({}, cell, { row: cell.row + _dy, column: cell.column + _dx })); }), unrotatedCells: tetromino.unrotatedCells.map(function (cell) { return (__assign({}, cell, { row: cell.row + _dy, column: cell.column + _dx })); }) });
}
//# sourceMappingURL=offsetTetromino.js.map

/***/ }),

/***/ "../../../../../src/app/helpers/unique.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = unique;
function unique(values) {
    if (values.length === 0) {
        return [];
    }
    var uniqueValues = [values[0]];
    for (var i = 1, n = values.length; i < n; i++) {
        if (uniqueValues.indexOf(values[i]) === -1) {
            uniqueValues.push(values[i]);
        }
    }
    return uniqueValues;
}
//# sourceMappingURL=unique.js.map

/***/ }),

/***/ "../../../../../src/app/interfaces/cell.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=cell.interface.js.map

/***/ }),

/***/ "../../../../../src/app/providers/timer.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_partition__ = __webpack_require__("../../../../rxjs/add/operator/partition.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_partition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_partition__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_combineLatest__ = __webpack_require__("../../../../rxjs/add/operator/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__state_actions__ = __webpack_require__("../../../../../src/app/state/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TimerService = (function () {
    function TimerService(store) {
        this.store = store;
    }
    TimerService.prototype.init = function () {
        var _this = this;
        var _a = this.store.select(function (state) { return state.tetris.isTiming; })
            .partition(function (value) { return value; }), isTiming$ = _a[0], isNotTiming$ = _a[1];
        var partialInterval$ = this.store.select(function (state) { return state.tetris.partialInterval; });
        var interval$ = this.store.select(function (state) { return state.tetris.interval; });
        isTiming$
            .combineLatest(interval$, function (isTiming, interval) { return interval; })
            .withLatestFrom(partialInterval$)
            .switchMap(function (_a) {
            var interval = _a[0], partialInterval = _a[1];
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].timer(partialInterval, interval)
                .takeUntil(isNotTiming$);
        })
            .subscribe(function () {
            _this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__state_actions__["m" /* softDrop */])(true));
        });
    };
    TimerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]) === "function" && _a || Object])
    ], TimerService);
    return TimerService;
    var _a;
}());

//# sourceMappingURL=timer.provider.js.map

/***/ }),

/***/ "../../../../../src/app/state/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NEW_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TOGGLE_PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SOFT_DROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HARD_DROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MOVE_ACTIVE_TETROMINO_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MOVE_ACTIVE_TETROMINO_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ROTATE_ACTIVE_TETROMINO; });
/* harmony export (immutable) */ __webpack_exports__["k"] = newGame;
/* harmony export (immutable) */ __webpack_exports__["n"] = togglePause;
/* harmony export (immutable) */ __webpack_exports__["m"] = softDrop;
/* harmony export (immutable) */ __webpack_exports__["h"] = hardDrop;
/* harmony export (immutable) */ __webpack_exports__["i"] = moveActiveTetrominoLeft;
/* harmony export (immutable) */ __webpack_exports__["j"] = moveActiveTetrominoRight;
/* harmony export (immutable) */ __webpack_exports__["l"] = rotateActiveTetromino;
var NEW_GAME = 'NEW_GAME';
var TOGGLE_PAUSE = 'TOGGLE_PAUSE';
var SOFT_DROP = 'SOFT_DROP';
var HARD_DROP = 'HARD_DROP';
var MOVE_ACTIVE_TETROMINO_LEFT = 'MOVE_ACTIVE_TETROMINO_LEFT';
var MOVE_ACTIVE_TETROMINO_RIGHT = 'MOVE_ACTIVE_TETROMINO_RIGHT';
var ROTATE_ACTIVE_TETROMINO = 'ROTATE_ACTIVE_TETROMINO';
function newGame() {
    return { type: NEW_GAME };
}
function togglePause() {
    return { type: TOGGLE_PAUSE };
}
function softDrop(isAuto) {
    return { type: SOFT_DROP, payload: isAuto };
}
function hardDrop() {
    return { type: HARD_DROP };
}
function moveActiveTetrominoLeft() {
    return { type: MOVE_ACTIVE_TETROMINO_LEFT };
}
function moveActiveTetrominoRight() {
    return { type: MOVE_ACTIVE_TETROMINO_RIGHT };
}
function rotateActiveTetromino() {
    return { type: ROTATE_ACTIVE_TETROMINO };
}
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "../../../../../src/app/state/mappers/moveActiveTetrominoDown.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = moveActiveTetrominoDownMapper;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_offsetTetromino__ = __webpack_require__("../../../../../src/app/helpers/offsetTetromino.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_centerTetromino__ = __webpack_require__("../../../../../src/app/helpers/centerTetromino.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_generateRandomTetromino__ = __webpack_require__("../../../../../src/app/helpers/generateRandomTetromino.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_calculateInterval__ = __webpack_require__("../../../../../src/app/helpers/calculateInterval.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_isOverlapping__ = __webpack_require__("../../../../../src/app/helpers/isOverlapping.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_calculateMaxSpacesLeft__ = __webpack_require__("../../../../../src/app/helpers/calculateMaxSpacesLeft.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions__ = __webpack_require__("../../../../../src/app/state/actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};







function moveActiveTetrominoDownMapper(state, action) {
    var isHardDrop = action.type === __WEBPACK_IMPORTED_MODULE_6__actions__["a" /* HARD_DROP */];
    var isAuto = action.payload;
    var numRows = state.numRows, numCols = state.numCols, linesPerLevel = state.linesPerLevel;
    var unclearedCells = state.unclearedCells, level = state.level, linesUntilNextLevel = state.linesUntilNextLevel, isFinished = state.isFinished, isTiming = state.isTiming, nextTetromino = state.nextTetromino, activeTetromino = state.activeTetromino, score = state.score, combo = state.combo, ghostCells = state.ghostCells;
    var spacesToMove = Object(__WEBPACK_IMPORTED_MODULE_5__helpers_calculateMaxSpacesLeft__["a" /* calculateSpacesLeft */])(activeTetromino, unclearedCells, numRows);
    if (spacesToMove > 0) {
        if (!isAuto) {
            // If tetromino was moved down faster by user interaction, increase the score
            // by 1 for a one tetromino change. Increase score by twice the rows dropped for a hard drop.
            score += (isHardDrop ? spacesToMove * 2 : 1);
        }
        activeTetromino = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_offsetTetromino__["a" /* offsetTetromino */])(activeTetromino, 0, isHardDrop ? spacesToMove : 1, numRows, numCols);
        spacesToMove = isHardDrop ? 0 : spacesToMove;
    }
    if (spacesToMove === 0) {
        // Tetromino has landed. Increase score by number of cells in block.
        score += activeTetromino.cells.length;
        var rows = activeTetromino.cells.map(function (cell) { return cell.row; });
        var minRow = Math.min.apply(Math, rows);
        var maxRow = Math.max.apply(Math, rows);
        if (maxRow < 0) {
            // Tetromino has landed totally above the board. Game is over.
            return __assign({}, state, { isFinished: true, isTiming: false });
        }
        unclearedCells = unclearedCells.concat(activeTetromino.cells);
        // Need to check is rows can be cleared before ending game
        var rowsCleared = 0;
        var _loop_1 = function (row) {
            var unclearedCellsInRow = unclearedCells.filter(function (cell) { return cell.row === row; });
            var isFullRow = unclearedCellsInRow.length === numCols;
            if (isFullRow) {
                // Remove uncleared cells in this row, move above rows down 1
                unclearedCells = unclearedCells
                    .filter(function (cell) { return cell.row !== row; })
                    .map(function (cell) {
                    return cell.row < row ? __assign({}, cell, { row: cell.row + 1 }) : cell;
                });
                rowsCleared += 1;
            }
        };
        // Ascending order is very important in this loop, since lower rows may change each iteration.
        for (var row = Math.max(0, minRow); row <= maxRow; row++) {
            _loop_1(row);
        }
        if (rowsCleared > 0) {
            score += combo * 50;
            combo += 1;
            linesUntilNextLevel -= rowsCleared;
            switch (rowsCleared) {
                case 4:
                    score += 800 * level;
                    break;
                case 3:
                    score += 500 * level;
                    break;
                case 2:
                    score += 300 * level;
                    break;
                default:
                    score += 100 * level;
                    break;
            }
            if (linesUntilNextLevel <= 0) {
                level += 1;
                linesUntilNextLevel = linesPerLevel;
            }
            // Perfect clearing bonus
            if (unclearedCells.length === 0) {
                score += 1200 * level;
            }
        }
        else {
            combo = 0;
        }
        var nextActiveTetromino = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_offsetTetromino__["a" /* offsetTetromino */])(Object(__WEBPACK_IMPORTED_MODULE_1__helpers_centerTetromino__["a" /* centerTetromino */])(nextTetromino, state.numCols), 0, 0, numRows, numCols);
        if (Object(__WEBPACK_IMPORTED_MODULE_4__helpers_isOverlapping__["a" /* isOverlapping */])(nextActiveTetromino, unclearedCells)) {
            // if next block will overlap existing uncleared cells, game is over.
            isFinished = true;
            isTiming = false;
        }
        else {
            activeTetromino = nextActiveTetromino;
            nextTetromino = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_generateRandomTetromino__["a" /* generateRandomTetromino */])();
            spacesToMove = Object(__WEBPACK_IMPORTED_MODULE_5__helpers_calculateMaxSpacesLeft__["a" /* calculateSpacesLeft */])(activeTetromino, unclearedCells, numRows);
            ghostCells = activeTetromino.cells.map(function (cell) { return (__assign({}, cell, { row: cell.row + spacesToMove })); });
        }
    }
    else {
        ghostCells = activeTetromino.cells.map(function (cell) { return (__assign({}, cell, { row: cell.row + spacesToMove - 1 })); });
    }
    return __assign({}, state, { unclearedCells: unclearedCells,
        linesUntilNextLevel: linesUntilNextLevel,
        level: level,
        combo: combo, interval: Object(__WEBPACK_IMPORTED_MODULE_3__helpers_calculateInterval__["a" /* calculateInterval */])(level), partialInterval: 0, timestamp: Date.now(), ghostCells: ghostCells,
        activeTetromino: activeTetromino,
        nextTetromino: nextTetromino,
        isFinished: isFinished,
        isTiming: isTiming,
        score: score });
}
//# sourceMappingURL=moveActiveTetrominoDown.js.map

/***/ }),

/***/ "../../../../../src/app/state/mappers/moveActiveTetrominoLeft.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = moveActiveTetrominoLeftMapper;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_offsetTetromino__ = __webpack_require__("../../../../../src/app/helpers/offsetTetromino.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_calculateMaxSpacesLeft__ = __webpack_require__("../../../../../src/app/helpers/calculateMaxSpacesLeft.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function moveActiveTetrominoLeftMapper(state, action) {
    var activeTetromino = state.activeTetromino, numRows = state.numRows, numCols = state.numCols;
    var ghostCells = state.ghostCells;
    var unclearedCells = state.unclearedCells;
    var spacesToMove = numCols;
    var rows = activeTetromino.cells.map(function (cell) { return cell.row; });
    var minRow = Math.min.apply(Math, rows);
    var maxRow = Math.max.apply(Math, rows);
    var _loop_1 = function (i) {
        var cellsInRow = activeTetromino.cells.filter(function (cell) { return cell.row === i; });
        var columns = cellsInRow.map(function (cell) { return cell.column; });
        var minColumn = Math.min.apply(Math, columns);
        var unclearedCellsInRow = unclearedCells
            .filter(function (cell) { return cell.row === i && cell.column < minColumn; });
        var highestUnclearedCellColumn = unclearedCellsInRow.length > 0 ? Math.max.apply(Math, unclearedCellsInRow.map(function (cell) { return cell.column; })) :
            -1;
        spacesToMove = Math.min(spacesToMove, minColumn - highestUnclearedCellColumn - 1);
        if (spacesToMove === 0) {
            return "break";
        }
    };
    for (var i = minRow; i <= maxRow; i++) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    if (spacesToMove > 0) {
        var updatedTetromino = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_offsetTetromino__["a" /* offsetTetromino */])(activeTetromino, -1, 0, numRows, numCols);
        var spacesToMoveDown_1 = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_calculateMaxSpacesLeft__["a" /* calculateSpacesLeft */])(updatedTetromino, unclearedCells, numRows);
        ghostCells = updatedTetromino.cells.map(function (cell) { return (__assign({}, cell, { row: cell.row + spacesToMoveDown_1 })); });
        return __assign({}, state, { ghostCells: ghostCells, activeTetromino: updatedTetromino });
    }
    else {
        // Can't move tetromino, return existing state
        return state;
    }
}
//# sourceMappingURL=moveActiveTetrominoLeft.js.map

/***/ }),

/***/ "../../../../../src/app/state/mappers/moveActiveTetrominoRight.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = moveActiveTetrominoRightMapper;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_offsetTetromino__ = __webpack_require__("../../../../../src/app/helpers/offsetTetromino.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_calculateMaxSpacesLeft__ = __webpack_require__("../../../../../src/app/helpers/calculateMaxSpacesLeft.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function moveActiveTetrominoRightMapper(state, action) {
    var activeTetromino = state.activeTetromino, numRows = state.numRows, numCols = state.numCols;
    var ghostCells = state.ghostCells;
    var unclearedCells = state.unclearedCells;
    var spacesToMove = numCols;
    var rows = activeTetromino.cells.map(function (cell) { return cell.row; });
    var minRow = Math.min.apply(Math, rows);
    var maxRow = Math.max.apply(Math, rows);
    var _loop_1 = function (i) {
        var cellsInRow = activeTetromino.cells.filter(function (cell) { return cell.row === i; });
        var columns = cellsInRow.map(function (cell) { return cell.column; });
        var maxColumn = Math.max.apply(Math, columns);
        var unclearedCellsInRow = unclearedCells
            .filter(function (cell) { return cell.row === i && cell.column > maxColumn; });
        var lowestUnclearedCellColumn = unclearedCellsInRow.length > 0 ? Math.min.apply(Math, unclearedCellsInRow.map(function (cell) { return cell.column; })) :
            numCols;
        spacesToMove = Math.min(spacesToMove, lowestUnclearedCellColumn - maxColumn - 1);
        if (spacesToMove === 0) {
            return "break";
        }
    };
    for (var i = minRow; i <= maxRow; i++) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    if (spacesToMove > 0) {
        var updatedTetromino = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_offsetTetromino__["a" /* offsetTetromino */])(activeTetromino, 1, 0, numRows, numCols);
        var spacesToMoveDown_1 = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_calculateMaxSpacesLeft__["a" /* calculateSpacesLeft */])(updatedTetromino, unclearedCells, numRows);
        ghostCells = updatedTetromino.cells.map(function (cell) { return (__assign({}, cell, { row: cell.row + spacesToMoveDown_1 })); });
        return __assign({}, state, { ghostCells: ghostCells, activeTetromino: updatedTetromino });
    }
    else {
        // Can't move tetromino, return existing state
        return state;
    }
}
//# sourceMappingURL=moveActiveTetrominoRight.js.map

/***/ }),

/***/ "../../../../../src/app/state/mappers/newGame.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = newGameMapper;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_calculateInterval__ = __webpack_require__("../../../../../src/app/helpers/calculateInterval.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_centerTetromino__ = __webpack_require__("../../../../../src/app/helpers/centerTetromino.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_generateRandomTetromino__ = __webpack_require__("../../../../../src/app/helpers/generateRandomTetromino.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



function newGameMapper(state, action) {
    var activeTetromino = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_centerTetromino__["a" /* centerTetromino */])(state.nextTetromino, state.numCols);
    return __assign({}, state, { isStarted: true, isTiming: true, partialInterval: 0, timestamp: Date.now(), interval: Object(__WEBPACK_IMPORTED_MODULE_0__helpers_calculateInterval__["a" /* calculateInterval */])(1), isFinished: false, level: 1, linesUntilNextLevel: state.linesPerLevel, score: 0, unclearedCells: [], activeTetromino: activeTetromino, ghostCells: activeTetromino.cells.map(function (cell) { return (__assign({}, cell, { row: cell.row + state.numRows })); }), nextTetromino: Object(__WEBPACK_IMPORTED_MODULE_2__helpers_generateRandomTetromino__["a" /* generateRandomTetromino */])() });
}
//# sourceMappingURL=newGame.js.map

/***/ }),

/***/ "../../../../../src/app/state/mappers/rotateActiveTetromino.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rotateActiveTetrominoMapper;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__ = __webpack_require__("../../../../../src/app/enums/tetromino.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_orientation_enum__ = __webpack_require__("../../../../../src/app/enums/orientation.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_unique__ = __webpack_require__("../../../../../src/app/helpers/unique.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_calculateMaxSpacesLeft__ = __webpack_require__("../../../../../src/app/helpers/calculateMaxSpacesLeft.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




function rotateActiveTetrominoMapper(state, action) {
    var activeTetromino = state.activeTetromino;
    var unclearedCells = state.unclearedCells, numCols = state.numCols, numRows = state.numRows;
    var unrotatedCells = activeTetromino.unrotatedCells, type = activeTetromino.type, orientation = activeTetromino.orientation;
    var cells = activeTetromino.cells;
    var newOrientation;
    var angle;
    // Determine the angle to rotate by and the new orientation
    switch (orientation) {
        case __WEBPACK_IMPORTED_MODULE_1__enums_orientation_enum__["a" /* Orientation */].Normal:
            newOrientation = __WEBPACK_IMPORTED_MODULE_1__enums_orientation_enum__["a" /* Orientation */].FlippedLeft;
            angle = -0.5 * Math.PI;
            break;
        case __WEBPACK_IMPORTED_MODULE_1__enums_orientation_enum__["a" /* Orientation */].FlippedLeft:
            newOrientation = __WEBPACK_IMPORTED_MODULE_1__enums_orientation_enum__["a" /* Orientation */].UpsideDown;
            angle = -1 * Math.PI;
            break;
        case __WEBPACK_IMPORTED_MODULE_1__enums_orientation_enum__["a" /* Orientation */].UpsideDown:
            newOrientation = __WEBPACK_IMPORTED_MODULE_1__enums_orientation_enum__["a" /* Orientation */].FlippedRight;
            angle = -1.5 * Math.PI;
            break;
        case __WEBPACK_IMPORTED_MODULE_1__enums_orientation_enum__["a" /* Orientation */].FlippedRight:
            newOrientation = __WEBPACK_IMPORTED_MODULE_1__enums_orientation_enum__["a" /* Orientation */].Normal;
            angle = -2 * Math.PI;
            break;
        default:
            newOrientation = orientation;
            angle = 0;
            break;
    }
    // Do not perform rotation for square - unnecessary.
    if (type === __WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__["a" /* TetrominoType */].O) {
        return __assign({}, state, { activeTetromino: __assign({}, activeTetromino, { orientation: newOrientation }) });
    }
    var centroid = getCentroid(unrotatedCells, type);
    // Now do the rotation
    // If tetromino is touching the bottom of the board,
    // the rotated tetromino will be forced to also be touching the bottom
    // of the board.
    var maxRow = Math.max.apply(Math, cells.map(function (cell) { return cell.row; }));
    var forceToBottom = maxRow === numRows - 1;
    cells = rotate(unrotatedCells, angle, centroid);
    if (forceToBottom) {
        var formerMaxRow = maxRow;
        maxRow = Math.max.apply(Math, cells.map(function (cell) { return cell.row; }));
        var rowOffset_1 = formerMaxRow - maxRow;
        if (rowOffset_1 > 0) {
            cells = cells.map(function (cell) { return (__assign({}, cell, { row: cell.row + rowOffset_1 })); });
        }
    }
    // make sure rotated tetromino not outside bounds
    var cols = cells.map(function (cell) { return cell.column; });
    var minCol = Math.min.apply(Math, cols);
    var maxCol = Math.max.apply(Math, cols);
    var offset = 0;
    if (minCol < 0) {
        // move tetromino to the right
        offset = -minCol;
    }
    else if (maxCol >= numCols) {
        // move tetromino to the left
        offset = numCols - maxCol - 1;
    }
    if (offset !== 0) {
        cells = cells.map(function (cell) { return (__assign({}, cell, { column: cell.column + offset })); });
    }
    // check if the rotation is allowed!
    // first check if the rotation works horizontally
    var rows = cells.map(function (cell) { return cell.row; });
    var minRow = Math.min.apply(Math, rows);
    maxRow = Math.max.apply(Math, rows);
    var rowSpan = maxRow - minRow + 1;
    var isConflict = false;
    var _loop_1 = function (row) {
        var colsInRow = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_unique__["a" /* unique */])(cells.filter(function (cell) { return cell.row === row; })
            .map(function (cell) { return cell.column; }));
        var unclearedColumnsInRow = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_unique__["a" /* unique */])(unclearedCells.filter(function (cell) { return cell.row === row; })
            .map(function (cell) { return cell.column; }));
        var combined = colsInRow.concat(unclearedColumnsInRow);
        if (Object(__WEBPACK_IMPORTED_MODULE_2__helpers_unique__["a" /* unique */])(combined).length < combined.length) {
            isConflict = true;
            return "break";
        }
    };
    for (var row = minRow; row <= maxRow; row++) {
        var state_1 = _loop_1(row);
        if (state_1 === "break")
            break;
    }
    // Now check rotation works vertically. Allow tetrominos to be offset upwards so that they fit.
    // Maximum offset is total row span of the tetromino.
    var rowOffset;
    if (!isConflict) {
        for (rowOffset = 0; rowOffset < rowSpan; rowOffset++) {
            var _loop_2 = function (col) {
                var rowsInCol = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_unique__["a" /* unique */])(cells.filter(function (cell) { return cell.column === col; })
                    .map(function (cell) { return cell.row - rowOffset; }));
                var unclearedRowsInColumn = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_unique__["a" /* unique */])(unclearedCells.filter(function (cell) { return cell.column === col; })
                    .map(function (cell) { return cell.row; }));
                var combined = rowsInCol.concat(unclearedRowsInColumn);
                if (unclearedRowsInColumn.length > 0 && (Math.max.apply(Math, rowsInCol) >= numRows || Object(__WEBPACK_IMPORTED_MODULE_2__helpers_unique__["a" /* unique */])(combined).length < combined.length)) {
                    isConflict = true;
                    return "break";
                }
                else {
                    isConflict = false;
                }
            };
            for (var col = minCol; col <= maxCol; col++) {
                var state_2 = _loop_2(col);
                if (state_2 === "break")
                    break;
            }
            if (!isConflict) {
                if (rowOffset > 0) {
                    cells = cells.map(function (cell) { return (__assign({}, cell, { row: cell.row - rowOffset })); });
                }
                break;
            }
        }
    }
    if (isConflict) {
        // Do not update state with rotated tetromino if it cannot fit.
        return state;
    }
    activeTetromino = {
        orientation: newOrientation,
        type: type,
        unrotatedCells: unrotatedCells,
        cells: cells
    };
    var spacesToMove = Object(__WEBPACK_IMPORTED_MODULE_3__helpers_calculateMaxSpacesLeft__["a" /* calculateSpacesLeft */])(activeTetromino, unclearedCells, numRows);
    var ghostCells = activeTetromino.cells.map(function (cell) { return (__assign({}, cell, { row: cell.row + spacesToMove })); });
    return __assign({}, state, { activeTetromino: activeTetromino,
        ghostCells: ghostCells });
}
function rotate(cells, angle, centroid) {
    var cosAngle = Math.cos(angle);
    var sinAngle = Math.sin(angle);
    return cells.map(function (cell) {
        var translatedRow = cell.row - centroid[0];
        var translatedCol = cell.column - centroid[1];
        // use a rounding trick to avoid tiny rounding errors causing incorrect positions
        var row = Math.ceil(0.5 * Math.round(2 * (centroid[0] + cosAngle * translatedRow - sinAngle * translatedCol)));
        var column = Math.floor(0.5 * Math.round(2 * (centroid[1] + sinAngle * translatedRow + cosAngle * translatedCol)));
        return { type: cell.type, row: row, column: column };
    });
}
function getCentroid(cells, tetrominoType) {
    switch (tetrominoType) {
        case __WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__["a" /* TetrominoType */].I:
        case __WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__["a" /* TetrominoType */].Z:
            return [cells[1].row + 0.5, cells[1].column];
        case __WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__["a" /* TetrominoType */].S:
            return [cells[1].row - 0.5, cells[1].column];
        case __WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__["a" /* TetrominoType */].T:
        case __WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__["a" /* TetrominoType */].L:
        case __WEBPACK_IMPORTED_MODULE_0__enums_tetromino_enum__["a" /* TetrominoType */].J:
        default:
            return [cells[1].row, cells[1].column];
    }
}
//# sourceMappingURL=rotateActiveTetromino.js.map

/***/ }),

/***/ "../../../../../src/app/state/mappers/togglePause.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = togglePauseMapper;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function togglePauseMapper(state, action) {
    if (state.isTiming) {
        // Now pausing
        return __assign({}, state, { partialInterval: (state.partialInterval || state.interval) - (Date.now() - state.timestamp), isTiming: false });
    }
    else {
        // Now resuming
        return __assign({}, state, { isTiming: true, timestamp: Date.now() });
    }
}
//# sourceMappingURL=togglePause.js.map

/***/ }),

/***/ "../../../../../src/app/state/reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = tetrisReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/state/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_generateRandomTetromino__ = __webpack_require__("../../../../../src/app/helpers/generateRandomTetromino.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mappers_moveActiveTetrominoDown__ = __webpack_require__("../../../../../src/app/state/mappers/moveActiveTetrominoDown.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mappers_moveActiveTetrominoLeft__ = __webpack_require__("../../../../../src/app/state/mappers/moveActiveTetrominoLeft.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mappers_moveActiveTetrominoRight__ = __webpack_require__("../../../../../src/app/state/mappers/moveActiveTetrominoRight.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mappers_rotateActiveTetromino__ = __webpack_require__("../../../../../src/app/state/mappers/rotateActiveTetromino.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mappers_newGame__ = __webpack_require__("../../../../../src/app/state/mappers/newGame.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mappers_togglePause__ = __webpack_require__("../../../../../src/app/state/mappers/togglePause.ts");








var INITIAL_STATE = {
    numRows: 20,
    numCols: 10,
    cellSize: 36,
    level: 1,
    linesPerLevel: 10,
    linesUntilNextLevel: 10,
    activeTetromino: null,
    nextTetromino: Object(__WEBPACK_IMPORTED_MODULE_1__helpers_generateRandomTetromino__["a" /* generateRandomTetromino */])(),
    score: 0,
    combo: 0,
    unclearedCells: [],
    ghostCells: [],
    isStarted: false,
    isFinished: false,
    isTiming: false,
    timestamp: 0,
    interval: 0,
    partialInterval: 0
};
function tetrisReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* NEW_GAME */]:
            return Object(__WEBPACK_IMPORTED_MODULE_6__mappers_newGame__["a" /* newGameMapper */])(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__actions__["g" /* TOGGLE_PAUSE */]:
            return Object(__WEBPACK_IMPORTED_MODULE_7__mappers_togglePause__["a" /* togglePauseMapper */])(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__actions__["f" /* SOFT_DROP */]:
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* HARD_DROP */]:
            return Object(__WEBPACK_IMPORTED_MODULE_2__mappers_moveActiveTetrominoDown__["a" /* moveActiveTetrominoDownMapper */])(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* MOVE_ACTIVE_TETROMINO_LEFT */]:
            return Object(__WEBPACK_IMPORTED_MODULE_3__mappers_moveActiveTetrominoLeft__["a" /* moveActiveTetrominoLeftMapper */])(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* MOVE_ACTIVE_TETROMINO_RIGHT */]:
            return Object(__WEBPACK_IMPORTED_MODULE_4__mappers_moveActiveTetrominoRight__["a" /* moveActiveTetrominoRightMapper */])(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__actions__["e" /* ROTATE_ACTIVE_TETROMINO */]:
            return Object(__WEBPACK_IMPORTED_MODULE_5__mappers_rotateActiveTetromino__["a" /* rotateActiveTetrominoMapper */])(state, action);
        default:
            return state;
    }
}
//# sourceMappingURL=reducer.js.map

/***/ }),

/***/ "../../../../../src/app/state/state.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=state.interface.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map