import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchCarouselComponent } from './fetch-carousel.component';

describe('FetchCarouselComponent', () => {
  let component: FetchCarouselComponent;
  let fixture: ComponentFixture<FetchCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchCarouselComponent]
    });
    fixture = TestBed.createComponent(FetchCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
