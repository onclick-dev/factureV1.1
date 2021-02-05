import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

let headers = new HttpHeaders()
headers=headers.set('content-type','application/json')
headers=headers.set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class FacturationService {

  constructor(private http: HttpClient) { }

  // client API_________________________________________________//
  getClients() {

    return this.http.get(environment.base_url + "api/v1/clients");
  }

  deleteClient(id_client) {
    return this.http.delete(environment.base_url + "api/v1/clients/" + id_client);
  }

  createClient(client) {
    return this.http.post(environment.base_url + "api/v1/clients", client);
  }
  getClientById(id_client) {
    return this.http.get(environment.base_url + "api/v1/clients/" + id_client);
  }


  updateClient(client) {
    return this.http.put(environment.base_url + "api/v1/clients/" , client);
  }


  // Transaction API____________________________________//
  getTransactions() {

    return this.http.get(environment.base_url + "api/v1/transactions");
  }
  createTransaction(transaction) {
    return this.http.post(environment.base_url + "api/v1/transactions", transaction);
  }
  getTransactionById(id) {
    return this.http.get(environment.base_url + "api/v1/transactions/" + id);
  }

  getTransactiontByclient(id_tr) {
    return this.http.get(environment.base_url + "api/v1/transactions/" + id_tr);
  }
  updateTransaction(transaction) {
    return this.http.put(environment.base_url + "api/v1/transactions/" , transaction);
  }

  // CHANGES API __________________________________////

  getChanges() {

    return this.http.get(environment.base_url + "api/v1/changes");
  }
  createChange(change) {
    return this.http.post(environment.base_url + "api/v1/changes", change);
  }
  getChangetByclient(id_tr) {
    return this.http.get(environment.base_url + "api/v1/changes/" + id_tr);
  }


  // honoraires API_________________________________________________//
  getHonoraires() {

    return this.http.get(environment.base_url + "api/v1/honoraires");
  }

  deleteHonoraire(id_hon) {
    return this.http.delete(environment.base_url + "api/v1/honoraires/" + id_hon);
  }

  createHonoraire(honoraire) {
    return this.http.post(environment.base_url + "api/v1/honoraires", honoraire);
  }
  getHonoraireById(id_hon) {
    return this.http.get(environment.base_url + "api/v1/honoraires/" + id_hon);
  }


  updateHonoraire(honoraire) {
    return this.http.put(environment.base_url + "api/v1/honoraires/" , honoraire );
  }
  // factures API____________________________________//
  getFactures() {

    return this.http.get(environment.base_url + "api/v1/factures");
  }
  createFacture(facture) {
    return this.http.post(environment.base_url + "api/v1/factures", facture);
  }
  getFactureById(id) {
    return this.http.get(environment.base_url + "api/v1/factures/" + id);
  }

  getFacturetByclient(client) {
    return this.http.get(environment.base_url + "api/v1/factures/" , client);
  }
  updateFacture(facture) {
    return this.http.put(environment.base_url + "api/v1/factures/" , facture);
  }

  // charge API_________________________________________________//
  getCharges() {

    return this.http.get(environment.base_url + "api/v1/charges");
  }

  deleteCharge(id) {
    return this.http.delete(environment.base_url + "api/v1/charges/" + id);
  }

  createCharge(charge) {
    return this.http.post(environment.base_url + "api/v1/charges", charge);
  }
  getChargeById(id) {
    return this.http.get(environment.base_url + "api/v1/charges/" + id);
  }


  updateCharge(charge) {
    return this.http.put(environment.base_url + "api/v1/charges/" , charge);
  }

  // selectedhonoraire API __________________________________////

  getSelectedhonoraires() {

    return this.http.get(environment.base_url + "api/v1/selectedhonoraires");
  }
  createSelectedhonoraire(selectedhonoraire) {
    return this.http.post(environment.base_url + "api/v1/selectedhonoraires", selectedhonoraire);
  }
  getSelectedhonorairetByclient(selectedhonoraire) {
    return this.http.get(environment.base_url + "api/v1/selectedhonoraires/" + selectedhonoraire);
  }

  // selectedhonoraire API __________________________________////

  getSelectedcharges() {

    return this.http.get(environment.base_url + "api/v1/selectedcharges");
  }
  createSelectedcharge(selectedcharge) {
    return this.http.post(environment.base_url + "api/v1/selectedcharges", selectedcharge);
  }
  getSelectedchargetByclient(selectedcharge) {
    return this.http.get(environment.base_url + "api/v1/selectedcharges/" + selectedcharge);
  }

  getFactureclients() {

    return this.http.get(environment.base_url + "api/v1/factureclient");
  }
  createFactureclient(facture) {
    return this.http.post(environment.base_url + "api/v1/factureclient", facture);
  }


  getFactureclientByclient(id_client) {
    return this.http.get(environment.base_url + "api/v1/factureclient/" + id_client);
  }
  updateFactureclient(facture) {
    return this.http.put(environment.base_url + "api/v1/factureclient/" , facture);
  }
}