import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { PastOrdersComponent } from './pages/past-orders/past-orders.component';

export const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: '', component: ProductsListComponent },
      { path: 'cart', component: CartComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'past-orders', component: PastOrdersComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];
