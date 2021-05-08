import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { ServicioUsuarioService } from '../servicios/servicio-usuario.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

// import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-inicio-de-sesion',
  templateUrl: './inicio-de-sesion.component.html',
  styleUrls: ['./inicio-de-sesion.component.css']
})
export class InicioDeSesionComponent implements OnInit {
  @ViewChild('content', {static: false}) contenidoDelModal;


  usuario: Usuario;
  mensajeUsuario = '';
  mensajeContrasena = '';
  mensajeboton = '';
  mensaje = '';

  constructor(private servicioUsuario: ServicioUsuarioService,
    config: NgbModalConfig, private modalService: NgbModal, private router: Router) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    this.usuario = new Usuario();
  }

  iniciarSesion() {
    this.router.navigate(['ver-solicitudes']);
 /*   this.servicioUsuario.login(this.usuario)
    .subscribe(respuesta => {
      this.mensaje = respuesta;
      this.modalService.open(this.contenidoDelModal);
    }, err => {
      console.log(err);
      this.mensaje = 'Ocurrio un error tratando de ingresar';
      this.modalService.open(this.contenidoDelModal);
    });*/
  }

  validarDatos(): boolean {
    if (this.usuario.usuario === undefined || this.usuario.usuario === '') {
      this.mensajeUsuario = 'El usuario es requerido';
      this.mensajeboton = 'Revisar datos inválidos';
      return true;
    } else if (this.usuario.constrasena === undefined || this.usuario.constrasena === '') {
      this.mensajeContrasena = 'La contraseña es requerida';
      this.mensajeboton = 'Revisar datos invalidos';
      return true;
    }
    return false;
  }

  cambioDato() {
    this.mensajeUsuario = '';
    this.mensajeContrasena = '';
    this.mensajeboton = '';
  }

}
