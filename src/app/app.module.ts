import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule, ConfirmationService, ButtonModule, InputTextModule, AutoCompleteModule } from 'primeng/primeng';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { TypeaheadComponent } from './typeahead/typeahead.component'; 
import { Http, HttpModule } from '@angular/http';
import { TypeaheadServiceService } from "app/typeahead/typeahead-service.service";


@NgModule({
  declarations: [
    AppComponent,
    TypeaheadComponent
 
  ],
  imports: [
    BrowserModule,BrowserModule, InputTextModule,ButtonModule,ConfirmDialogModule,BrowserAnimationsModule,AutoCompleteModule,FormsModule, HttpModule, ConfirmDialogModule
  ],
  providers: [ConfirmationService,TypeaheadServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
