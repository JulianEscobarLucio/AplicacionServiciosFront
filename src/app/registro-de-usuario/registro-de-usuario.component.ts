import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { ServicioUsuarioService } from '../servicios/servicio-usuario.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-registro-de-usuario',
  templateUrl: './registro-de-usuario.component.html',
  styleUrls: ['./registro-de-usuario.component.css'],
  providers: [NgbModalConfig, NgbModal]

})
export class RegistroDeUsuarioComponent implements OnInit {
  @ViewChild('content', {static: false}) contenidoDelModal;
  usuario: Usuario;
  tipoDeDocumentos = [];
  paises = [];
  municipios = [];
  mensajeTipoDocumento = '';
  mensajeDocumento = '';
  mensajePrimerNombre = '';
  mensajePrimerApellido = '';
  mensajeCiudad = '';
  mensajeDireccion = '';
  mensajeTelefono = '';
  mensajeUsuario = '';
  mensajeContrasena = '';
  mensajeconfirmar = '';
  mensajeboton = '';
  mensajeServicioGuardar = '';

  constructor(private servicioUsuario: ServicioUsuarioService,
              config: NgbModalConfig, private modalService: NgbModal) {
      config.backdrop = 'static';
      config.keyboard = false;
    }

  ngOnInit() {
    this.usuario = new Usuario();
    this.usuario.pais = 'Colombia';
    this.tipoDeDocumentos = this.listartiposDeDocumentos();
    this.paises = this.listarPais();
    this.municipios = this.listarMunicipios();
  }
  open(content) {
    this.modalService.open(content);
  }

  guardarUsuario() {
    if (this.validarCampos()) {
      return;
    }
    if (this.compararContrasenas()){
       return false;
    }    
    this.servicioUsuario.guardarUsaurio(this.usuario)
      .subscribe(usuario => {
        this.mensajeServicioGuardar = 'El usuario fue guardado';
        this.modalService.open(this.contenidoDelModal);
      }, err => {
        console.log(err);
        this.mensajeServicioGuardar = 'Ocurrio un error guardando el usuario, intente nuevamente';
        this.modalService.open(this.contenidoDelModal);
      });
  }

  compararContrasenas(): boolean {
    if (this.usuario.constrasena !== this.usuario.confirmarContrasena) {
      this.mensajeconfirmar = 'La constraseña y la confirmación no coinciden';
      return true;
     }
    return false;
  }

  validarCampos(): boolean {
   if (this.usuario.tipoDeDocumento === undefined || this.usuario.tipoDeDocumento === '' ) {
      this.mensajeTipoDocumento = 'Tipo de documento es requerido';
      this.mensajeboton = 'Revisar datos inválidos';
      return true;
   } else if (this.usuario.numeroDeDocumento === undefined || this.usuario.numeroDeDocumento === '') {
      this.mensajeDocumento = 'El número de documento es requerido';
      this.mensajeboton = 'Revisar datos inválidos';
      return true;
   } else if (this.usuario.primerNombre === undefined || this.usuario.primerNombre === '') {
    this.mensajePrimerNombre = 'El primer nombre es requerido';
    this.mensajeboton = 'Revisar datos inválidos';
    return true;
   } else if (this.usuario.primerApellido === undefined || this.usuario.primerApellido === '') {
    this.mensajePrimerApellido = 'El primer apellido es requerido';
    this.mensajeboton = 'Revisar datos inválidos';
    return true;
   } else if (this.usuario.ciudad === undefined || this.usuario.ciudad === '') {
    this.mensajeCiudad = 'La ciudad es requerida';
    this.mensajeboton = 'Revisar datos inválidos';
    return true;
   } else if (this.usuario.direccion === undefined || this.usuario.direccion === '') {
    this.mensajeDireccion = 'La dirección es requerida';
    this.mensajeboton = 'Revisar datos inválidos';
    return true;
   } else if (this.usuario.telefono === undefined || this.usuario.telefono === '') {
    this.mensajeTelefono = 'El número de télefono es requerido';
    this.mensajeboton = 'Revisar datos inválidos';
    return true;
   } else if (this.usuario.usuario === undefined || this.usuario.usuario === '') {
    this.mensajeUsuario = 'El usuario es requerido';
    this.mensajeboton = 'Revisar datos inválidos';
    return true;
   } else if (this.usuario.constrasena === undefined || this.usuario.constrasena === '') {
    this.mensajeContrasena = 'La contraseña es requerida';
    this.mensajeboton = 'Revisar datos invalidos';
    return true;
   } else if (this.usuario.confirmarContrasena === undefined || this.usuario.confirmarContrasena === '') {
    this.mensajeconfirmar = 'Confirmar contraseña es requerida';
    this.mensajeboton = 'Revisar datos invalidos';
    return true;
   }
   return false;
  }

  cambioDato() {
    this.mensajeTipoDocumento = '';
    this.mensajeDocumento = '';
    this.mensajePrimerNombre = '';
    this.mensajePrimerApellido = '';
    this.mensajeCiudad = '';
    this.mensajeDireccion = '';
    this.mensajeTelefono = '';
    this.mensajeUsuario = '';
    this.mensajeContrasena = '';
    this.mensajeconfirmar = '';
    this.mensajeboton = '';
  }

  listartiposDeDocumentos() {
    return [
      { id: 'Registro civil de nacimiento', valor: 'Registro civil de nacimiento' },
      { id: 'Tarjeta de identidad', valor: 'Tarjeta de identidad' },
      { id: 'Cédula de ciudadania', valor: 'Cédula de ciudadania' },
      { id: 'Cédula de extranjería', valor: 'Cédula de extranjería' },
      { id: 'Pasaporte', valor: 'Pasaporte' },
      { id: 'Carne diplomatico', valor: 'Carnet diplomatico' },
      { id: 'NIT', valor: 'NIT' },
      { id: 'NUIP', valor: 'NUIP' }
    ];
  }

  listarPais() {
    return [
      { valor: 'Colombia' }
    ];
  }

  listarMunicipios() {
    return [
      { id: 'Barranquilla', valor: 'Barranquilla' },
      { id: 'Galapa', valor: 'Galapa' },
      { id: 'Malambo', valor: 'Malambo' },
      { id: 'Puerto Colombia', valor: 'BPuerto Colombiaarranquilla' },
      { id: 'Soledad', valor: 'Soledad' },
      { id: 'Campo De La Cruz', valor: 'Campo De La Cruz' },
      { id: 'Candelaria', valor: 'Candelaria' },
      { id: 'Luruaco', valor: 'Luruaco' },
      { id: 'Manati', valor: 'Manati' },
      { id: 'Repelon', valor: 'Repelon' },
      { id: 'Santa Lucia', valor: 'Santa Lucia' },
      { id: 'Suan', valor: 'Suan' },
      { id: 'Baranoa', valor: 'Baranoa' },
      { id: 'Palmar De Varela', valor: 'Palmar De Varela' },
      { id: 'Sabanagrande', valor: 'Sabanagrande' },
      { id: 'Sabanalarga', valor: 'Sabanalarga' },
      { id: 'Santo Tomas', valor: 'Santo Tomas' },
      { id: 'Juan De Acosta', valor: 'Juan De Acosta' },
      { id: 'Piojó', valor: 'Piojó' },
      { id: 'Tubara', valor: 'Tubara' },
      { id: 'Usiacuri', valor: 'Usiacuri' }
    ];
  }
}
