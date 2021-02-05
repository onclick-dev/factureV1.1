import { Component, OnInit } from '@angular/core';
import { LocalApiService } from '../services/local-api.service';
import { FormArray, FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';





@Component({
  selector: 'app-addfacture',
  templateUrl: './addfacture.component.html',
  styleUrls: ['./addfacture.component.css']
})
export class AddfactureComponent   implements OnInit {
  public form: FormGroup;
  public honoraireList: FormArray;

  // returns all form groups under contacts
  get honoraireFormGroup() {
    return this.form.get('honoraires') as FormArray;
  }

  constructor(private fb: FormBuilder,private api: LocalApiService) {}

  ngOnInit() {
    this.form = this.fb.group({
      Numero: [null],
      date: [null],
      Societe: [null],
      adresse: [null],
      unique: [null],
      honoraires: this.fb.array([this.createHonoraire()]),
      statut: [null],
      apii: [null],
      reservation: [null],
      contrat: [null],
      rne: [null],
      rc: [null],
      douane: [null],
      totalcharge: [null],
      STHonoraires: [null],
      STHon: [null],
      REMISE: [null],
      sous_total: [null],
      ttva: [null],
      total: [null],
      enlettre: [null]
    });

    // set contactlist to this field
    this.honoraireList = this.form.get('honoraires') as FormArray;
  }

  // contact formgroup
  createHonoraire(): FormGroup {
    return this.fb.group({
      ref: [null],
      des: [null],
      prix: [null],
    });
  }

  // add a contact form group
  addHonoraire() {
    this.honoraireList.push(this.createHonoraire());
  }

  // remove contact from group
  removeHonoraire(index) {
    // this.contactList = this.form.get('contacts') as FormArray;
    this.honoraireList.removeAt(index);
  }

  // triggered to change validation of value field type


  // get the formgroup under contacts form array
  getHonorairesFormGroup(index): FormGroup {
    // this.contactList = this.form.get('contacts') as FormArray;
    const formGroup = this.honoraireList.controls[index] as FormGroup;
    return formGroup;
  }

  // method triggered when form is submitted
  submit(apiRoute) {
    console.log(this.form.value);
        this.api.createFacture(this.form.value,apiRoute).subscribe(() => {
      console.log('added');
    });
  }
}
