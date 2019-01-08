import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services';
import {User} from '../models'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;                    
  private formSubmitAttempt: boolean; 

  constructor(
    private formBuilder: FormBuilder,         
    private authService: AuthService 
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({     
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) { 
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      var user=this.form.value as User;
      this.authService.login(user); 
    }
    this.formSubmitAttempt = true;             
  }
}