import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';

@Injectable()
export class DriversListService {

  private baseUrl: string = 'http://ergast.com/api/f1/2016/driverStandings.json';
  constructor(private http : Http){}
 
  getDriver() {
    return this.http.get(this.baseUrl)
    .map((res:Response) => res.json())
  }
  

}
