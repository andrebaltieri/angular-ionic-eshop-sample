import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  createCustomer(data: any) {
    return this.http.post(`${environment.apiUrl}v1/account`, data);
  }

  auth(data: any) {
    return this.http.post(`${environment.apiUrl}v1/account/login`, data);
  }
}
