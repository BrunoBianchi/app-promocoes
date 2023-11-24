import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

import { environment } from 'src/envoriments/envoriments';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EstatisticasComponent } from './pages/dashboard/estatisticas/estatisticas.component';
import { PromocoesComponent } from './pages/dashboard/promocoes/promocoes.component';
import { SignOutComponent } from './pages/sign-out/sign-out.component';
import { BreadCrumbComponent } from './shared/components/breadcrumb/bread-crumb.component';
import { UsersComponent } from './pages/dashboard/users/users.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SignInComponent,
    EstatisticasComponent,
    PromocoesComponent,
    SignOutComponent,
    BreadCrumbComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
