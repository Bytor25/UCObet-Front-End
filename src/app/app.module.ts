import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarCiudadComponent } from './registrar-ciudad/registrar-ciudad.component';
import { FormsModule } from '@angular/forms';
import { InterfazComunComponent } from './interfaz-comun/interfaz-comun.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { PruebaComponent } from './prueba/prueba.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes =[
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'registroCiudades', component: RegistrarCiudadComponent},
  {path: 'principal', component: MenuPrincipalComponent},
  {path: 'login', component: LoginComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    RegistrarCiudadComponent,
    InterfazComunComponent,
    MenuPrincipalComponent,
    PruebaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
