import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacturationService } from '../services/facturation.service';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-facturecli',
  templateUrl: './facturecli.component.html',
  styleUrls: ['./facturecli.component.css']
})
export class FacturecliComponent implements OnInit {

  public form: FormGroup;
  public changeList: FormArray;

  headersTable = ['client', 'created_at', 'Details'];
  headers = ['payee', 'reste', 'nouveau_solde', 'created_at'];
  idtran: number;



  transaction: any = {
    id: '',
    client: '',
    Date_creation: ''
  }

  change: any = {
    id: '',
    id_tr: '',
    payee: '',
    reste: '',
    nouveau_solde: '',
    Date: ''
  }

  dataCorrective: any = [];
  data: any = [];
  data2: any = [];
  data3: any = [];
  data4: any = [];

id_tr:any;
  cli: any;
  nouveau_solde: any;


  client = new FormControl('');
  Date_creation = new FormControl('');

  reste: any;
  payee: any;
  Date: any;
  ancien_solde: any;





  constructor(private api: FacturationService) { }



  ngOnInit(): void {


    this.loadTransactions();



    this.getClient;


  }

  loadTransactions() {
    this.api.getTransactions().subscribe((data) => {
      this.data = data;
    })
  }



  addTransaction() {

    let transaction = {
      id: null,
      client: this.client.value,
      Date_creation: this.Date_creation.value


    }

    this.api.createTransaction(transaction).subscribe(() => {
      console.log('added');
      this.loadTransactions();
    });
  }




  // triggered to change validation of value field type




  // method triggered when form is submitted
  addChanges() {

    this.id_tr = this.id_tr;
    this.payee = this.payee;
    this.reste = this.reste;
    this.ancien_solde = this.ancien_solde;



    this.nouveau_solde = (parseFloat(this.ancien_solde) + parseFloat(this.payee)) - parseFloat(this.reste);
    this.Date = this.Date;


    let change = {
      id: null,
      id_tr: this.data3.id_tr,
      payee: this.payee,
      reste: this.reste,
      nouveau_solde: this.nouveau_solde,
      Date: this.Date,

    }


    this.api.createChange(change).subscribe(() => {
      window.location.reload();
    });



  }

  getIdTransaction(id) {
    this.idtran = id;
  }
  getClient(id_tr) {

    this.api.getTransactiontByclient(id_tr).subscribe((data3) => {
      console.log(id_tr);
      this.data3 = data3[0];
      console.log(this.data3);
      return (data3)
    })

    this.api.getChangetByclient(id_tr).subscribe((data2) => {
      console.log(id_tr);
      this.data2 = data2;
    })


  }

  loadChanges() {
    this.api.getChanges().subscribe((data2) => {
      this.data2 = data2;
    })
  }

  closeModal() {
    window.location.reload();

  }


}





