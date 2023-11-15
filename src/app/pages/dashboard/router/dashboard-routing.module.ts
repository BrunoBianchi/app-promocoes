import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstatisticasComponent } from '../estatisticas/estatisticas.component';
import { PromocoesComponent } from '../promocoes/promocoes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


const routes: Routes = [
{path: '',component:DashboardComponent, pathMatch: 'full'},
{path:'estatisticas',component:EstatisticasComponent},
{path:'promocoes',component:PromocoesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModule { }
