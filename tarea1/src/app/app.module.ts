import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OkComponent } from './ok/ok.component';
import { AdvertenciaComponent } from './advertencia/advertencia.component';


@NgModule({
  declarations: [
    AppComponent,
    OkComponent,
    AdvertenciaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
