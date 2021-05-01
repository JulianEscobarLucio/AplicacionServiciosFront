import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule}  from '@ng-bootstrap/ng-bootstrap';

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
    RegistroDeUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
