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
import { TranslateService, LangChangeEvent, TranslationChangeEvent, DefaultLangChangeEvent } from '@ngx-translate/core';

@Component( {
    selector: 'app-user',
    templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
    currentUser: User={} as User;
    users: User[];
    tableTitle:string;
    ngOnInit() {
       this.loadAllUsers();        
    }
    constructor(private userService:UserService,
        private translateService:TranslateService,
        public dialog: MatDialog) {  
            this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
               this.tableTitle=event.translations.home["userTitle"];
                console.log("onLangChange:"+event);
              });

            this.translateService.onTranslationChange.subscribe((event: TranslationChangeEvent) => {
                console.log("onTranslationChange:"+event);
              });
            this.translateService.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {
                console.log("onDefaultLangChange:"+event);
              });
            // this.translateService.getTranslation("en").subscribe((res) => {
            //     console.log("getTranslation:"+res);
            //   });
            this.translateService.stream("home.userTitle").subscribe((res) => {
                console.log("stream:"+res);
            });
            this.translateService.reloadLang("en").subscribe((res) => {
                console.log("reloadLang:"+res);
            });
            //not work
            //   let objectxxx={
            //     "home": {
            //         "testxxx": "testxxx"                   
            //       }
            //   }
            //   this.translateService.setTranslation("en",objectxxx,true)
            //   this.translateService.getTranslation("en").subscribe((res) => {
            //     console.log("setTranslation:"+res);
            //   });
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