import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Circuits } from 'app/list-circuits-page/Circuits'

import '../rxjs-operators';

@Injectable()
export class ListCircuitsServices {

  private baseUrl: string = 'http://ergast.com/api/f1/2016/circuits.json';
  constructor(private http : Http){}

  getData() {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

        private extractData(res:Response) {
          let body = res.json();
          return body || [];
    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); 
        return Observable.throw(errMsg);
    }
}
