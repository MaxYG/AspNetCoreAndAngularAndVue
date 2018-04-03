import {Component, ViewChild, Output, EventEmitter, Input,ElementRef} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

@Component(
    {
        selector: 'delete-modal',
        templateUrl: 'delete.modal.component.html'
    }
)
export class DeleteModalComponent {
    @Input() contentInput:string;
    @Output() onDelete = new EventEmitter<any>()
    @ViewChild('deleteModal') private deleteModal: ModalDirective
    content:string;

    constructor(elementRef: ElementRef) {
       this.content= elementRef.nativeElement.getAttribute("bodyContent")
    }

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





















