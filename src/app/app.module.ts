import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { NavbarComponent } from './header/navbar/navbar.component';
import { SliderComponent } from './home/slider/slider.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddclientComponent } from './addclient/addclient.component';
import { AddfactureComponent } from './addfacture/addfacture.component';
import { ChargeComponent } from './charge/charge.component';
import { ListefactureComponent } from './listefacture/listefacture.component';

import { AddhonoraireComponent } from './addhonoraire/addhonoraire.component';
import { FacturecliComponent } from './facturecli/facturecli.component';
import { PrintComponent } from './print/print.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,

    NavbarComponent,
    SliderComponent,

    AddclientComponent,
    AddfactureComponent,
    ChargeComponent,
    ListefactureComponent,

    AddhonoraireComponent,

    FacturecliComponent,

    PrintComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
