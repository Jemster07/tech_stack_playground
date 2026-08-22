import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/SellerService';
import { signUpBean } from '../services/data-type';

@Component({
  selector: 'app-seller-register',
  imports: [FormsModule],
  templateUrl: './seller-register.html',
  styleUrl: './seller-register.css',
})
export class SellerRegister implements OnInit {
  constructor(private seller: SellerService) { }

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp_submit(data: signUpBean): void {
    this.seller.signUp(data);
  }
}
