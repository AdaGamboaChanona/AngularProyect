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
  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.serviceService.getProduct("products/").subscribe((data:any[]) =>{
      console.log(data);
      this.products=data;
    });
  }

}
