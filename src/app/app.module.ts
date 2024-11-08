import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarCiudadComponent } from './registrar-ciudad/registrar-ciudad.component';
import { FormsModule } from '@angular/forms';
import { InterfazComunComponent } from './interfaz-comun/interfaz-comun.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { LoginComponent } from './login/login.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

const appRoutes: Routes =[
  {path: '', redirectTo: 'inicio', pathMatch:'full'},
  {path: 'registroCiudades', component: RegistrarCiudadComponent},
  {path: 'principal', component: MenuPrincipalComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: IniciosesionComponent}
  
]

@NgModule({ declarations: [
        AppComponent,
        RegistrarCiudadComponent,
        InterfazComunComponent,
        MenuPrincipalComponent,
        LoginComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)], providers: [
        provideAuth0({
            domain: 'dev-nsr620ltrh3dp80t.us.auth0.com',
            clientId: 'dZmNXZ7ouKioJ8xiFrh1JXqXyYeskhAH',
            authorizationParams: {
                redirect_uri: window.location.origin
            }
        }),
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule { }
