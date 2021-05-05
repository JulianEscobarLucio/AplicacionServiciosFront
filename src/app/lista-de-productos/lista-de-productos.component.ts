import { Component, OnInit } from '@angular/core';
import { Sevicio } from '../modelos/sevicio';

@Component({
  selector: 'app-lista-de-productos',
  templateUrl: './lista-de-productos.component.html',
  styleUrls: ['./lista-de-productos.component.css']
})
export class ListaDeProductosComponent implements OnInit {

  serviciosAquiridos: Sevicio[] = [];

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
      precio: 12000
    }
    , {
      id: '4',
      nombre: 'Desinfección',
      descripcion: 'Este es el servicio de desinfección',
      imagen: 'https://mdbootstrap.com/img/new/standard/nature/183.jpg',
      precio: 8000
    }
  ];

  constructor() { }

  ngOnInit() {
  }


  agregar(id: Sevicio): void {
    this.serviciosAquiridos.push(id);
    console.log(id);
    console.log(this.serviciosAquiridos);
  }

  quitar(servicio: Sevicio): void {
    const i = this.serviciosAquiridos.indexOf( servicio );

    if ( i !== -1 ) {
      this.serviciosAquiridos.splice( i, 1 );
    }

    console.log(this.serviciosAquiridos);
  }

}
