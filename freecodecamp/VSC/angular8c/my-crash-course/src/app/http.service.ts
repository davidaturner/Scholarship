import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  http: HttpClient;
  constructor(http: HttpClient) { this.http = http }

  getBreweries() {
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }
}
