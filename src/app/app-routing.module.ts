import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactivePracticeComponent } from './reactive-practice/reactive-practice.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { TemplatePracticeComponent } from './template-practice/template-practice.component';

const routes: Routes = [
  //{path : '',component:AppComponent},
  {path : 'template-forms',component : TemplateFormsComponent},
  {path : 'reactive-forms',component : ReactiveFormsComponent},
  {path : 'template-practice',component : TemplatePracticeComponent},
  {path : 'reactive-practice',component : ReactivePracticeComponent},
  {path : 'filter-pipe',component : FilterPipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
