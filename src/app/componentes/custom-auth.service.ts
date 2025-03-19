import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CustomAuthService {
  constructor(private auth: AuthService, private cookies: CookieService) {}

  loginWithGoogle() {
    this.auth.loginWithRedirect({ connection: 'google-oauth2' } as any);
  }

  loginWithFacebook() {
    this.auth.loginWithRedirect({ connection: 'facebook' } as any);
  }

  logout() {
    this.auth.logout();
  }

 
  
  getAccessToken() {
    return this.auth.idTokenClaims$.subscribe(claims => {
      if (claims) this.cookies.set('access_token', claims.__raw, { secure: true, sameSite: 'Strict' });
    });
  }
}
