import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  template: `
    <div class="min-h-screen flex items-center justify-center px-4">
      <div class="bg-zinc-800 max-w-md w-full rounded-2xl shadow-lg p-8">
        <h2 class="text-2xl font-bold text-white mb-6 text-center">
          Welcome Back
        </h2>

        <div class="space-y-5">
          <div>
            <label class="block text-gray-300 font-medium mb-1" for="username"
              >Username</label
            >
            <input
              type="text"
              id="username"
              class="w-full px-4 py-2 border border-gray-300 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label class="block text-gray-300 font-medium mb-1" for="password"
              >Password</label
            >
            <input
              type="password"
              id="password"
              class="w-full px-4 py-2 border border-gray-300 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center gap-2 text-gray-400">
              <input type="checkbox" class="form-checkbox" />
              Remember me
            </label>
            <a href="#" class="text-blue-500">Forgot password?</a>
          </div>

          <button
            (click)="onSubmit()"
            [disabled]="isLoading()"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700 transition disabled:bg-zinc-700"
          >
            <ng-container *ngIf="!isLoading()">Login</ng-container>

            <ng-container *ngIf="isLoading()">
              <div class="flex items-center justify-center gap-2">
                <svg
                  class="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                <span class="text-white">Loading...</span>
              </div>
            </ng-container>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class LoginComponent {
  constructor(private router: Router) {}

  isLoading = signal<boolean>(false);

  onSubmit() {
    this.isLoading.set(true);

    setTimeout(() => {
      this.isLoading.set(false);
      this.router.navigate(['/profile']);
    }, 1000);
  }
}
