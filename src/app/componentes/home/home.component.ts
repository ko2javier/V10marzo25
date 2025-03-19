import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isLoggedIn:boolean=true;
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  click_logIn(event: Event) {
    event.preventDefault();  // Evita recargar la página
    this.router.navigate(['/login']); // Redirige a la ruta "/login"
  }

   onLogin(): void {

   
  }

}
