import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrl: './iniciosesion.component.css'
})
export class IniciosesionComponent implements OnInit{


  constructor(public auth: AuthService, private router: Router){}
  ngOnInit(): void {

  }


 
}
