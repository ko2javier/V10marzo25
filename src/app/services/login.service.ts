import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  /*

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const url = 'https://dev-hn6ws7o3ayfpoqpa.eu.auth0.com/oauth/token';

    const body = {
      grant_type: 'password',
      username: email,
      password: password,
      audience: 'https://dev-hn6ws7o3ayfpoqpa.eu.auth0.com/api/v2/', // ✅ Corrige con el API Audience correcto
      client_id: '9uPAyIP7nQuyolzea0KLQ0XyDVy0t3QN',
      client_secret: 'uSm9YbzzoOxFD3fPx1PwnC-fqchXoFOhT1nRLZtIM-rSn_n4XB2d6L0mUAtNDecj', // ⚠️ Esto debe ir en backend después
      connection: 'Username-Password-Authentication' // 
    };
    
  

    return this.http.post(url, body);
  }*/

    private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://idbwaevvltbbtieikpin.supabase.co',  // 🔥 Reemplaza con la URL de tu proyecto en Supabase
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkYndhZXZ2bHRiYnRpZWlrcGluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyMDkxMjcsImV4cCI6MjA1Nzc4NTEyN30.PwGvfa2MiBNg5esxO2O1xZM_Rw52c7GMzIUfgvi1B6M' // 🔥 Reemplaza con tu Supabase anon key
    );
  }

  // 🔹 Iniciar sesión con Google
  async signInWithGoogle() {
    const { error } = await this.supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/bench' // Redirige después del login
      }
    });
    if (error) {
      console.error('Error al iniciar sesión con Google:', error.message);
    }
  }

  // 🔹 Cerrar sesión
  async signOut() {
    try {
      const { error } = await this.supabase.auth.signOut();
      
      if (error) {
        console.error('Error al cerrar sesión:', error.message);
      } else {
        console.log('Sesión cerrada correctamente.');
        window.location.href = '/';  // 🔥 Redirige al home después del logout
      }
    } catch (err) {
      console.error('Excepción en logout:', err);
    }
  }
  

  // 🔹 Obtener usuario autenticado
  

  async getUser() {
    const { data, error } = await this.supabase.auth.getUser();
    if (error) {
      console.error('Error al obtener usuario:', error.message);
      return null;
    }
    console.log('Usuario obtenido:', data.user);
    return data.user; // 🔥 Retorna el usuario correctamente
  }

  async getJWT() {
    const { data, error } = await this.supabase.auth.getSession();
    if (error) {
      console.error('Error al obtener el token JWT:', error.message);
      return null;
    }
    console.log('JWT Token:', data.session?.access_token);
    return data.session?.access_token; // 🔥 Retorna el token JWT
  }
  
  
}
