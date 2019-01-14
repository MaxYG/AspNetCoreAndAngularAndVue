import { Component, Inject } from '@angular/core';
import {User} from '../models/user'
import { UserService } from '../services';
import { MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material'

@Component({
    selector: 'user-delete-modal',
    templateUrl: './user-delete.component.html',
})

export class UserDeleteComponent {
    currentUser:User={} as User;
    constructor(private userService:UserService,       
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<UserDeleteComponent>){
            this.currentUser=data;            
    }
    deleteUser(){
        var subxx=this.userService.delete(this.currentUser.id)
        subxx.subscribe({
            next: x => {
               this.dialogRef.close();
            }
        });
        
    }
}
