import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { 'rxjs/add/operator/toPromise' };

@Injectable()

export class PhoneService {
  BASE_URL: String = 'http://localhost:3000';

  constructor( private myHttp: Http ) {}

  getList() {
    return this.myHttp.get( `${ this.BASE_URL }/api/phones`)
      .toPromise()
      .then( apiResponse => apiResponse.json() )
  }

  get( id ) {
    return this.myHttp.get( `${ this.BASE_URL }/api/phones/${ id }`)
      .toPromise()
      .then( apiReponse => apiRepsonse.json() )
  }
}