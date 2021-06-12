import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-practice',
  templateUrl: './template-practice.component.html',
  styleUrls: ['./template-practice.component.css']
})
export class TemplatePracticeComponent implements OnInit {

@ViewChild('templateForm') signUpForm !: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(data : NgForm){
    console.log(data);
    console.log(data.value);
  }

  onfillDetails(){
    this.signUpForm.form.setValue({
      username : 'ganesh',
      email : 'ganeshbabu@gmail.com',
      password : 'ganeshbabu',
      gender : 'male'
    })
  }

}
