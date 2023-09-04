import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiosCardComponent } from './axios-card.component';

describe('AxiosCardComponent', () => {
  let component: AxiosCardComponent;
  let fixture: ComponentFixture<AxiosCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AxiosCardComponent]
    });
    fixture = TestBed.createComponent(AxiosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
