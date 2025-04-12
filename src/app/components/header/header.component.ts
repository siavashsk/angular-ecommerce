import { Component, ElementRef, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink, CommonModule],
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
        <div class="relative">
          <button
            class="text-xl cursor-pointer border py-1 rounded-xl"
            (click)="toggleDropdown()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="30"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
              />
            </svg>
          </button>
          <div
            *ngIf="dropdownVisible"
            class="absolute right-0 z-40 mt-6 bg-white border border-gray-300 rounded-lg shadow-lg w-[150px] text-center"
          >
            <button
              class="w-full cursor-pointer py-2 text-zinc-800 hover:bg-gray-200"
              routerLink="/profile"
            >
              My Profile
            </button>
            <button
              class="w-full cursor-pointer py-2 text-zinc-800 hover:bg-gray-200"
              routerLink="/notifications"
            >
              Notifications
            </button>
            <button
              class="w-full cursor-pointer py-2 text-red-700 hover:bg-red-200"
              (click)="logout()"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  cartService = inject(CartService);
  dropdownVisible = false;

  constructor(private router: Router, private elRef: ElementRef) {}

  ngAfterViewInit() {
    document.addEventListener('click', this.closeDropdownIfOutside);
  }
  ngOnDestroy() {
    document.removeEventListener('click', this.closeDropdownIfOutside);
  }

  closeDropdownIfOutside = (event: MouseEvent) => {
    if (
      this.dropdownVisible &&
      !this.elRef.nativeElement.contains(event.target)
    ) {
      this.dropdownVisible = false;
    }
  };

  showButtonClicked() {
    console.log('clicked');
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
