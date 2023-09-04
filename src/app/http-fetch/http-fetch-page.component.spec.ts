import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpFetchPageComponent } from './http-fetch-page.component';

describe('HttpFetchPageComponent', () => {
  let component: HttpFetchPageComponent;
  let fixture: ComponentFixture<HttpFetchPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpFetchPageComponent]
    });
    fixture = TestBed.createComponent(HttpFetchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
