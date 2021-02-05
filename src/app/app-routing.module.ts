import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddclientComponent } from './addclient/addclient.component';
import { AddfactureComponent } from './addfacture/addfacture.component';
import { AddhonoraireComponent } from './addhonoraire/addhonoraire.component';
import { ListefactureComponent } from './listefacture/listefacture.component';
import { ChargeComponent } from './charge/charge.component';
import { FacturecliComponent } from './facturecli/facturecli.component';
import { PrintComponent } from './print/print.component';


const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }, // redirect to `first-component`

  { path: 'addclient', component: AddclientComponent },
  { path: 'addfacture', component: AddfactureComponent },
  { path: 'addhono', component: AddhonoraireComponent},
  { path: 'charge', component: ChargeComponent},

  { path: 'fact', component: ListefactureComponent},
  { path: 'credit', component: FacturecliComponent},
  { path: 'print/:id', component: PrintComponent},













];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
