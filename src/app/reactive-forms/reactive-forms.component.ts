import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  genders = ['Male', 'Female'];
  restrictedUsernames = ['admin', 'manager', 'lead', 'ceo'];

  signUpForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({

      'username': new FormControl('', [Validators.required, Validators.minLength(3), this.isRestrictedNames.bind(this)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'gender': new FormControl(''),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.signUpForm.reset();
  }

  get fc() {
    return this.signUpForm.controls;
  }
  addHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  get hobbyControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  isRestrictedNames(control: FormControl)  {
    if (this.restrictedUsernames.includes(control.value)) {
      return { nameIsRestricted: true };
    }
    return null;
  }

}
