import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../Auth/auth-service.service'
import { Router } from "@angular/router";
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup:FormGroup;
  constructor(private authSev : AuthServiceService, 
              private router : Router, 
              private _formBuilder:FormBuilder) {
                
                if(authSev.isAuthenticated()){
                  router.navigate(['Dashboard']);
                }
              }

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
      this.authSev.login(data.user,data.password).subscribe(access => {
        localStorage.setItem('user', JSON.stringify(access));
        console.log('datos validos')
        this.router.navigate(['Dashboard']);
      }, error =>{
        console.log('datos invalidos')
      }
      
      );
    }

  }

  async loginGoogle(){
    this.authSev.loginGoogle().then((res)=>{
      this.router.navigate(['/Dashboard'])
    }).catch((err)=>{console.log(err)})
  }
}
