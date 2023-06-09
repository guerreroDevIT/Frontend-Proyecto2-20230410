import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactameComponent } from './componentes/contactame/contactame.component';
import { FooterComponent } from './componentes/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    NavbarComponent,
    PortfolioComponent,
    AboutComponent,
    ContactameComponent,
    FooterComponent
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
