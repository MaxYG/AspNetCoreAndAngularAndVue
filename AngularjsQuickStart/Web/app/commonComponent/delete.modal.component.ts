import {Component, ViewChild, Output, EventEmitter, Input} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

@Component(
    {
        moduleId: module.id,
        selector: 'delete-modal',
        templateUrl: 'delete.modal.component.html'
    }
)
export class DeleteModalComponent {
    // @Input() Id:number;
    @Output() onDelete = new EventEmitter<any>()
    @ViewChild('deleteModal') private deleteModal: ModalDirective

    public show() {
        this.deleteModal.show();
    }

    public hide(){
        this.deleteModal.hide();
    }

    private commonDelete() {
        this.onDelete.emit();
    }
}