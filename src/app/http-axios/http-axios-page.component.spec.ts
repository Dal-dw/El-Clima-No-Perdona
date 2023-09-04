import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpAxiosPageComponent } from './http-axios-page.component';

describe('HttpAxiosPageComponent', () => {
  let component: HttpAxiosPageComponent;
  let fixture: ComponentFixture<HttpAxiosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpAxiosPageComponent]
    });
    fixture = TestBed.createComponent(HttpAxiosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
