import { Component, OnInit } from '@angular/core';
import { AuthGoogle } from '../../services/auth-google';
import { Router } from '@angular/router';
import { Mapa } from "../mapa/mapa";

@Component({
  selector: 'app-principal',
  imports: [Mapa],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal implements OnInit {

  perfil : any = {}

  constructor(private authGoogle: AuthGoogle,
              private ruta: Router
  ) {

  }

  ngOnInit(): void {
    this.perfil = this.authGoogle.getPerfil();
    console.log(this.perfil); //mostrar en consola los datos del perfil
  }

  cerrarSesion() {
    this.authGoogle.logout();
    this.ruta.navigate(['login']);
  }

}
