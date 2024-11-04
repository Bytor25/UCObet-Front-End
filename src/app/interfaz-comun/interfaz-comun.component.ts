import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interfaz-comun',
  templateUrl: './interfaz-comun.component.html',
  styleUrl: './interfaz-comun.component.css'
})
export class InterfazComunComponent {

  botonDeshabilitado: boolean = false;
  frameSuperiorDeshabilitado: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.botonDeshabilitado = this.router.url === '/login';
    });

    this.router.events.subscribe(() => {
      this.botonDeshabilitado = this.router.url === '/inicio';
    });
  }

}
