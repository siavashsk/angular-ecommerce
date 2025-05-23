import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div
      class="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      @for(product of products(); track product.id){
      <app-product-card [product]="product" />
      }
    </div>
  `,
  styles: ``,
})
export class ProductsListComponent {
  async ngOnInit() {
    const res = await fetch('https://67fcf1ff3da09811b1741a1f.mockapi.io/products');
    const data = await res.json();
    console.log(data)
    this.products.set(data);
  }

  products = signal<Product[]>([]);
}
