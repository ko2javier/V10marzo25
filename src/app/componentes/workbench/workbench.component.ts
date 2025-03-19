import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-workbench',
  standalone: false,
  templateUrl: './workbench.component.html',
  styleUrl: './workbench.component.css'
})
export class WorkbenchComponent {
  //user$; // 🔥 Se declara primero sin asignar valor
 

  constructor(private auth: AuthService, private http: HttpClient, private loginService:LoginService) {
    //this.user$  = this.auth.user$;  // 🔥 Recupera el usuario autenticado
  }
  testProtectedAPI() {
    this.http.get('http://localhost:5000/api/auth/protected', { withCredentials: true }).subscribe(
      response => {
        console.log('✅ Éxito:', response);
      },
      error => {
        console.error('❌ Error:', error);
      }
    );
  }
  
  logout() {
    console.log("entramos al logout");
    this.loginService.signOut();

  }

  checkUser() {
    this.loginService.getUser().then(user => console.log(user));
    this.loginService.getJWT();
  }
 

 

}
