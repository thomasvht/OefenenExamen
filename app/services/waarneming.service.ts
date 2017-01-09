/**
* @Author: thomasvanhoutte
* @Date:   2017-01-08T12:30:43+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-09T10:13:56+01:00
*/



import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Waarneming } from "../models/waarneming.model";
import 'rxjs/add/operator/map';

@Injectable()
export class WaarnemingService {
  private baseUrl: string = "https://datatank.stad.gent/4/milieuennatuur/vogeltellingbourgoyenwaarneming.json";
  constructor(private http: Http) {

  }

  getWaarnemingService() {
      return this.http.get("https://datatank.stad.gent/4/milieuennatuur/vogeltellingbourgoyenwaarneming.json").map(res => {
          var body = res.json();
          var id = "1";
          var ID = "Telling ID " + id;
          var waarnemingen = [];
          for(let i = 0; i < body.length; i++){
           var waarneming = {
             vogelsoort: body[i]["Vogelsoort"],
             aantal: body[i][ID]
           };
           if(waarneming.aantal == ""){
             waarneming.aantal = 0;
           }
           waarnemingen.push(waarneming);
          }
          console.info("getWaarnemingService is triggered. Waarnemingen array should be filled.");
          return waarnemingen;
      });
  }
}
