import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // not sure about that
import { RouterModule, Routes } from '@angular/router';


import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'first', component:  AppComponent},
  { path: '',   redirectTo: '/tutorial', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
