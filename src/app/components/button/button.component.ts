import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button
      class="text-black w-full px-5 py-2 rounded-xl shadow-md cursor-pointer hover:bg-zinc-100 transition-all"
      (click)="btnClicked.emit()"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  label = input('');
  btnClicked = output();
}
