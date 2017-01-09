/**
* @Author: thomasvanhoutte
* @Date:   2017-01-08T12:30:30+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-08T17:50:24+01:00
*/



import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Telling } from "../models/telling.model";
import 'rxjs/add/operator/map';

@Injectable()
export class MetadataService {
  private baseUrl: string = "https://datatank.stad.gent/4/milieuennatuur/vogeltellingbourgoyenmetadata.json";
  constructor(private http: Http) {

  }

  getMetadataService() {
      return this.http.get("https://datatank.stad.gent/4/milieuennatuur/vogeltellingbourgoyenmetadata.json").map(res => {
          var body = res.json();
          var tellingen = [];
          for(let i = 0; i < body.length; i++){
           var telling = {
             id: body[i]["Telling ID"],
             waarnemer: body[i]["waarnemer"],
             datum: body[i]["Datum"]
           };
           tellingen.push(telling);
          }
          console.info("getMetadataService is triggered. Tellingen array should be filled.");
          return tellingen;
      });
  }
}
