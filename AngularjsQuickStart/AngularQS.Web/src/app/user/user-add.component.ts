import { Component } from '@angular/core';
import {User} from '../models/user'
import { UserService, AlertService, WebConstantService } from '../services';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
    selector: 'user-add-modal',
    templateUrl: './user-add.component.html',
})

export class UserAddModalComponent {
    currentUser:User={} as User;
    uploadUrl:string;

    uploader:FileUploader;
    hasBaseDropZoneOver:boolean;
    hasAnotherDropZoneOver:boolean;
    response:string;
    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
    }

    constructor(private userService:UserService,  
        private alertService:AlertService,     
        private translateService:TranslateService,
        private webConstantService:WebConstantService,
        public dialogRef: MatDialogRef<UserAddModalComponent>){      
            this.uploadUrl=this.webConstantService.rootUrl+"api/upload/upload-file";
           
            this.uploader = new FileUploader({
                url: this.uploadUrl,
                headers:[{name:"Access-Control-Allow-Origin",value:"*"},
                {name:"Content-Type",value:"multipart/form-data"}],                
                disableMultipart: true,
                formatDataFunctionIsAsync: true,
                formatDataFunction: async (item) => {
                  return new Promise( (resolve, reject) => {
                    resolve({
                      name: item._file.name,
                      length: item._file.size,
                      contentType: item._file.type,
                      date: new Date()
                    });
                  });
                }
              });

            this.uploader.onBeforeUploadItem = (item) => {
                item.withCredentials = false;
            }

                this.hasBaseDropZoneOver = false;
                this.hasAnotherDropZoneOver = false;

                this.response = '';

                this.uploader.response.subscribe( res => this.response = res );
    }
    upload(){
        this.uploader.uploadAll();
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
