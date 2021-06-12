import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  @ViewChild('templateForm') signUpForm !: NgForm;
  about ='';

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    console.log(this.signUpForm.value);
    console.log(this.signUpForm.value.userData.gender);
  }

  fillValues(){
    this.signUpForm.form.patchValue({
      username : 'Muni Ganesh Babu',
      email : 'ganeshbabu@gmail.com',
      userData : {
        gender : 'male',
        // about : 'He is a Learner of Angular Course'
      }
    });
  }

}
