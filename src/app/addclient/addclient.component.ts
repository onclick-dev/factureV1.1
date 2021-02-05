import { Component, OnInit } from '@angular/core';
import { FacturationService } from '../services/facturation.service';
import { FormControl } from '@angular/forms';
import {Client} from '../services/dataClass';


@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})

export class AddclientComponent implements OnInit {
  headersTable=['Societe','I_unique','Tel','Email','Adresse','Capital','TVA','Forme_juridique','Exonore','Gerant','Fodec','edit'];
  headersTables=['Numero','created_at','print'];
socie: string;
idfac: number;
idnew:number;
lettre:any;
total : number;
ttva : number;
STotal : number;
STHonoraires : number;
totalcharge : any;
REMISE : number;
STHon: number;
clienttva:number;
Numero: number;
date:string;
  data: any = [];
  data2: any = [];
  data3: any = [];
  data4: any = [];
data5:any;
  selectedItems : any[] = [];


  facture :any ={
    id:'',
    Numero: '',
    date:  '',
    total: ''
  }


   client :any ={
    id: '',
    Societe : '',
    I_unique: '',
    Tel: '',
    Email: '',
    Adresse: '',
    Gerant: '',
    Forme_juridique: '',
    Capital: '',
    TVA: '',
    Exonore: '',
    Fodec: '',

  };

  dataCorrective: any = [];


  Societe = new FormControl('');
  I_unique = new FormControl('');
  Tel = new FormControl('');
  Email = new FormControl('');
  Adresse = new FormControl('');
   Gerant = new FormControl('');
  Forme_juridique = new FormControl('');
  Capital = new FormControl('');
  TVA = new FormControl('');
  Exonore = new FormControl('');
  Fodec = new FormControl('');

  constructor(private api: FacturationService) { }
  lstclients: Client[];
  ClientSelected: Number;


  ngOnInit(): void {
    this.loadClients();
    this.getCurrentClient;
  }

  loadClients() {
    this.api.getClients().subscribe((data) => {
      this.data = data;
      this.lstclients = this.data;
    })
  }


  getFacturesClient(id_client){
    console.log(id_client,'seif');

    this.api.getFactureclientByclient(id_client).subscribe((data2)=>{
      console.log(data2,'show');


      this.data2= data2;

        
      })

 }

 imprimer(id){
  this.idfac = id;
  this.api.getFactureById(this.idfac).subscribe((facture)=>{
   this.facture=facture;
})}

  addClient() {

    let client = {
      id: null,
      Societe : this.Societe.value,
      I_unique: this.I_unique.value,
      Tel: this.Tel.value,
      Email: this.Email.value,
      Adresse: this.Adresse.value,
      Gerant: this.Gerant.value,
      Forme_juridique: this.Forme_juridique.value,
      Capital: this.Capital.value,
      TVA: this.TVA.value,
      Exonore: this.Exonore.value,
      Fodec: this.Fodec.value,
    }
    this.api.createClient(client).subscribe(() => {
      console.log('added');
      this.loadClients();
    });
  }

  deleteClient(id_client){
    
    this.api.deleteClient(id_client).subscribe(()=>{
      console.log('deleted');
      this.loadClients();});
  }
  
  closeModal() {
    window.location.reload();}

  getCurrentClient(id_client){

this.api.getClientById(id_client).subscribe((data4)=>{
      this.data4 =data4[0];
      


    })}

      // update Action
  updateClient(){
    
    this.Societe.setValue(this.data4.Societe);
    this.I_unique.setValue(this.data4.I_unique);
    this.Tel.setValue(this.data4.Tel);
    this.Email.setValue(this.data4.Email);
    this.Adresse.setValue(this.data4.Adresse);
     this.Gerant.setValue(this.data4.Gerant);
    this.Forme_juridique.setValue(this.data4.Forme_juridique);
    this.Capital.setValue(this.data4.Capital);
    this.TVA.setValue(this.data4.TVA);
    this.Exonore.setValue(this.data4.Exonore);
    this.Fodec.setValue(this.data4.Fodec);

   let client = {
    id_client: this.data4.id_client,
      Societe : this.Societe.value,
      I_unique: this.I_unique.value,
      Tel: this.Tel.value,
      Email: this.Email.value,
      Adresse: this.Adresse.value,
      Gerant: this.Gerant.value,
      Forme_juridique: this.Forme_juridique.value,
      Capital: this.Capital.value,
      TVA: this.TVA.value,
      Exonore: this.Exonore.value,
      Fodec: this.Fodec.value,
     };
      console.log(client);

      this.api.updateClient( client).subscribe(() => {
      console.log(client);
     this.loadClients(); });
    
  }

}