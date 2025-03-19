import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { WorkbenchComponent } from './componentes/workbench/workbench.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent}, // Página principal
  { path: 'login', component: LoginComponent}, 
  { path: 'bench', component: WorkbenchComponent}, 
  
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
