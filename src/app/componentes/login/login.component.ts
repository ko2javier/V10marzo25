import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LoginService } from '../../services/login.service';
import { CustomAuthService } from '../custom-auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  

  constructor(
    private customAuthService: CustomAuthService,  // 🔥 Usa el nombre correcto
    private loginService: LoginService,  // 🔥 Servicio para hacer login
    public auth: AuthService
  ) {}

  iniciarSesion(form: any) {
    const email = form.value.email;
    const password = form.value.password;

    if (!email || !password) {
      console.error('Email y contraseña son obligatorios.');
      return;
    }
/*
    this.loginService.login(email, password).subscribe(
      response => {
        console.log('Token recibido:', response);
      },
      error => {
        console.error('Error en login:', error);
      }
    );*/
  }

  loginWithApple() {
    this.auth.loginWithRedirect({
      appState: { target: '/' }, // Redirige a la raíz después de loguearse
      ...( { connection: 'con_1rAV2CQaGt5rKKJo' } as any ), // Conexión para Apple
    });
  }

  loginWithFacebook(): void {
    this.auth.loginWithRedirect({
      appState: { target: '/bench' },  // 🔥 Redirige a workbench después del login
      connection: 'facebook'
    } as any);  // 🔥 Solución: Forzar la propiedad connection
  }
/*
  loginWithGoogle() {
    this.auth.loginWithRedirect({
      appState: { target: '/' },
      ...( { connection: 'con_KRdHeFwLegCJdya2' } as any ), // Conexión para Gmail
    });
  }*/
    loginWithGoogle() {
      this.loginService.signInWithGoogle();
    }

    logout() {
      this.loginService.signOut();
    }
  
    checkUser() {
      this.loginService.getUser().then(user => console.log(user));
    }

}
