import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService, ToastData } from './services/toast.service';
import { AuthService } from '@auth0/auth0-angular';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  toast: ToastData | null = null;
  title = 'V9_Marzo25';

  constructor(private router: Router, private toastService: ToastService, private auth: AuthService,
    private cookies: CookieService ) 
{
 // ✅ Obtiene el token correctamente con idTokenClaims$
 this.auth.idTokenClaims$.subscribe(claims => {
   if (claims?.__raw) {  // 🔥 El token real está en claims.__raw
     this.cookies.set('access_token', claims.__raw, { secure: true, sameSite: 'Strict' });
   }
 });

 // ✅ Obtiene el usuario autenticado
 this.auth.user$.subscribe(user => {
   if (user?.email) {
     this.cookies.set('user_email', user.email, { secure: true, sameSite: 'Strict' });
   }
 });

 // ✅ Redirige después del login
 this.auth.handleRedirectCallback().subscribe({
  next: result => {
    const targetUrl = result?.appState?.target || '/';
    this.router.navigateByUrl(targetUrl);
  },
  error: err => console.error("Error en el callback de Auth0:", err)
});
}



  /** Aplico el toast de manera global !! */
  ngOnInit() {
    this.toastService.toast$.subscribe((data: ToastData) => {
      this.toast = data;

      // Auto ocultar el toast después de 4 segundos
      setTimeout(() => {
        this.toast = null;
      }, 1200);
    });
  }

  closeToast() {
    this.toast = null; // Cierra el toast manualmente
  }
  
  
}
