import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstatisticasComponent } from '../estatisticas/estatisticas.component';
import { PromocoesComponent } from '../promocoes/promocoes.component';
import { UsersComponent } from '../users/users.component';


const routes: Routes = [
{path: '',redirectTo:'promocoes', pathMatch: 'full'},
{path:'estatisticas',component:EstatisticasComponent},
{path:'promocoes',component:PromocoesComponent},
{path:'users',component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModule { }
