import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/toPromise';

import {Address} from './address';

@Injectable()

export class AddressService {

  private headers = new Headers({
    'Content-Type': 'application/json'
  });
  private addressUrl = 'api/addresses';

  constructor(private http: Http) {
  }


  getAddresses(): Observable<Address[]> {
    return this.http.get(this.addressUrl)
      // .toPromise()//返回的是RxJS的Observable可观察对象
      .map(response => response.json().data as Address[])
      .catch(this.handleError);
  }


  // updateAddress(address: Address): Observable<Address> {
  //     const oldAddress = addresses.find(a => a.id === address.addressId);
  //
  //     const newAddress = Object.assign(oldAddress, address);
  //
  //     return of(newAddress);
  // }

  private handleError(error: any): Promise<any> {
    //TODO:just for demo error meg
    console.error('An error occurred');
    return Promise.reject(error.message || error);
  }
}
