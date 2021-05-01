import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePublicoComponent} from './home-publico/home-publico.component';
import { InicioDeSesionComponent } from './inicio-de-sesion/inicio-de-sesion.component';
import { RegistroDeUsuarioComponent } from './registro-de-usuario/registro-de-usuario.component';


const routes: Routes = [
  { path: '', redirectTo: '/home-publico', pathMatch: 'full' },
  { path: 'home-publico', component: HomePublicoComponent },
  { path: 'inisiar-sesion', component: InicioDeSesionComponent },
  { path: 'registrarse', component: RegistroDeUsuarioComponent }

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
