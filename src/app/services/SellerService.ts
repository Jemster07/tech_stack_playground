import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signUpBean } from './data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  constructor(private http: HttpClient, private router: Router) { }

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);

  signUp(data: signUpBean) {
    this.http.post('http://localhost:3000/seller', data, { observe: 'response' }).subscribe((result) => {
      if (result) {
        localStorage.setItem('seller', JSON.stringify(result.body));
      }
    });
  }

  reloadSeller() {
    if(localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
}
