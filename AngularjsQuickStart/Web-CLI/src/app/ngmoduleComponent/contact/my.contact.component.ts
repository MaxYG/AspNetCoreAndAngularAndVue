
import {Component, OnInit, Injectable} from "@angular/core";
import {Contact,ContactService} from "./my.contact.service";
import {UserService} from "../core/user.service";

@Injectable()
@Component({
  selector:"my-contact",
  templateUrl:"my.contact.component.html",
  styleUrls:["my.contact.component.css"]
})

export class MyContactComponent implements OnInit{
  contact:Contact={id:0} as Contact;
  contacts:Contact[];
  msg="loading contacts ...";
  userName="";
  constructor(private contactService:ContactService, userService:UserService){
    this.userName=userService.userName;
  };
  ngOnInit(): void {
    this.contactService.getContacts().then(contacts=>{
      this.msg="";
      this.contacts=contacts;
      this.contact=contacts[0];
    });
  }

  next(){
    let ix=1+this.contacts.indexOf(this.contact);
    if(ix>=this.contacts.length){
      ix=0;
    }
    this.contact=this.contacts[ix];
  }

  onSubmit(){
    this.displayMessage("Saved"+this.contact.name);
  }

  newContact(){
    this.displayMessage("New contact");
    this.contact={id:42, name:""};
    this.contacts.push(this.contact);
  }

  displayMessage(msg:string){
    this.msg=msg;
    setTimeout(()=>this.msg="",3000);
  }

}
