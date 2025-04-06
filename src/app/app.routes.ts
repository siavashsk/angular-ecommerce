import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: '', component: ProductsListComponent },
      { path: 'cart', component: CartComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];
