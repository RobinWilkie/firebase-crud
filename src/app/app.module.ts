import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

import {AF} from './providers/af';
import {RouterModule, Routes} from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDmFJRSPOczQRmHnbS73pCigCmTylEseN4',
  authDomain: 'fir-crud-f2275.firebaseapp.com',
  databaseURL: 'https://fir-crud-f2275.firebaseio.com',
  storageBucket: 'fir-crud-f2275.appspot.com',
  messagingSenderId: '548186472590'
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
