import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacturationService } from '../services/facturation.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addhonoraire',
  templateUrl: './addhonoraire.component.html',
  styleUrls: ['./addhonoraire.component.css']
})
export class AddhonoraireComponent  implements OnInit {
  headersTable=['Reference','Designation','Prix','edit'];
  data: any = [];
  data4: any = [];

  dataCorrective: any = [];

  Reference = new FormControl('');
  Designation = new FormControl('');
  Prix = new FormControl('');
  
  constructor(private api: FacturationService) { }


  ngOnInit(): void {
    this.loadHonoraires();
  }

  loadHonoraires() {
    this.api.getHonoraires().subscribe((data) => {
      this.data = data;
    })
  }

  addHonoraire() {

    let honoraire = {
      id_hon: null,
      Reference: this.Reference.value,
      Designation: this.Designation.value,
      Prix: this.Prix.value,
    
    }

    this.api.createHonoraire(honoraire).subscribe(() => {
      console.log('added');
      this.loadHonoraires();
    });
  }
  deleteHonoraire(id_hon){
    this.api.deleteHonoraire(id_hon).subscribe(()=>{
      console.log('deleted');
      this.loadHonoraires();
      
    });
  }

  getCurrentHonoraire(id_hon){
    this.api.getHonoraireById(id_hon).subscribe((data4)=>{
          this.data4 =data4[0];
          console.log(data4);})}
    
          // update Action
      updateHonoraire(){
        this.Designation.setValue(this.data4.Designation);
        this.Prix.setValue(this.data4.Prix);
        this.Reference.setValue(this.data4.Reference);

    
    
       let honoraire = {
        id_hon: this.data4.id_hon,
        Reference: this.Reference.value,
        Designation: this.Designation.value,
        Prix: this.Prix.value,
         
         };
          console.log(honoraire);
    
          this.api.updateHonoraire(honoraire).subscribe((data) => {
          console.log(data,'ffffffff');
         this.loadHonoraires(); });
        
      }
}