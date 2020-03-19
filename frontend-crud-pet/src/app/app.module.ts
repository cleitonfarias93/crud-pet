import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';

import { TelaCrudComponent } from './tela-crud/tela-crud.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaConsultaComponent } from './tela-consulta/tela-consulta.component';
import { TelaEditarComponent } from './tela-editar/tela-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaCrudComponent,
    TelaConsultaComponent,
    TelaEditarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
