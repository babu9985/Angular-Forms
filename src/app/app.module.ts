import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplatePracticeComponent } from './template-practice/template-practice.component';
import { CommonModule } from '@angular/common';
import { ReactivePracticeComponent } from './reactive-practice/reactive-practice.component';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    TemplatePracticeComponent,
    ReactivePracticeComponent,
    FilterPipesComponent,
    FilterPipeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
