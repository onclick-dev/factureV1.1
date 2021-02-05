import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FacturationService } from '../services/facturation.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



declare const NumberToLetter: any;


@Component({
  selector: 'app-listefacture',
  templateUrl: './listefacture.component.html',
  styleUrls: ['./listefacture.component.css']
})

export class ListefactureComponent implements OnInit {
  frac: any;
  lettre: any;
  id_client: any;
  total: number;
  ttva: number;
  STotal: number;
  STHonoraires: number;
  totalcharge: any;
  totalho: any;
  num: any;
  num2: any;
  num3: any;



  REMISE: number;
  STHon: number;
  clienttva: number;
  Numero: number;
  date: string;
  options = [
    { value: '1', label: 'Cheque' },
    { value: '2', label: 'Virement' },
    { value: '3', label: 'Espece' },
  ];

  client: any = {
    id_client: '',
    Societe: '',
    I_unique: '',
    Adresse: '',
    TVA: ''
  }
  honoraire: any = {
    id_hon: '',
    Reference: '',
    Designation: '',
    Prix: ''
  }
  selectedHonoraire: any = {
    id_hon: '',
    ref: '',
    designation: '',
    price: ''
  }
  charge: any = {
    id_ch: '',
    Designation: '',
    Prix: ''
  }
  selectedCharge: any = {
    id_ch: '',
    descriptions: '',
    prices: ''
  }
  selectedCharges: any[] = [];
  selectedItems: any[] = [];
  data1: any = [];
  data2: any = [];
  data3: any = [];
  data5: any = [];
  data4: any = [];
  data6: any = [];
  data7: any = [];
  data9: any = [];

  data8: any ;



  dataCorrective: any = [];
  idClient: number;
  idHon: number;
  idCharge: number;
  ClientSelected: Number;
  id: any;
  e: any;
  payement: string;

  Prix = new FormControl('');
  Designations = new FormControl('');
  totals = new FormControl('');





  constructor(private api: FacturationService, private router: Router) { }




  ngOnInit(): void {
    this.loadHonoraires();
    this.loadCharges();
    this.loadClients()
    this.getCurrentClientInformation;
    this.getHonId;
  this.loadSelectedhonoraires;
  this.loadSelectedcharges;



  }
  loadHonoraires() {
    this.api.getHonoraires().subscribe((data1) => {
      this.data1 = data1;
    })
  }
  loadSelectedhonoraires(id_facture) {
    this.api.getSelectedhonorairetByclient(id_facture).subscribe((data6) => {
      this.data6 = data6;
      
    })
  }
  loadSelectedcharges(id_facture) {
    this.api.getSelectedchargetByclient(id_facture).subscribe((data7) => {
      this.data7 = data7;

    })
  }

  getHonId(e, id_hon) {
    this.api.getHonoraireById(id_hon).subscribe((honoraire) => {
      this.honoraire = honoraire;
      this.totalcharge = 0;

      if (e.target.checked) {
        this.api.getHonoraireById(id_hon).subscribe((honoraire) => {
          this.honoraire = honoraire;

          this.selectedItems.push(honoraire);
        })
        this.totalcharge = this.selectedItems.reduce((sum, currentValue) => {

          return sum + parseInt(currentValue.Prix);

        }, 0);

        return this.totalcharge;


      } else {
        this.api.getHonoraireById(id_hon).subscribe((honoraire) => {
          this.honoraire = honoraire;
        })
        this.selectedItems = this.selectedItems.filter(m => m != honoraire);

      }


      this.honoraire = this.selectedItems;

      this.STHonoraires = this.totalcharge



    })
  }


  getCurrentClientInformation(id_client) {
    this.REMISE = this.REMISE;
this.Numero =this.Numero;
this.payement=this.payement;
console.log(this.payement,'seif');


  


    this.api.getClientById(id_client).subscribe((client) => {

      this.client = client[0];


      this.totalcharge = this.selectedItems.reduce((sum, currentValue) => {
        currentValue = currentValue[0];

        return sum + parseInt(currentValue.Prix);


      }, 0);

      this.totalho = this.selectedCharges.reduce((sum, currentValue) => {
        currentValue = currentValue[0];
        return sum + parseInt(currentValue.Prix);
      }, 0);

      this.STHonoraires = this.totalho;
      this.STotal = this.totalcharge - this.REMISE - this.totalho;
      this.STHon = this.totalcharge - this.totalho;
      this.ttva = ((this.STotal * this.client.TVA) / 100);
      this.total = 0.6 + this.STotal + this.ttva;
      this.lettre = Math.trunc(this.total);
      this.frac = Math.trunc((this.total - this.lettre) * 1000);
      this.lettre = NumberToLetter(this.lettre);
      this.data6=this.selectedItems;

      let facture = ({
        id_client: this.id_client,
        Numero: this.Numero,
        payement:this.payement,
        Societe: this.client.Societe,
        Adresse: this.client.Adresse,
        I_unique: this.client.I_unique,
        STotal: this.STotal,
        totalcharge: this.totalcharge,
        STHonoraires: this.STHonoraires,
        STHon: this.STHon,
        frac: this.frac,
        REMISE: this.REMISE,
        sous_total: this.STotal,
        ttva: this.ttva,
        total: this.total,
        enlettre: this.lettre
      });
      let facture2 = ({
        id_cli: this.id_client,
        Numero: this.Numero,
        payement:this.payement,
        Societe: this.client.Societe,
        Adresse: this.client.Adresse,
        I_unique: this.client.I_unique,
        STotal: this.STotal,
        totalcharge: this.totalcharge,
        STHonoraires: this.STHonoraires,
        STHon: this.STHon,
        frac: this.frac,
        REMISE: this.REMISE,
        sous_total: this.STotal,
        ttva: this.ttva,
        total: this.total,
        enlettre: this.lettre
      });

      this.api.createFacture(facture).subscribe((data) => {

        this.num = (this.selectedItems.length );
        for (let i = 0; i < (this.num); i++) {
          this.data4 = this.selectedItems[i];
          this.data4 = this.data4[0];

          let selectedHonoraire = ({
            ref: this.data4.Reference,
            designation: this.data4.Designation,
            price: this.data4.Prix,
            id_facture: data['data']
          });
      
 this.api.createSelectedhonoraire(selectedHonoraire).subscribe(() => {
            console.log('selectedHonoraire added',selectedHonoraire);
            this.loadSelectedhonoraires(data['data']);
          }); }

        this.num2 = (this.selectedCharges.length );
        for (let j = 0; j < (this.num2); j++) {
          this.data5 = this.selectedCharges[j];
          this.data5 = this.data5[0];
          

 let selectedCharge = ({
            descriptions: this.data5.Designations,
            prices: this.data5.Prix,
            id_facture: data['data']
          });

          this.api.createSelectedcharge(selectedCharge).subscribe(() => {
            console.log('selectedCharge added',selectedCharge);
            this.loadSelectedcharges(data['data']);

          }); }

      })

      this.api.createFactureclient(facture2).subscribe((result)=>{
        console.log(result);
        
      })

    })
  }

  loadClients() {
    this.api.getClients().subscribe((data2) => {
      this.data2 = data2;
    })
  }
  loadCharges() {
    this.api.getCharges().subscribe((data3) => {
      this.data3 = data3;
      var STHonoraires = this.data3.reduce((sum, currentValue) => {
        return sum + parseInt(currentValue.Prix);
      }, 0);
      this.STHonoraires = STHonoraires;
      return STHonoraires;

    })
  }

  closeModal() {
    window.location.reload();

  }


  getChaId(e, id_ch) {
    this.api.getChargeById(id_ch).subscribe((charge) => {
      this.charge = charge;
      this.totalho = 0;

      if (e.target.checked) {
        this.api.getChargeById(id_ch).subscribe((charge) => {
          this.charge = charge;

          this.selectedCharges.push(charge);
        })
        let totalho = this.selectedCharges.reduce((sum, currentValue) => {
          return sum + parseInt(currentValue.Prix);
        }, 0);
        return totalho;



      } else {
        this.api.getChargeById(id_ch).subscribe((charge) => {
          this.charge = charge;
        })
        this.selectedCharges = this.selectedCharges.filter(m => m != charge);
      }
      this.charge = this.selectedCharges;

      this.totalho = this.totalho;




    })
  }

  currentDate = new Date();


}
