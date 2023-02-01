import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogAlertComponent } from './components/dialog-alert/dialog-alert.component';



@NgModule({
  declarations: [
    DialogAlertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
