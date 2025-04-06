import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div
      class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center"
    >
      <button class="text-xl" routerLink="/">My Store</button>
      <div class="flex items-center gap-2">
        <app-primary-button
          [label]="'Cart (' + cartService.cart().length + ') '"
          (btnClicked)="showButtonClicked()"
          routerLink="/cart"
        />
        <button class="text-xl cursor-pointer" routerLink="/profile">
          Profile
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  cartService = inject(CartService);

  showButtonClicked() {
    console.log('clicked');
  }
}
