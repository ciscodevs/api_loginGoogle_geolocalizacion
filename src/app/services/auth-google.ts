import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class AuthGoogle {

  constructor(private oAuthServ : OAuthService) {
    this.inicializarLoginGmail();

  }

  inicializarLoginGmail() {

    const config: AuthConfig = {
      issuer : 'https://accounts.google.com',
      strictDiscoveryDocumentValidation : false, // al conectar localmente no se ocupa la seguridad
      clientId : '867022391712-fq6055tutr9qovu6fcuonphqt6jhk6go.apps.googleusercontent.com', //se genera desde la consola de google
      redirectUri: window.location.origin + '/principal', //pagina de rediccionamiento
      scope: 'openid profile email'
    }

    this.oAuthServ.configure(config);
    this.oAuthServ.setupAutomaticSilentRefresh(); // cuando el token este por caducar, realiza un refresh
    this.oAuthServ.loadDiscoveryDocumentAndTryLogin();  // realice la autentificación con google
  }

  login() {
    this.oAuthServ.initLoginFlow(); // continua el flujo de autentificación
  }

  logout() {
    this.oAuthServ.logOut(); // cerrar sesión
  }

  getPerfil() {
    return this.oAuthServ.getIdentityClaims(); // retorna el perfil del usuario
  }
  
}
