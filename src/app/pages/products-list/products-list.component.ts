import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      @for(product of products(); track product.id){
      <app-product-card [product]="product" />
      }
    </div>
  `,
  styles: ``,
})
export class ProductsListComponent {
  async ngOnInit() {
    const res = await fetch('url');
    const data = await res.json();
    // this.products.set(data);
  }

  products = signal<Product[]>([
    {
      id: 1,
      title: 'Fjallraven',
      price: 100.0,
      image:
        'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg',
      stock: 10,
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts',
      price: 100.0,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      price: 100.0,
      image:
        'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg',
      stock: 4,
    },
  ]);
}
