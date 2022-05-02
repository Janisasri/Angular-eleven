import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
     //data-model
     customerModel: any;
  constructor() { 
    console.log("Customer form loaded");
  }

  ngOnInit(): void {
    this.customerModel = {
      firstName: 'Steve',
      lastName: 'Jobs',
      email: 'steve.Jobs@goodplace.com'
    }
  }
  saveCustomer(customerFormGroup:any ) {
    if(customerFormGroup.valid) {
      console.log(customerFormGroup.value);
    }
  }

}
