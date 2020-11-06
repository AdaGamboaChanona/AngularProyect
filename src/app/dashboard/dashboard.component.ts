import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['No.', 'nombre', 'edad', 'correo', 'editar', 'eliminar'];
  formRegister : FormGroup;
  products = [];
  nombreCompleto: string;
  edad: string;
  correo: string;
  update:boolean;
  id:string;
  constructor(private serviceService: ServiceService, private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.serviceService.getRegistro().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
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
    if (this.update) {
      if(data.nombreCompleto && data.edad && data.correo){
        this.serviceService.updateRegistro(this.id,data.nombreCompleto,data.edad,data.correo).subscribe(access=>{
          window.location.reload();
          this.update=false;
        },error=>{
          console.log("Datos inválidos")
        })
      }  
    
    }else{
      if(data.nombreCompleto && data.edad && data.correo){
        this.serviceService.addRegistro(data.nombreCompleto,data.edad,data.correo).subscribe(access=>{
          window.location.reload();
        },error=>{
          console.log("Datos inválidos")
        })
      }
    }
  }

  updateRegistro(id:string):void{
    console.log(id);
    this.serviceService.getSingleRegistro(id).subscribe((data:JSON)=>{
      let registro = data;
      this.nombreCompleto = registro['nombreCompleto']
      this.edad = registro['edad']
      this.correo = registro['correo']
      this.update=true;
      this.id=id;
    });

  }

}


