import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DisplayPassowrdComponent } from './display-passowrd/display-passowrd.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayPassowrdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
