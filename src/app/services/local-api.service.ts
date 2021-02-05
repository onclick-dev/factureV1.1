import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Client } from './dataClass';
import { Honoraire } from './dataClass';
import { Charge } from './dataClass';
import { Change } from './dataClass';

import { Transaction } from './dataClass';


import { Facture } from './dataClass';

import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalApiService {
  //apiURL = 'https://lteadmin.herokuapp.com';
  apiURL = 'http://localhost:3000';
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  // Transaction API____________________________________

  public getTransactions(apiRoute): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiURL + apiRoute)
      .pipe(
        retry(1),
      )
  }

  public createTransaction(transaction, apiRoute): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiURL + apiRoute, JSON.stringify(transaction), this.httpOptions)
      .pipe(
        retry(1),
      )
  }

  public updateTransaction(id_transaction,transaction, apiRoute): Observable<Transaction> {
    return this.http.put<Transaction>(this.apiURL + apiRoute + '/' + id_transaction, JSON.stringify(transaction), this.httpOptions)
      .pipe(
        retry(1),
      )
  }

  getTransactionById(id, apiRoute): Observable<Transaction> {
    return this.http.get<Transaction>(this.apiURL + apiRoute + '/' + id ,this.httpOptions);
  }
  getTransactiontByclient(client, apiRoute): Observable<Transaction> {
    return this.http.get<Transaction>(this.apiURL + apiRoute + '/' +'?client='+ client ,this.httpOptions);
  }
  // CHANGES API __________________________________
  public getChanges(apiRoute): Observable<Change[]> {
    return this.http.get<Change[]>(this.apiURL + apiRoute)
      .pipe(
        retry(1),
      )
  }

  public createChange(change, apiRoute): Observable<Change> {
    return this.http.post<Change>(this.apiURL + apiRoute, JSON.stringify(change), this.httpOptions)
      .pipe(
        retry(1),
      )
  }
  getChangetByclient(client, apiRoute): Observable<Change> {
    return this.http.get<Change>(this.apiURL + apiRoute + '/' +'?client='+ client ,this.httpOptions);
  }

  // client API_________________________________________________
  public getClients(apiRoute): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiURL + apiRoute)
      .pipe(
        retry(1),
      )
  }

  public createClient(client, apiRoute): Observable<Client> {
    return this.http.post<Client>(this.apiURL + apiRoute, JSON.stringify(client), this.httpOptions)
      .pipe(
        retry(1),
      )
  }


  deleteClient(id_client, apiRoute) {
    return this.http.delete<Client>(this.apiURL + apiRoute + '/' + id_client, this.httpOptions)
      .pipe(
        retry(1),
      )
  }

  public updateClient(id_client, client, apiRoute): Observable<Client> {
    return this.http.put<Client>(this.apiURL + apiRoute + '/' + id_client, JSON.stringify(client), this.httpOptions)
      .pipe(
        retry(1),
      )
  }

  getClientById(id, apiRoute): Observable<Client> {
    return this.http.get<Client>(this.apiURL + apiRoute + '/' + id ,this.httpOptions);
}


// Honoraire API_______________________________________________________
  public getHonoraires(apiRoute): Observable<Honoraire[]> {
    return this.http.get<Honoraire[]>(this.apiURL + apiRoute)
      .pipe(
        retry(1),
      )
  }

  public createHonoraire(honoraire, apiRoute): Observable<Honoraire> {
    return this.http.post<Honoraire>(this.apiURL + apiRoute, JSON.stringify(honoraire), this.httpOptions)
      .pipe(
        retry(1),
      )
  }

  deleteHonoraire(id_hon, apiRoute) {
    return this.http.delete<Honoraire>(this.apiURL + apiRoute + '/' + id_hon, this.httpOptions)
      .pipe(
        retry(1),
      )
  }
 
  public updateHonoraire(id_hon, honoraire, apiRoute): Observable<Honoraire> {
    return this.http.put<Honoraire>(this.apiURL + apiRoute + '/' + id_hon, JSON.stringify(honoraire), this.httpOptions)
      .pipe(
        retry(1),
      )
  }

  getHonoraireById(id, apiRoute): Observable<Honoraire> {
    return this.http.get<Honoraire>(this.apiURL + apiRoute + '/' + id ,this.httpOptions);
  }
  
  getHonorairetById(id, apiRoute): Observable<Honoraire> {
    return this.http.get<Honoraire>(this.apiURL + apiRoute + '/' + id ,this.httpOptions);
  }
  

// facture API________________________________________

  public getFactures(apiRoute): Observable<Facture[]> {
    return this.http.get<Facture[]>(this.apiURL + apiRoute)
      .pipe(
        retry(1),
      )
  }

  public createFacture(facture, apiRoute): Observable<Facture> {
    return this.http.post<Facture>(this.apiURL + apiRoute, JSON.stringify(facture), this.httpOptions)
      .pipe(
        retry(1),
      )
  }
  public newFacture(facture): Observable<Facture> {
    return this.http.post<Facture>(this.apiURL + '/factures', JSON.stringify(facture), this.httpOptions)
      .pipe(
        retry(1),
      )
  }
  getFacturetByclient(Societe, apiRoute): Observable<Facture> {
    return this.http.get<Facture>(this.apiURL + apiRoute + '/' +'?Societe='+ Societe ,this.httpOptions);
  }
 
  deleteFacture(id, apiRoute) {
    return this.http.delete<Facture>(this.apiURL + apiRoute + '/' + id, this.httpOptions)
      .pipe(
        retry(1),
      )
  }

  getFactureById(id, apiRoute): Observable<Facture> {
    return this.http.get<Facture>(this.apiURL + apiRoute + '/' + id ,this.httpOptions);
  }


// charges API____________________________________

  public getCharges(apiRoute): Observable<Charge[]> {
    return this.http.get<Charge[]>(this.apiURL + apiRoute)
      .pipe(
        retry(1),
      )
  }

  public createCharge(charge, apiRoute): Observable<Charge> {
    return this.http.post<Charge>(this.apiURL + apiRoute, JSON.stringify(charge), this.httpOptions)
      .pipe(
        retry(1),
      )
  }


getChargeById(id, apiRoute): Observable<Charge> {
  return this.http.get<Charge>(this.apiURL + apiRoute + '/' + id ,this.httpOptions);
}


  deleteCharge(id, apiRoute) {
    return this.http.delete<Charge>(this.apiURL + apiRoute + '/' + id, this.httpOptions)
      .pipe(
        retry(1),
      )
  }

  public updateCharge(id_charge,charge, apiRoute): Observable<Charge> {
    return this.http.put<Charge>(this.apiURL + apiRoute + '/' + id_charge, JSON.stringify(charge), this.httpOptions)
      .pipe(
        retry(1),
      )
  }



}
