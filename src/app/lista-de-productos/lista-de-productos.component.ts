import { Component, OnInit } from '@angular/core';
import { Sevicio } from '../modelos/sevicio';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-lista-de-productos',
  templateUrl: './lista-de-productos.component.html',
  styleUrls: ['./lista-de-productos.component.css']
})
export class ListaDeProductosComponent implements OnInit {

  serviciosAquiridos: string[] = [];

  servicios: Sevicio[] = [];

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.servicios = this.servicioService.consultarSevicios();
  }


  agregar(servicio: Sevicio): void {
    this.serviciosAquiridos.push(servicio.id);
    this.servicioService.modificarCantidad(this.serviciosAquiridos.length);
    console.log(servicio);
    document.cookie = 'serviciosAquiridos = ' + this.serviciosAquiridos;
    document.cookie = 'cantidadServicios = ' + this.serviciosAquiridos.length;

    const serviciosLista = document.cookie.replace(/(?:(?:^|.*;\s*)serviciosAquiridos\s*\=\s*([^;]*).*$)|^.*$/, "$1").split(',');
    console.log(serviciosLista);
  }

  quitar(servicio: Sevicio): void {
    const i = this.serviciosAquiridos.indexOf( servicio.id );

    if ( i !== -1 ) {
      this.serviciosAquiridos.splice( i, 1 );
    }
    this.servicioService.modificarCantidad(this.serviciosAquiridos.length);
    document.cookie = 'serviciosAquiridos = ' + this.serviciosAquiridos;
    console.log(this.serviciosAquiridos);
  }

}
