import {Component, OnInit,ViewEncapsulation, Input } from '@angular/core'
import {User} from '../models/user'
import { UserService } from '../services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule } from '@angular/forms'
import {MatButtonModule} from '@angular/material/button';
import {MatDialog} from '@angular/material';
import {UserAddModalComponent} from './user-add.component'


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

    deleteUser(id: number) {
        
    }

    openDialog() {
        const dialogRef = this.dialog.open(UserAddModalComponent);
    
        dialogRef.afterClosed().subscribe(result => {
            this.loadAllUsers();
          console.log(`Dialog result: ${result}`);
        });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(x=>this.users= x);
    }
}