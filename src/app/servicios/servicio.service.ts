import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Sevicio } from '../modelos/sevicio';

// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private cantidadServicios$ = new Subject<number>();
  private cantidadServicios = 0;

  servicios: Sevicio[] = [
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
    }, {
      id: '3',
      nombre: 'Lavado de colchon',
      descripcion: 'Este es el servicio de lavado de colchon',
      imagen: 'https://mdbootstrap.com/img/new/standard/nature/183.jpg',
      precio: 8000
    }
    , {
      id: '4',
      nombre: 'Limpieza de pasisería',
      descripcion: 'Este es el servicio de limpieza de tapicería',
      imagen: 'https://mdbootstrap.com/img/new/standard/nature/183.jpg',
      precio: 9000
    }
    , {
      id: '5',
      nombre: 'Limpieza de peluches',
      descripcion: 'Este es el servicio de lavado de peluches',
      imagen: 'https://mdbootstrap.com/img/new/standard/nature/183.jpg',
      precio: 12000
    }
  ];

  constructor() { }

  modificarCantidad(cantidad: number ): void {
    this.cantidadServicios = cantidad;
    this.cantidadServicios$.next(this.cantidadServicios);
  }

  getCantidadServicio$(): Observable<number> {
    return this.cantidadServicios$.asObservable();
  }

  consultarSevicios(): Sevicio[] {
    return this.servicios;
  }

}
