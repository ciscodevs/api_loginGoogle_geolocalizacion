import { Component, Sanitizer } from '@angular/core';
import { Geolocalizacion } from '../../services/geolocalizacion';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mapa',
  imports: [],
  templateUrl: './mapa.html',
  styleUrl: './mapa.css',
})
export class Mapa {

  ubicacion: any = null;
  error: string = "";
  urlMapa: SafeResourceUrl | null = null; // url segura

  constructor(
    private geoService: Geolocalizacion,
    private sanitizer: DomSanitizer // inyecta DomSanitizer
  ) {}

  ngOnInit(): void {
    this.obtenerUbicacion();
  }

  obtenerUbicacion() {
    this.geoService.obtenerUbicacion()
    .then(data => {
      this.ubicacion = data;
     // Construye URL segura para iframe
        const url = `https://maps.google.com/maps?q=${data.latitud},${data.longitud}&z=15&output=embed`;
        this.urlMapa = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    })
    .catch(err => {
      this.error = err;
    })
  }

}
