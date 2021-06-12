import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-forms-leela-dev';
  username : any;
  firstnames : any;
  mySecondName : any;
  formname : any;
  inputEventName : any;

  public sampleForm !: FormGroup;

  @ViewChild('secondname') secondNameElement : ElementRef;

  constructor(seconNameElement : ElementRef){
    this.secondNameElement = seconNameElement;

    this.sampleForm = new FormGroup({
      name : new FormControl('')
    })
    
  }

  clickme(){
    this.formname = this.sampleForm.get('name')?.value;
  }

  inputEvent(event : any){
    this.inputEventName = event.target.value;
  }

  onSecondName(){
    this.mySecondName = this.secondNameElement.nativeElement.value;
    console.log(this.mySecondName);
    this.getNameById();
  }
  onFirstname(firstname : any){
    firstname = "Muni Ganesh Babu";
    this.firstnames = firstname;
  }

  getNameById(){
    const msd = (<HTMLInputElement>document.getElementById('secondname')).value;
    console.log(msd);
  }
}
