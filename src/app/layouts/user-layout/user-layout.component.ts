import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  imports: [HeaderComponent, RouterModule],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class UserLayoutComponent {}
