import { Component, OnInit } from '@angular/core';
import {AuthService} from './../Auth/auth.service';
import { Router } from "@angular/router";
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup:FormGroup;
  constructor(private authSev : AuthService, 
              private router : Router, 
              private _formBuilder:FormBuilder) {}

  ngOnInit(): void {
    this.loginFormGroup=this._formBuilder.group({
      user:['', Validators.required],
      password:['', Validators.required]
    })
  }
  
  login(){
    const data = this.loginFormGroup.value;
    if (data.user && data.password) {
      console.log(data.user + "---" + data.password)
    }

  }

  async loginGoogle(){
    this.authSev.loginGoogle().then((res)=>{
      this.router.navigate(['/Dashboard'])
    }).catch((err)=>{console.log(err)})
  }
}
