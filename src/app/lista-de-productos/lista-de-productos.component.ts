import { Component, OnInit, ViewChild } from '@angular/core';
import { Sevicio } from '../modelos/sevicio';
import { ServicioService } from '../servicios/servicio.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Compra } from '../modelos/compra';


@Component({
  selector: 'app-lista-de-productos',
  templateUrl: './lista-de-productos.component.html',
  styleUrls: ['./lista-de-productos.component.css']
})
export class ListaDeProductosComponent implements OnInit {

  serviciosAquiridos: Sevicio[] = [];
  servicios: Sevicio[] = [];
  @ViewChild('content', {static: false}) contenidoDelModal;
  total = 0;
  compra = new Compra();
  mensajeNombre = '';
  mensajeTelefono = '';
  mensajeDireccion = '';
  mensajeboton = '';


  constructor(private servicioService: ServicioService, config: NgbModalConfig, private modalService: NgbModal) {
      config.backdrop = 'static';
      config.keyboard = false;
}

  ngOnInit() {
    this.servicios = this.servicioService.consultarSevicios();
  }


  agregar(servicio: Sevicio): void {
    this.serviciosAquiridos.push(servicio);
    this.servicioService.modificarCantidad(this.serviciosAquiridos.length);
    console.log(servicio);
    document.cookie = 'serviciosAquiridos = ' + this.serviciosAquiridos;
    document.cookie = 'cantidadServicios = ' + this.serviciosAquiridos.length;

    const serviciosLista = document.cookie.replace(/(?:(?:^|.*;\s*)serviciosAquiridos\s*\=\s*([^;]*).*$)|^.*$/, "$1").split(',');
    console.log(serviciosLista);
    this.total = 0;
    this.serviciosAquiridos.forEach(item => {
      this.total = this.total + item.precio;
    });
  }

  quitar(servicio: Sevicio): void {
    const i = this.serviciosAquiridos.indexOf( servicio);

    if ( i !== -1 ) {
      this.serviciosAquiridos.splice( i, 1 );
    }
    this.servicioService.modificarCantidad(this.serviciosAquiridos.length);
    document.cookie = 'serviciosAquiridos = ' + this.serviciosAquiridos;
    console.log(this.serviciosAquiridos);
    this.total = 0;
    this.serviciosAquiridos.forEach(item => {
      this.total = this.total + item.precio;
    });
  }

  solicitarServicio() {
    this.total = 0;
    this.serviciosAquiridos.forEach(servicio => {
      this.total = this.total + servicio.precio;
    });
    this.modalService.open(this.contenidoDelModal);
  }


  terminar() {
      if (this.validarCampos()) {
        return;
      }
      this.compra.servicios = this.serviciosAquiridos;
      console.log(this.compra);
   }

   validarCampos(): boolean {
     if (this.compra.nombreCliente === undefined || this.compra.nombreCliente === '') {
      this.mensajeNombre = 'El campo nombre completo es requerido.';
      this.mensajeboton = 'Faltan datos por diligencias.';
      return true;
     } else if (this.compra.direccion === undefined || this.compra.direccion === '') {
      this.mensajeDireccion = 'El campo dirección es requerido.';
      this.mensajeboton = 'Faltan datos por diligencias.';
      return true;
    } else if (this.compra.telefono === undefined || this.compra.telefono === '') {
      this.mensajeTelefono = 'El campo teléfono es requerido.';
      this.mensajeboton = 'Faltan datos por diligencias.';
      return true;
    } else {
      return false;
    }
   }


   limpiarMensajes(): void {
    this.mensajeNombre = '';
    this.mensajeTelefono = '';
    this.mensajeDireccion = '';
    this.mensajeboton = '';
   }

}
