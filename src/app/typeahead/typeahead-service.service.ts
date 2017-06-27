import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TypeaheadServiceService {
  http: Http;
  states: string[]
  constructor(private _http: Http) {
    this.http = _http;
  }

  getAllStates(): Observable < string[] > {
    return this.http.get('assets/countries.json')
      .map((response: Response) => < string[] > response.json())      
      .catch(this.handleError);
  }
  getState(text: string): Observable < string[] > {
    return this.http.get('assets/countries.json')
      .map((response: Response) => < string[] > response.json().filter(q => q.toLowerCase().startsWith(text.toLowerCase())))     
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error('eeror');
    return Observable.throw(error.json().error || 'Server error');
  }
}


