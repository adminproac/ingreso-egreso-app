import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalleComponent } from './ingresos-egresos/detalle/detalle.component';
import { EstadisticaComponent } from './ingresos-egresos/estadistica/estadistica.component';
import { IngresosEgresosComponent } from './ingresos-egresos/ingresos-egresos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'ingresos-egresos', component: IngresosEgresosComponent },
      { path: 'detalle', component: DetalleComponent },
      { path: '', component: EstadisticaComponent },
      { path: '**', redirectTo: '' },
    ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
