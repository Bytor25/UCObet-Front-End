import { Component } from '@angular/core';
import {cty} from '../clases/city'

@Component({
  selector: 'app-registrar-ciudad',
  templateUrl: './registrar-ciudad.component.html',
  styleUrl: './registrar-ciudad.component.css'
})
export class RegistrarCiudadComponent {
  visible: boolean=false;
  city: cty = new cty();

  ngOnInit(): void {
  }

  create():void{
    console.log(this.city)
  }
}
