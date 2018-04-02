import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import {ServidorComponent} from './servidor/servidor.component';
import { ServidoresComponent } from './servidores/servidores.component';

@NgModule({
  declarations: [
    AppComponent,
    ServidorComponent,
    ServidoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
