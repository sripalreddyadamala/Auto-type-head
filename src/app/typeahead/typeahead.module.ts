import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeaheadComponent } from "app/typeahead/typeahead.component";
import { TypeaheadServiceService } from "app/typeahead/typeahead-service.service";
 import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

 import { Http, HttpModule } from '@angular/http';
 import { ButtonModule, ConfirmDialogModule, AutoCompleteModule, InputTextModule, ConfirmationService } from "primeng/primeng";
 import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
 @NgModule({
  imports: [
        BrowserModule,
    CommonModule,      
    FormsModule,
    HttpModule,
     InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    AutoCompleteModule
  ],
  providers:[TypeaheadServiceService,ConfirmationService],
  declarations: [TypeaheadComponent]
})
export class TypeaheadModule { }
