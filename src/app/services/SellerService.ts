import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signUpBean } from './data-type';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  constructor(private http: HttpClient) {}

  signUp(data: signUpBean) {
    return this.http.post('http://localhost:3000/seller', data);
  }
}
