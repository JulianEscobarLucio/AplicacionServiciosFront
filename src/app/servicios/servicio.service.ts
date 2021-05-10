import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Servicio } from '../modelos/sevicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private cantidadServicios$ = new Subject<number>();
  private cantidadServicios = 0;

  servicios: Servicio[] = [
    {
      idServicio: '1',
      nombre: 'Lavado de muebles',
      descripcion: '',
      imagen: '../../assets/images/limpieza-de-mueble.jpg',
      precio: 5000
    },
    {
      idServicio: '2',
      nombre: 'Lavado de alfombra',
      descripcion: '',
      imagen: '../../assets/images/lavado-de-alfombra.jpg',
      precio: 7000
    }, {
      idServicio: '3',
      nombre: 'Lavado de colchon',
      descripcion: '',
      imagen: '../../assets/images/limpieza-de-colchon.jpg',
      precio: 8000
    }
    , {
      idServicio: '4',
      nombre: 'Limpieza de tapicería',
      descripcion: '',
      imagen: '../../assets/images/limpieza-de-tapiceria.jpg',
      precio: 9000
    }
    , {
      idServicio: '5',
      nombre: 'Limpieza de peluches',
      descripcion: '',
      imagen: '../../assets/images/lavado-de-peluche.jpg',
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

  consultarSevicios(): Servicio[] {
    return this.servicios;
  }

}
