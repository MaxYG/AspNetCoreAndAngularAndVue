import { Component } from '@angular/core';
import {User} from '../models/user'
import { UserService, AlertService } from '../services';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'user-add-modal',
    templateUrl: './user-add.component.html',
})

export class UserAddModalComponent {
    currentUser:User={} as User;
    constructor(private userService:UserService,       
        public dialogRef: MatDialogRef<UserAddModalComponent>){            
    }
    add(){
        var subxx=this.userService.add(this.currentUser);
        subxx.subscribe({
            next: x => {
               this.dialogRef.close();
            }
        });
        
    }
}
