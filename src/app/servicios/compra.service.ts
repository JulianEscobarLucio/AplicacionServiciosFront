import { Injectable } from '@angular/core';
import { Compra } from '../modelos/compra';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { servicePath } from '../costantes';
import { RespuestaDTO } from '../modelos/RespuestaDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
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
            idServicio: '1',
          nombre: 'Lavado de muebles',
          descripcion: 'Este es el servicio de lavado de muebles',
          imagen: 'https://mdbootstrap.com/img/new/standard/nature/181.jpg',
          precio: 5000
        },
        {
          idServicio: '2',
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
            idServicio: '1',
          nombre: 'Lavado de muebles',
          descripcion: 'Este es el servicio de lavado de muebles',
          imagen: 'https://mdbootstrap.com/img/new/standard/nature/181.jpg',
          precio: 8000
        },
        {
          idServicio: '2',
          nombre: 'Lavado de alfombra',
          descripcion: 'Este es el servicio de lavado de alfombra',
          imagen: 'https://mdbootstrap.com/img/new/standard/nature/182.jpg',
          precio: 7000
        }
      ]
    }
];


private compraUrl = servicePath + 'api/compra/';  // URL to web api


  constructor(private http: HttpClient) { }




  guardarCompra(compra: Compra): Observable<RespuestaDTO> {
    return this.http.post<RespuestaDTO>(this.compraUrl + 'agregar', compra, httpOptions);
  }


  consultarCompras(): Observable<Compra[]> {
    return this.http.get<Compra[]>(this.compraUrl + 'listar', httpOptions);
  }

  /*consultarCompras(): Compra[] {
    return this.compras;
  }*/
}
