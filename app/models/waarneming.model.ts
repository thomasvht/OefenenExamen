/**
* @Author: thomasvanhoutte
* @Date:   2017-01-08T12:31:54+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-08T12:50:41+01:00
*/




export class Waarneming{
  constructor(public vogelsoort: any, public aantal: any){

  }
}

export class WaarnemingService extends Waarneming{
  constructor(vogelsoort:any, aantal:any){
    super(vogelsoort, aantal);
  }
}
