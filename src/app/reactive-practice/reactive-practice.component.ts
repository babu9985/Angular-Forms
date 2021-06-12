import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-practice',
  templateUrl: './reactive-practice.component.html',
  styleUrls: ['./reactive-practice.component.css']
})
export class ReactivePracticeComponent implements OnInit {

  signUpForm !: FormGroup;
  restrictedUserNames = ['manager','login','admin'];

  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username : new FormControl('',[Validators.required,Validators.minLength(3),this.isRestrictedUserNames.bind(this)]),
      email : new FormControl('',[Validators.required,Validators.email]),
      addRow : new FormArray([])
    });
  }

  onSubmit(){
    console.log(this.signUpForm.value);
  }

  get formControls(){
    return this.signUpForm.controls;
  }

  addRow(){
    const control = new FormControl('',Validators.required);
    (<FormArray>this.signUpForm.get('addRow')).push(control);
  }

  get addRowControls(){
    return (<FormArray>this.signUpForm.get('addRow')).controls;
  }

  isRestrictedUserNames(control : FormControl){
    if(this.restrictedUserNames.includes(control.value)){
      return {nameRestricted : true};
    }
    return null;
  }

}
