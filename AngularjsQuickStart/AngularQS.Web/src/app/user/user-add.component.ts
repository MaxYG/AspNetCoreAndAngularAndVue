import { Component } from '@angular/core';
import {User} from '../models/user'
import { UserService, AlertService, WebConstantService } from '../services';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { FileUploader } from 'ng2-file-upload';

import {HttpClient, HttpEventType} from '@angular/common/http'

@Component({
    selector: 'user-add-modal',
    templateUrl: './user-add.component.html',
})

export class UserAddModalComponent {
    currentUser:User={} as User;
    uploadUrl:string;
    imageUrl:string;
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
        private http:HttpClient,
        public dialogRef: MatDialogRef<UserAddModalComponent>){      
            this.uploadUrl=this.webConstantService.rootUrl+"api/upload/file";
           
            //don't set this { name: 'Content-Type', value: 'multipart/form-data' }
            //to headers
            this.uploader = new FileUploader({
                url: this.uploadUrl,
                headers:[
                    {name:"Access-Control-Allow-Origin",value:"*"}
                ],                            
                // disableMultipart: true,
                // formatDataFunctionIsAsync: true,
                // formatDataFunction: async (item) => {
                //   return new Promise( (resolve, reject) => {
                //     resolve({
                //         name: item._file.name,
                //       length: item._file.size,
                //       contentType: item._file.type,
                //       date: new Date()
                //     });
                //     // resolve({
                //     //     ContentType: "",
                //     //     ContentDisposition: "",
                //     //     Length: 222,
                //     //     FileName: "FileName",
                //     //     Name: "Name"
                //     // });
                //   });
                // }
              });

            this.uploader.onBeforeUploadItem = (item) => {
                item.withCredentials = false;
            }

            this.hasBaseDropZoneOver = false;
            this.hasAnotherDropZoneOver = false;

            this.response = '';

            this.uploader.response.subscribe( res => {
                this.imageUrl=res;
            } );
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




    // uploadFile = (files) => {
    //     if (files.length === 0) {
    //       return;
    //     }
     
    //     let fileToUpload = <File>files[0];
    //     const formData = new FormData();
    //     formData.append('file', fileToUpload, fileToUpload.name);
     
    //     this.http.post(this.uploadUrl, formData, {reportProgress: true, observe: 'events'})
    //       .subscribe(event => {
    //         if (event.type === HttpEventType.UploadProgress){
    //           //this.progress = Math.round(100 * event.loaded / event.total);
    //         }else if (event.type === HttpEventType.Response) {
    //           //this.message = 'Upload success.';
    //           //this.onUploadFinished.emit(event.body);
    //         }
    //       });
    //   }
}
