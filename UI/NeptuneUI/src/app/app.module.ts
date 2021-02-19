import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeverageComponent } from './beverage/beverage.component';
import { ShowBeverageComponent } from './beverage/show-beverage/show-beverage.component';
import { AddEditBeverageComponent } from './beverage/add-edit-beverage/add-edit-beverage.component';
import { BeveragetypeComponent } from './beveragetype/beveragetype.component';
import { ShowBeveragetypeComponent } from './beveragetype/show-beveragetype/show-beveragetype.component';
import { AddEditBeveragetypeComponent } from './beveragetype/add-edit-beveragetype/add-edit-beveragetype.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BeverageComponent,
    ShowBeverageComponent,
    AddEditBeverageComponent,
    BeveragetypeComponent,
    ShowBeveragetypeComponent,
    AddEditBeveragetypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
