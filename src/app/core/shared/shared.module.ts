import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FullCalendarModule } from 'primeng/fullcalendar'

import { NotFoundComponent } from './components/not-found/not-found.component';
import { DatePickerComponent } from './components/datepicker/datepicker.component';
@NgModule ({

  imports: [
    HttpClientModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FullCalendarModule

  ],
  declarations: [
    NotFoundComponent,
    DatePickerComponent
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FullCalendarModule,

    NotFoundComponent,
    DatePickerComponent,
  ],
  providers:[]

})

export class SharedModule {
   constructor() {}
}
