/**
* @Author: thomasvanhoutte
* @Date:   2017-01-08T14:19:55+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-09T10:15:34+01:00
*/



import { Component, OnInit } from '@angular/core';
import { Telling } from '../models/telling.model';
import { MetadataService } from '../services/metadata.service';

@Component({
  selector: 'telling',
  //template: require('telling.component.view.html')
  //templateUrl: './telling.component.view.html'
  template: `
  <div class="tellingen">
    <h3>Tellingen</h3>
    <table *ngFor="let telling of tellingen; let i=index" class="{{telling.id}}" (click)="changeID($event)">
    <tr class="t{{telling.id % 2}}">
    <td class="datum" id="{{telling.id}}">{{telling.datum}}</td>
    <td class="waarnemer" id="{{telling.id}}">{{telling.waarnemer}}</td>
    </tr>
    </table>
  </div>
  `
})

export class TellingComponent implements OnInit {
  errorMsg: string;
  tellingen: Telling[];

  constructor(public metadataService: MetadataService) { }

  getTellingen(metadataService: MetadataService) {
    return metadataService.getMetadataService().map((tellingen) => {
      this.tellingen = tellingen;
    });
  }

  ngOnInit() {
    this.getTellingen(this.metadataService).subscribe(_ => {
      ;
    });
  }

  changeID(obj: Object){
    var dataValue = obj.target.attributes.id.nodeValue;
    console.info(dataValue);
  }

}
