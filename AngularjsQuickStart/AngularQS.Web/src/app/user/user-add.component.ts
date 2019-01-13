import { Component } from '@angular/core';
import {User} from '../models/user'
import { UserService } from '../services';

@Component({
    selector: 'user-add-modal',
    templateUrl: './user-add.component.html',
})

export class UserAddModalComponent {
    currentUser:User={} as User;

    constructor(private userService:UserService){

    }
    add(){
        var subxx=this.userService.register(this.currentUser);
        subxx.subscribe(x=>{
            console.log(x);
        });
    }
}
