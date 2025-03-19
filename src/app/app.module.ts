import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { authConfig } from './services/authConfig';
import { AuthModule } from '@auth0/auth0-angular';
import { WorkbenchComponent } from './componentes/workbench/workbench.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    WorkbenchComponent,
  

  
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 

    AuthModule.forRoot({
      domain: authConfig.domain,
      clientId: authConfig.clientId,
      authorizationParams: {
        redirect_uri: authConfig.redirectUri,
        audience: authConfig.audience,
        scope: authConfig.scope,
      },
    }),
    
  ],
/*
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain: authConfig.domain,
      clientId: authConfig.clientId,
      authorizationParams: {
        redirect_uri: authConfig.redirectUri,
        audience: authConfig.audience,
        scope: authConfig.scope,
        connection: authConfig.connection, // 🔥 Aquí agregamos Google
      },
    }),
  ],*/
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
