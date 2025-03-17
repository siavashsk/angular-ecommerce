import { Component, input } from '@angular/core';
import { Product } from '../../../models/products.model';

@Component({
  selector: 'app-cart-item',
  imports: [],
  template: `
    <div
      class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items-center"
    >
      <img [src]="item().image" class="w-[60px] h-[60px] object-cover" alt="" />
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ item().title }}</span>
        <span class="text-sm">{{ item().price }}</span>
      </div>
      <div class="flex-1"></div>
    </div>
  `,
  styles: ``,
})
export class CartItemComponent {
  item = input.required<Product>();
}
