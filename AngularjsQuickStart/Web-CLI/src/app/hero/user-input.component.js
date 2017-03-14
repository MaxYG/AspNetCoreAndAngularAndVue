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
var core_1 = require("@angular/core");
var mock_heroes_1 = require("./mock-heroes");
var UserInputComponent = (function () {
    function UserInputComponent() {
        this.values = '';
        //  onkey(event:KeyboardEvent){
        //      this.values+=(<HTMLInputElement>event.target).value+"   |   ";
        //  }
        this.valuesxx = '';
        this.Entervalue = '';
        this.blurvalue = '';
        this.isShowClass = false;
        this.colorSet = 'color-green';
        this.isSpecial = true;
        this.canSave = false;
        this.hero = {
            Id: 2,
            Name: ""
        };
        this.heroes = mock_heroes_1.HEROES;
        this.deleteHeroRequest = new core_1.EventEmitter();
        this.size = 1;
        this.sizeChange = new core_1.EventEmitter();
        this.isUnchanged = false;
        this.toeChoice = "Eenie";
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
    UserInputComponent.prototype.onClickTest = function () {
        alert("click event");
    };
    UserInputComponent.prototype.deleteHero = function (hero) {
        alert(hero.Id);
        alert(this.hero.Id);
        this.deleteHeroRequest.emit(this.hero);
    };
    UserInputComponent.prototype.resize = function (delta) {
        this.size = Math.min(40, Math.max(8, +this.size + delta));
        this.sizeChange.emit(this.size);
    };
    UserInputComponent.prototype.dec = function () {
        this.resize(-1);
    };
    UserInputComponent.prototype.inc = function () {
        this.resize(+1);
    };
    UserInputComponent.prototype.setUpperCaseName = function (Name) {
        this.hero.Name = Name.toUpperCase();
    };
    UserInputComponent.prototype.setClasses = function () {
        var classes = {
            saveable: this.canSave,
            colorGreen: !this.isUnchanged,
            fontSizeTest: this.isSpecial,
        };
        return classes;
    };
    UserInputComponent.prototype.setStyles = function () {
        var styles = {
            'font-style': this.canSave ? 'italic' : 'normal',
            'font-weight': !this.isUnchanged ? 'bold' : 'normal',
            'font-size': this.isSpecial ? '24px' : '8px',
        };
        return styles;
    };
    UserInputComponent.prototype.trackByHeroes = function (index, hero) {
        return hero.Id;
    };
    UserInputComponent.prototype.callPhone = function (phone) {
        alert(phone);
    };
    UserInputComponent.prototype.callFax = function (fax) {
        alert(fax);
    };
    return UserInputComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], UserInputComponent.prototype, "size", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UserInputComponent.prototype, "sizeChange", void 0);
UserInputComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user-input',
        styleUrls: ['user-input.component.css'],
        templateUrl: 'user-input.component.html'
    }),
    __metadata("design:paramtypes", [])
], UserInputComponent);
exports.UserInputComponent = UserInputComponent;
//# sourceMappingURL=user-input.component.js.map