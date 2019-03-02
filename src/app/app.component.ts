import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <div class="main">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .main { padding: 1em; }
  `]
})
export class AppComponent {
  title = 'exam';
}
