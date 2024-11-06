import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-interfaz-comun',
  templateUrl: './interfaz-comun.component.html',
  styleUrl: './interfaz-comun.component.css'
})
export class InterfazComunComponent {

  botonDeshabilitado: boolean = false;
  botonDeshabilitadoHouse: boolean = false;
  botonTexto: string = 'Log Out';
  botonFuncion!: () => void;

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateButtonBasedOnRoute();
      }
    });

    this.auth.isAuthenticated$.subscribe((autenticado) => {
      if (autenticado && this.router.url === '/inicio') {
        this.router.navigate(['/principal']);
      }
    });
  }

  updateButtonBasedOnRoute(): void {
    const currentUrl = this.router.url;

    if (currentUrl === '/inicio') {
      this.botonTexto = 'Sign Up';
      this.botonFuncion = this.login.bind(this);
      this.botonDeshabilitado = false;
      this.botonDeshabilitadoHouse = true; // Deshabilitar el botón en /inicio
    } else {
      this.botonTexto = 'Log Out';
      this.botonFuncion = this.logout.bind(this);
      this.botonDeshabilitado = false;
      this.botonDeshabilitadoHouse = false; // Habilitar el botón en otras rutas
    }
  }

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout();
  }

}
