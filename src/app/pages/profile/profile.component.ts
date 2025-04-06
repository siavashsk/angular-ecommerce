import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-profile',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <div class="flex items-center">
        <!-- Profile Image -->
        <img
          src="https://randomuser.me/api/portraits/men/9.jpg"
          alt="User"
          class="w-24 h-24 rounded-full object-cover border-2 border-gray-300 mr-6"
        />
        <div>
          <h2 class="text-3xl font-semibold">John Smith</h2>
          <p class="text-gray-500">www.john.com</p>
          <p class="text-gray-500 mt-2">Location: New York, USA</p>
        </div>
      </div>

      <!-- Bio Section -->
      <div class="mt-6">
        <h3 class="text-2xl font-semibold">Bio</h3>
        <p class="text-gray-700 mt-2">
          Passionate developer with experience in building web applications
          using Angular, React, and Tailwind CSS.
        </p>
      </div>

      <!-- Settings Section -->
      <div class="mt-6">
        <h3 class="text-2xl font-semibold">Settings</h3>
        <div class="flex  gap-2 mt-4">
          <app-primary-button label="Settings" />

          <app-primary-button label="Logout" />
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProfileComponent {}
