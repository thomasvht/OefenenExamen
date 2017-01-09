/**
* @Author: thomasvanhoutte
* @Date:   2017-01-08T12:16:53+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-08T19:41:17+01:00
*/



import { Component } from '@angular/core';
import { TellingComponent } from './telling/telling.component';
import { WaarnemingComponent } from './waarneming/waarneming.component';
import { MetadataService } from './services/metadata.service';
import { WaarnemingService } from './services/waarneming.service';


@Component({
  selector: 'my-app',
  providers: [MetadataService, WaarnemingService],
  templateUrl: 'app/template/app.component.html'
})
export class AppComponent  { title = 'Oefening VogelTelling Gent'; }
