import { Component, OnInit,ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ServicioService } from '../servicios/servicio.service';
import { User } from '../modelos/modelos';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicioUsuarioService } from '../servicios/servicio-usuario.service';



@Component({
  selector: 'app-navegador-publico',
  templateUrl: './navegador-publico.component.html',
  styleUrls: ['./navegador-publico.component.css']
})
export class NavegadorPublicoComponent implements OnInit {

  cantidadDeServicios$: Observable<number>;
  cantidadDeServicios = 0;
  user: User;
  mensajeNombre = '';
  mensajeContrasena = '';
  mensajeboton = '';
  @ViewChild('content', {static: false}) contenidoDelModal;


  constructor( private servicioUsuarioService: ServicioUsuarioService,
     private servicioService: ServicioService, private router: Router, private modalService: NgbModal ) { }

  ngOnInit() {
    this.user = new User();
    this.cantidadDeServicios$ = this.servicioService.getCantidadServicio$();
    this.cantidadDeServicios$.subscribe(cantidad => this.cantidadDeServicios = cantidad);
  }

  solicitarInicio(): void {
    this.modalService.open(this.contenidoDelModal);

  }




  iniciarSesion() {
    if (this.validarDatos()) {
      return;
    }
    this.servicioUsuarioService.login(this.user).subscribe(
      response => {
          if (response.mensaje === undefined || response.mensaje === '' || response.mensaje === null) {
            document.getElementById('cerrar').click();
            this.router.navigate(['ver-solicitudes']);
          } else {
            this.mensajeboton  = response.mensaje;
          }
      },
      error => {
        this.mensajeboton  = 'Ocurrio un error, intentelo de nuevo.';

      }
    ) ;
  }

  validarDatos(): boolean {
    if (this.user.nombre === undefined || this.user.nombre === '' ){
      this.mensajeNombre = 'El usuario es requerido';
      return true;
    } else if (this.user.contrasena === undefined || this.user.contrasena === '') {
      this.mensajeContrasena = 'La contraseña es requerida';
      return true;
    }
    return false;
  }


  cambioDato() {
    this.mensajeNombre = '';
    this.mensajeContrasena = '';
    this.mensajeboton = '';
  }



}
