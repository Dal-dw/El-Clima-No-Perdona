import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiosCarouselComponent } from './axios-carousel.component';

describe('AxiosCarouselComponent', () => {
  let component: AxiosCarouselComponent;
  let fixture: ComponentFixture<AxiosCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AxiosCarouselComponent]
    });
    fixture = TestBed.createComponent(AxiosCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
