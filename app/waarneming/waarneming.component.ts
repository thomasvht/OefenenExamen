/**
* @Author: thomasvanhoutte
* @Date:   2017-01-08T19:30:48+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-08T19:47:13+01:00
*/



import { Component, OnInit } from '@angular/core';
import { Waarneming } from '../models/waarneming.model';
import { WaarnemingService } from '../services/waarneming.service';

@Component({
  selector: 'waarneming',
  //template: require('telling.component.view.html')
  //templateUrl: './telling.component.view.html'
  template: `
  <div class="waarnemingen">
    <h3>Waarnemingen</h3>
    <div *ngFor="let waarneming of waarnemingen; let i=index" class="waarneming">
      <p class="vogelsoort">{{waarneming.vogelsoort}}</p>
      <p class="aantal">{{waarneming.aantal}}</p>
    </div>
  </div>
  `
})

export class WaarnemingComponent implements OnInit {
  errorMsg: string;
  waarnemingen: Waarneming[];

  constructor(public waarnemingService: WaarnemingService) { }

  getWaarnemingen(waarnemingService: WaarnemingService) {
  return waarnemingService.getWaarnemingService().map((waarnemingen) => {
      this.waarnemingen = waarnemingen;
    });
  // users => this.users = users,
  // error => this.errorMsg = <any>error);
}

ngOnInit() {
  this.getWaarnemingen(this.waarnemingService).subscribe(_ => {;
  });
}
}
