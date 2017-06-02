import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule, MdButtonModule} from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { PalindromeComponent } from './palindrome/palindrome.component';

@NgModule({
  declarations: [
    AppComponent,
    PalindromeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  	MdInputModule,
  	MdButtonModule,
  	RouterModule.forRoot([
  	{
    	path: 'find',
    	component: PalindromeComponent
  	}
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
