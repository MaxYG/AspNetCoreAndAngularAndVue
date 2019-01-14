import {Component, OnInit,ViewEncapsulation, Input } from '@angular/core'
import {User} from '../models/user'
import { UserService } from '../services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule } from '@angular/forms'
import {MatButtonModule} from '@angular/material/button';
import {MatDialog} from '@angular/material';
import {UserAddModalComponent} from './user-add.component'
import {UserDeleteComponent} from  './user-delete.component'
import {UserUpdateModalComponent} from './user-update.component'

@Component( {
    selector: 'app-user',
    templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
    currentUser: User={} as User;
    users: User[];

    ngOnInit() {
       this.loadAllUsers();
    }
    constructor(private userService:UserService,
        public dialog: MatDialog) {        
    }

    deleteUser(user: User) {
        const dialogRef = this.dialog.open(UserDeleteComponent,{
            data: user,
        });
    
        dialogRef.afterClosed().subscribe(result => {
            this.loadAllUsers();          
        });
    }
    updateUser(user: User) {
        const dialogRef = this.dialog.open(UserUpdateModalComponent,{
            data: user,
        });
    
        dialogRef.afterClosed().subscribe(result => {
            this.loadAllUsers();          
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(UserAddModalComponent);
    
        dialogRef.afterClosed().subscribe(result => {
            this.loadAllUsers();         
        });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(x=>this.users= x);
    }
}