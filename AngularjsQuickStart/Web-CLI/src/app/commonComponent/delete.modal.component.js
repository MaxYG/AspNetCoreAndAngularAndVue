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
var ng2_bootstrap_1 = require("ng2-bootstrap");
var DeleteModalComponent = (function () {
    function DeleteModalComponent(elementRef) {
        this.onDelete = new core_1.EventEmitter();
        this.content = elementRef.nativeElement.getAttribute("bodyContent");
    }
    DeleteModalComponent.prototype.show = function () {
        this.deleteModal.show();
    };
    DeleteModalComponent.prototype.hide = function () {
        this.deleteModal.hide();
    };
    DeleteModalComponent.prototype.commonDelete = function () {
        this.onDelete.emit();
    };
    return DeleteModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DeleteModalComponent.prototype, "contentInput", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DeleteModalComponent.prototype, "onDelete", void 0);
__decorate([
    core_1.ViewChild('deleteModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], DeleteModalComponent.prototype, "deleteModal", void 0);
DeleteModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'delete-modal',
        templateUrl: 'delete.modal.component.html'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], DeleteModalComponent);
exports.DeleteModalComponent = DeleteModalComponent;
//# sourceMappingURL=delete.modal.component.js.map