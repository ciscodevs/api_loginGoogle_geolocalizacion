import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Geolocalizacion {

  constructor() {

  }

  /* obtiene la ubicación actual del usuario
  usando la API nativa del navegador */

  obtenerUbicacion(): Promise<any> {
    return new Promise((resolve, reject) => {

      if (!navigator.geolocation) {
        reject("Geolocalizacion no soportada");
      }

      navigator.geolocation.getCurrentPosition(
        position => {
          resolve({
            latitud: position.coords.latitude,
            longitud: position.coords.longitude,
            precision: position.coords.accuracy
          });
        },

        error =>{
          reject(error.message);
        }
      );

    });
  }
  
}
