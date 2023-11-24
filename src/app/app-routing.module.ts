import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { authGuard } from './shared/guards/auth.guard';
import { SignOutComponent } from './pages/sign-out/sign-out.component';

const routes: Routes = [
{path: '',component:HomeComponent, pathMatch: 'full'},
{path:'sign-in',component:SignInComponent,pathMatch:'full'},
{path:'dashboard',loadChildren:()=>import('./pages/dashboard/router/dashboard-routing.module').then(m=>m.DashboardModule),canActivate:[authGuard]},
{path:'logout',component:SignOutComponent,pathMatch:'full',canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
