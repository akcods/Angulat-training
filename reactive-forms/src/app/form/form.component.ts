import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  PAFType = 'internal';
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  updateName() {
    console.log(this.profileForm.value, this.PAFType);
  }

  public handlePAFTypeChange(e:any):void{
    this.PAFType = e.target.id;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
