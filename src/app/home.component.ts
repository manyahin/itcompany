import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Добро пожаловать в IT компанию!</h1>
    <p>Создано на Angular 7, SCSS, RxJS, HTML</p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
