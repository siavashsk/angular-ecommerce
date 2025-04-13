import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-past-orders',
  imports: [CommonModule],
  template: ` <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Past Orders</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      <div
        *ngFor="let order of pastOrders()"
        class="bg-white rounded-2xl shadow-md p-4 flex flex-col gap-2 hover:shadow-lg transition-shadow cursor-pointer"
      >
        <img
          [src]="order.image"
          [alt]="order.title"
          class="w-full h-48 object-contain rounded-xl"
        />
        <h3 class="text-lg font-semibold">{{ order.title }}</h3>
        <p class="text-gray-600">Price: {{ order.price }}</p>
        <div class="text-sm flex gap-2">
          <p>Status:</p>
          <p class="font-bold"
            [ngClass]="{
              'text-green-600': order.status === 'delivered',
              'text-yellow-600': order.status === 'shipped',
              'text-red-600': order.status === 'cancelled',
              'text-blue-600': order.status === 'processing'
            }"
          >
            {{ order.status }}
          </p>
        </div>
        <p class="text-sm text-gray-500">Date: {{ order.date }}</p>
      </div>
    </div>
  </div>`,
  styles: ``,
})
export class PastOrdersComponent {
  pastOrders = signal<any[]>([]);
  async ngOnInit() {
    const res = await fetch('http://localhost:3000/pastOrders');
    const data = await res.json();
    this.pastOrders.set(data);
  }
}
