import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacturationService } from '../services/facturation.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-charge',
  templateUrl: './charge.component.html',
  styleUrls: ['./charge.component.css']
})
export class ChargeComponent implements OnInit {
  headersTable=['Designations','Prix','edit'];
  data: any = [];
  data4: any = [];

  dataCorrective: any = [];

  Designations = new FormControl('');
  Prix = new FormControl('');
  
  constructor(private api: FacturationService) { }


  ngOnInit(): void {
    this.loadCharges();
  }

  loadCharges() {
    this.api.getCharges().subscribe((data) => {
      this.data = data;
    })
  }

  addCharge() {

    let charge = {
      id_ch: null,
      Designations: this.Designations.value,
      Prix: this.Prix.value,
    
    }

    this.api.createCharge(charge).subscribe(() => {
      console.log('added');
      this.loadCharges();
    });
  }
  deleteChage(id_ch){
    this.api.deleteCharge(id_ch).subscribe(()=>{
      console.log('deleted');
      this.loadCharges();
      
    });
  }
  getCurrentCharge(id_ch){
    this.api.getChargeById(id_ch).subscribe((data4)=>{
          this.data4 =data4[0];
          console.log(data4);})}
    
          // update Action
      updateCharge(){
        this.Designations.setValue(this.data4.Designations);
        this.Prix.setValue(this.data4.Prix);
    
    
       let charge = {
        id_ch: this.data4.id_ch,
        Designations: this.Designations.value,
        Prix: this.Prix.value,
         
         };
          console.log(charge);
    
          this.api.updateCharge( charge).subscribe(() => {
          console.log(charge);
         this.loadCharges(); });
        
      }


}