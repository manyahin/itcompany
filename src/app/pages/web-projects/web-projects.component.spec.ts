import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebProjectsComponent } from './web-projects.component';

describe('WebProjectsComponent', () => {
  let component: WebProjectsComponent;
  let fixture: ComponentFixture<WebProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
