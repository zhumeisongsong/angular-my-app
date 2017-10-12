import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/map";
import {Product} from "./product";

@Injectable()
export class ProductSearchService {

  constructor(private http: Http) {
  }

  search(term: string): Observable<Product[]> {
    const url = `api/products/?name=${term}`;
    return this.http.get(url)
      .map(response => response.json().data as Product[]);
  }
}
