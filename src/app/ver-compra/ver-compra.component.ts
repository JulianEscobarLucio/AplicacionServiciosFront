import { Component, OnInit,ViewChild } from '@angular/core';
import { CompraService } from '../servicios/compra.service';
import { Compra } from '../modelos/compra';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-ver-compra',
  templateUrl: './ver-compra.component.html',
  styleUrls: ['./ver-compra.component.css']
})
export class VerCompraComponent implements OnInit {
  @ViewChild('content', {static: false}) contenidoDelModal;

  compras: Compra[];
  compraLocal: Compra;
  total = 0;

  constructor(private compraService: CompraService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
    config.size = 'xl';
    config.centered = true;
}

  ngOnInit() {

    this.compraService.consultarCompras()
      .subscribe(compras => {
        this.compras = compras;
        console.log(this.compras);

  /*      this.mensajeServicioGuardar = 'El usuario fue guardado';
        this.modalService.open(this.contenidoDelModal);*/
      }, err => {
        console.log(err);
   /*     this.mensajeServicioGuardar = 'Ocurrio un error guardando el usuario, intente nuevamente';
        this.modalService.open(this.contenidoDelModal);*/
      });
  }

  verDetalleSolicitud(compra: Compra): void {
     this.compraLocal = compra;
     this.total = 0;
     this.compraLocal.servicios.forEach(servicio => {
       this.total = this.total + servicio.precio;
     });
     this.modalService.open(this.contenidoDelModal);
  }

}
