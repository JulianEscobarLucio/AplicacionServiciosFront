import { Injectable } from '@angular/core';
import { Compra } from '../modelos/compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  compras: Compra[] = [
    {
      id: '1',
      nombreCliente: 'Carlos Perez',
      direccion: 'Barranquilla calle 24 # 30 -21',
      telefono: '123',
      estado: 'En proceso',
      servicios: [
          {
          id: '1',
          nombre: 'Lavado de muebles',
          descripcion: 'Este es el servicio de lavado de muebles',
          imagen: 'https://mdbootstrap.com/img/new/standard/nature/181.jpg',
          precio: 5000
        },
        {
          id: '2',
          nombre: 'Lavado de alfombra',
          descripcion: 'Este es el servicio de lavado de alfombra',
          imagen: 'https://mdbootstrap.com/img/new/standard/nature/182.jpg',
          precio: 7000
        }
      ]
    },
    {
      id: '2',
      nombreCliente: 'Andres Valencia',
      direccion: 'Barranquilla calle 13 # 15 -12 piso2',
      telefono: '599 20 20',
      estado: 'En proceso',
      servicios: [
          {
          id: '1',
          nombre: 'Lavado de muebles',
          descripcion: 'Este es el servicio de lavado de muebles',
          imagen: 'https://mdbootstrap.com/img/new/standard/nature/181.jpg',
          precio: 8000
        },
        {
          id: '2',
          nombre: 'Lavado de alfombra',
          descripcion: 'Este es el servicio de lavado de alfombra',
          imagen: 'https://mdbootstrap.com/img/new/standard/nature/182.jpg',
          precio: 7000
        }
      ]
    }
];

  constructor() { }


  consultarCompras(): Compra[] {
    return this.compras;
  }
}
