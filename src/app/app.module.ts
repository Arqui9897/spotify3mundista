import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarComponent } from './busqueda/buscar/buscar.component';
import { GenerosComponent } from './generos/generos/generos.component';
import { HomeComponent } from './home/home/home.component';
import { CardComponent } from './page/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    GenerosComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
