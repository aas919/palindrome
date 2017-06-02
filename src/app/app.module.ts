import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule, MdButtonModule} from '@angular/material';
import { AppComponent } from './app.component';
import { PalindromeComponent } from './palindrome/palindrome.component';

@NgModule({
  declarations: [
    AppComponent,
    PalindromeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  	MdInputModule,
  	MdButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
