import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePublicoComponent} from './home-publico/home-publico.component';
import { InicioDeSesionComponent } from './inicio-de-sesion/inicio-de-sesion.component';
import { RegistroDeUsuarioComponent } from './registro-de-usuario/registro-de-usuario.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { PrincipiosComponent } from './principios/principios.component';
import { VerCompraComponent } from './ver-compra/ver-compra.component';
import { SolicitarServicioComponent } from './solicitar-servicio/solicitar-servicio.component';


const routes: Routes = [
  { path: '', redirectTo: '/home-publico', pathMatch: 'full' },
  { path: 'home-publico', component: HomePublicoComponent },
  { path: 'inisiar-sesion', component: InicioDeSesionComponent },
  { path: 'registrarse', component: RegistroDeUsuarioComponent },
  { path: 'mision', component: MisionComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'principios', component: PrincipiosComponent },
  { path: 'detalle-compra', component: VerCompraComponent },
  { path: 'servicios', component: SolicitarServicioComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
