import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">IT</a>
      <button class="navbar-toggler" type="button" (click)="toggleNavbar()">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" [ngClass]="{ 'show': navbarOpen }">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" routerLink="/services" routerLinkActive="active">Сервисы</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/gallery" routerLinkActive="active">Галерея</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/projects" routerLinkActive="active">Проекты</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/web-projects" routerLinkActive="active">Web-проекты</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/mobile-projects" routerLinkActive="active">Мобильные приложения</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
