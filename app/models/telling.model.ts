/**
* @Author: thomasvanhoutte
* @Date:   2017-01-08T12:32:14+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-08T15:31:20+01:00
*/




export class Telling{
  constructor(public id: number, public waarnemer: string, public datum: any){

  }
}

export class MetadataService extends Telling{
  constructor(id:number, waarnemer:string, datum:any){
    super(id, waarnemer, datum);
  }
}
