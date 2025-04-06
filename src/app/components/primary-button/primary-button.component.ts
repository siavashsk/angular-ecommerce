import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primary-button',
  imports: [CommonModule],
  template: `
    <button
      class="text-white bg-indigo-500 w-full px-5 py-2 rounded-xl shadow-md hover:opacity-90 cursor-pointer"
      (click)="btnClicked.emit()"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class PrimaryButtonComponent {
  label = input('');
  btnClicked = output();

  handleButtonClick() {
    this.btnClicked.emit();
  }
}
