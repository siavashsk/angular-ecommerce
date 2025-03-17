import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([
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
  ]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(id: number) {
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }

  constructor() {}
}
