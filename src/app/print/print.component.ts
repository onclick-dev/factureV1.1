import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FacturationService } from '../services/facturation.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  param: any;
  data: any = [];
  data1: any = [];
  data2: any = [];
  data3: any = [];


  constructor(private api: FacturationService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }
    let param = this.router.snapshot.paramMap.get('id');
    console.log(param);
    this.param = param;
      this.api.getSelectedhonorairetByclient(this.param).subscribe((data1) => {
        this.data1 = data1;
        
    
      })
 

      this.api.getSelectedchargetByclient(this.param).subscribe((data2) => {
        this.data2 = data2;
    
      })
 
    this.api.getFactureById(this.param).subscribe((data) => {
this.data = data[0];
this.api.getClientById(this.data.id_client).subscribe((data3)=> {
  console.log(this.data.id_client,'ffffff');

  this.data3 = data3[0];



})




 })

  }




}
