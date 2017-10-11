import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {of}from 'rxjs/observable/of';


import {Address, addresses} from './address';

@Injectable()

export class AddressService {

  getAddresses():Observable<Address[]>{
    return of (addresses);
  }

  updateAddress(address:Address):Observable<Address>{
    const oldAddress = addresses.find(a=>a.id===address.id);

    const newAddress = Object.assign(oldAddress,address);

    return of(newAddress);

  }
}
