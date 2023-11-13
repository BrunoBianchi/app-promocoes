import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EstatisticasComponent } from '../estatisticas/estatisticas.component';


const routes: Routes = [
{path: '',component:DashboardComponent, pathMatch: 'full'},
{path:'estatisticas',component:EstatisticasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModule { }
