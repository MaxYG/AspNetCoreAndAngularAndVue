import { Component } from '@angular/core';
import {User} from '../models/user'
import { UserService, AlertService } from '../services';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'user-add-modal',
    templateUrl: './user-add.component.html',
})

export class UserAddModalComponent {
    currentUser:User={} as User;
    constructor(private userService:UserService,  
        private alertService:AlertService,     
        private translateService:TranslateService,
        public dialogRef: MatDialogRef<UserAddModalComponent>){            
    }
    add(){
        // this.translateService.get("home.Demo").subscribe(x=>{
        //     this.alertService.success(x);
        // });
        var subxx=this.userService.add(this.currentUser);
        subxx.subscribe({
            next: x => {
               this.dialogRef.close();
            }
        });        
    }
}
