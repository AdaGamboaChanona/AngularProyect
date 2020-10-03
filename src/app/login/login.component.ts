import { Component, OnInit } from '@angular/core';
import {AuthService} from './../Auth/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSev : AuthService, private router : Router) {}

  ngOnInit(): void {
  }
  
  loginClicked(){

  }

  async loginGoogle(){
    this.authSev.loginGoogle().then((res)=>{
      this.router.navigate(['/Dashboard'])
    }).catch((err)=>{console.log(err)})
  }
}
