import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { DatePickerComponent } from './components/datepicker/datepicker.component';


@NgModule ({

  imports: [
    HttpClientModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    NotFoundComponent,
    DatePickerComponent,
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    NotFoundComponent,
    DatePickerComponent,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers:[]

})

export class SharedModule {
   constructor() {}
}
