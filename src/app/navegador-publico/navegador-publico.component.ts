import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-navegador-publico',
  templateUrl: './navegador-publico.component.html',
  styleUrls: ['./navegador-publico.component.css']
})
export class NavegadorPublicoComponent implements OnInit {

  cantidadDeServicios$: Observable<number>;
  cantidadDeServicios = 0;

  constructor(private servicioService: ServicioService ) { }

  ngOnInit() {
    this.cantidadDeServicios$ = this.servicioService.getCantidadServicio$();
    this.cantidadDeServicios$.subscribe(cantidad => this.cantidadDeServicios = cantidad);
  }

}
