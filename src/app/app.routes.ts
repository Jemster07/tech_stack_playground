import { Routes } from '@angular/router';
import { AuthGuard } from './auth-guard';
import { Home } from './home/home';
import { SellerRegister } from './seller-register/seller-register';
import { SellerHome } from './seller-home/seller-home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'seller-register', component: SellerRegister },
  { path: 'seller-home', canActivate: [AuthGuard], component: SellerHome }
];
