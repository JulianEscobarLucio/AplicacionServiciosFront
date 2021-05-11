import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePublicoComponent } from './home-publico/home-publico.component';
import { PruebaComponent } from './prueba/prueba.component';
import { CarouselComponent } from './corousel/corousel.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { ListaDeProductosComponent } from './lista-de-productos/lista-de-productos.component';
import { NavegadorPublicoComponent } from './navegador-publico/navegador-publico.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { InicioDeSesionComponent } from './inicio-de-sesion/inicio-de-sesion.component';
import { RegistroDeUsuarioComponent } from './registro-de-usuario/registro-de-usuario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { PrincipiosComponent } from './principios/principios.component';
import { DetalleCompraComponent } from './servicios/detalle-compra/detalle-compra.component';
import { VerCompraComponent } from './ver-compra/ver-compra.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { SolicitarServicioComponent } from './solicitar-servicio/solicitar-servicio.component';
import { HomePrivadoComponent } from './home-privado/home-privado.component';
import { NavegadorPrivadoComponent } from './navegador-privado/navegador-privado.component';
import {NgxMaskModule} from 'ngx-mask'

import { IConfig } from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
// import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    AppComponent,
    HomePublicoComponent,
    PruebaComponent,
    CarouselComponent,
    SliderComponent,
    FooterComponent,
    ListaDeProductosComponent,
    NavegadorPublicoComponent,
    EncabezadoComponent,
    InicioDeSesionComponent,
    RegistroDeUsuarioComponent,
    ModalComponent,
    MisionComponent,
    VisionComponent,
    PrincipiosComponent,
    DetalleCompraComponent,
    VerCompraComponent,
    QuienesSomosComponent,
    SolicitarServicioComponent,
    HomePrivadoComponent,
    NavegadorPrivadoComponent
    // ,NgxSpinnerModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
