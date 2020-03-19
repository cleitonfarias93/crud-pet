import { TelaCrudComponent } from './tela-crud/tela-crud.component';
import { TelaEditarComponent } from './tela-editar/tela-editar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaConsultaComponent } from './tela-consulta/tela-consulta.component';


const routes: Routes = [
  { path: '', component: TelaConsultaComponent },
  { path: 'cadastro', component: TelaCrudComponent },
  { path: 'editar/:id', component: TelaEditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
