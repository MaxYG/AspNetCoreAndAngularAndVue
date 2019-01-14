import { Component, Inject } from '@angular/core';
import {User} from '../models/user'
import { UserService, AlertService } from '../services';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'user-update-modal',
    templateUrl: './user-update.component.html',
})

export class UserUpdateModalComponent {
    currentUser:User={} as User;
    constructor(private userService:UserService,
        @Inject(MAT_DIALOG_DATA) public data: any,       
        public dialogRef: MatDialogRef<UserUpdateModalComponent>){ 
            this.currentUser=data;
    }
    update(){
        var subxx=this.userService.update(this.currentUser);
        subxx.subscribe({
            next: x => {
               this.dialogRef.close();
            }
        });
        
    }
}
