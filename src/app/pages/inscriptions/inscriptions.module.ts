import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionsIndexComponent } from './inscriptions-index/inscriptions-index.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: InscriptionsIndexComponent
  }
];


@NgModule({
  declarations: [
    InscriptionsIndexComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InscriptionsModule { }
