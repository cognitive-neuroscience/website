import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    CommonModule
  ],
  exports: [
    MatCardModule
  ]
})
export class MaterialModule { }
