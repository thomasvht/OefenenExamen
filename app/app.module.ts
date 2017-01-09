/**
* @Author: thomasvanhoutte
* @Date:   2017-01-08T12:16:53+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-08T19:42:28+01:00
*/



import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { TellingComponent } from './telling/telling.component';
import { WaarnemingComponent } from './waarneming/waarneming.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, TellingComponent, WaarnemingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
