import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../Auth/auth-service.service';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'edad', 'correo', 'editar', 'eliminar'];
  formRegister : FormGroup;
  products = [];
  nombreCompleto: string;
  edad: Number;
  correo: string;
  update:boolean;
  id:string;
  constructor(private serviceService: AuthServiceService, private _formBuilder:FormBuilder, private _router:Router) { 
    if (serviceService.isAuthenticated()==false) {
      _router.navigate(["/"])
      
    }
  }

  ngOnInit(): void {
    this.serviceService.getRegistro().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
      this.update=false;
    })

    this.formRegister = this._formBuilder.group({
      nombreCompleto: ['',Validators.required],
      edad: ['',Validators.required],
      correo: ['',Validators.required]
    })
    
  }
  deleteRegistro(id:string):void{
    console.log(id)
    this.serviceService.deleteRegistro(id).subscribe(access=>{
      console.log("Todo bien")
      window.location.reload();
    },error=>{
      console.log("Datos inválidos")
    })
    
  }

  addRegistro():void{
    const data = this.formRegister.value;
      if(data.nombreCompleto && data.edad && data.correo && this.update==true){
        this.serviceService.updateRegistro(this.id,data.nombreCompleto,data.edad,data.correo).subscribe(access=>{
          window.location.reload();
          this.update=false;
          console.log("cualquier cosa")
        },error=>{
          console.log("Datos inválidos")
        })
      }  
    
    
      if(data.nombreCompleto && data.edad && data.correo && this.update==false){
        this.serviceService.addRegistro(data.nombreCompleto,data.edad,data.correo).subscribe(access=>{
          window.location.reload();
          console.log("otra cosa")
        },error=>{
          console.log("Datos inválidos")
        })
      
    }
  }

  updateButoom(id:string):void{
    this.serviceService.getOneUser(id).subscribe((data:JSON)=>{
      let registro = data;
      this.update = true;
      this.id = registro['id']
      this.nombreCompleto = registro['nombreCompleto']
      this.edad= registro['edad']
      this.correo = registro['correo']
      this.formRegister = this._formBuilder.group({
        nombreCompleto: [this.nombreCompleto],
        edad: [this.edad],
        correo: [this.correo]
    });
   
    })
  }

}


