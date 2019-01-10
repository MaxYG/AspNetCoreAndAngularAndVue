import {Component, OnInit} from '@angular/core'
import {User} from '../models/user'
import { UserService } from '../services';

@Component( {selector: 'app-user',
templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
    currentUser: User;
    users: User[];

    ngOnInit() {
       this.loadAllUsers();
    }
    constructor(private userService:UserService) {        
    }

    deleteUser(id: number) {
        
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(x=>this.users= x);
    }
}