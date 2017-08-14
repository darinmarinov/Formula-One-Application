import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';

@Injectable()
export class ConstructorsListService {

  private baseUrl: string = 'http://ergast.com/api/f1/2016/constructors.json ';
  constructor(private http : Http){}
 
  getConstructors() {
    return this.http.get(this.baseUrl)
    .map((res:Response) => res.json())
  }
  

}
