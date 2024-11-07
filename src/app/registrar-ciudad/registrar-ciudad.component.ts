import { Component } from '@angular/core';
import {cty} from '../clases/city'
import { state } from '../clases/state';
import { CityService } from '../services/city.service';
import { StateService} from '../services/state.service';
import { CountryService } from '../services/country.service';
import { country } from '../clases/country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-ciudad',
  templateUrl: './registrar-ciudad.component.html',
  styleUrl: './registrar-ciudad.component.css'
})
export class RegistrarCiudadComponent {
  visible: boolean=false;
  city: cty = new cty();

  State: state = new state();
  states: state[] = [];
  countries: country[]= [];

  constructor(private cityService: CityService, private stateService: StateService, private countryService: CountryService, private router: Router){}
  ngOnInit(): void {
    this.getStates();

  }

  create():void{
    this.cityService.create(this.city).subscribe(
      (resp)=>{
        alert(resp.mensajes[0]);
        this.router.navigate(['principal'])
      },
   (error) => {
    console.error(error);
    alert(error.error.mensajes[0]);
  }
    );
  }

  getStates(): void{
    this.stateService.getStates().subscribe(
      (response) =>{
        this.states = response;
        console.log(this.states);
      },
      (error) => console.error('Error fetching clientes:', error)
    );

  }

}
