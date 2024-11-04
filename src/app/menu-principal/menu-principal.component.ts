import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrl: './menu-principal.component.css'
})
export class MenuPrincipalComponent implements OnInit {

  constructor(public auth: AuthService){
  }
  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
  }
}
