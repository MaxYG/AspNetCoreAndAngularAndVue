"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var UserInputComponent = (function () {
    function UserInputComponent() {
        this.values = '';
        // onkey(event:KeyboardEvent){
        //     this.values+=(<HTMLInputElement>event.target).value+"   |   ";
        // }
        this.valuesxx = '';
        this.Entervalue = '';
        this.blurvalue = '';
    }
    UserInputComponent.prototype.onkey = function (event) {
        //this.values+=event.target.value+'  |  ';
        this.values += event.key + '  |  ';
    };
    UserInputComponent.prototype.onkeyxx = function (value) {
        //this.values+=event.target.value+'  |  ';
        this.valuesxx += value + '  |  ';
    };
    UserInputComponent.prototype.onEnter = function (value) {
        //this.values+=event.target.value+'  |  ';
        this.Entervalue += value + '  |  ';
    };
    UserInputComponent.prototype.update = function (value) {
        //this.values+=event.target.value+'  |  ';
        this.blurvalue += value + '  |  ';
    };
    UserInputComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-input',
            templateUrl: 'user-input.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], UserInputComponent);
    return UserInputComponent;
}());
exports.UserInputComponent = UserInputComponent;
//# sourceMappingURL=user-input.component.js.map