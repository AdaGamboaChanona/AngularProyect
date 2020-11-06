import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service'

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})

//Clase principal del componente de la logica de negocio

export class LandingpageComponent implements OnInit {
  products= [];
  info= "no hay datos";
  status:boolean=false;
  name:String='Mostrar';
  constructor(private serviceService: ServiceService) { };

  ngOnInit(): void {
    this.serviceService.getRegistro().subscribe((data:any[]) =>{
      console.log(data);
      this.products=data;
    });
  }

  onClickMe(){
    
  }

  onClickClear(){
    this.products=[];
  }

  onClickMostrar(){
    this.status=!this.status;
    if(this.status){
      this.name="ocultar"
    }else {
      this.name="mostrar"
    }

  }

}
