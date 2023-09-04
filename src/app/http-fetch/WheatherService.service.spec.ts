/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WheatherServiceService } from './WheatherService.service';

describe('Service: WheatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WheatherServiceService]
    });
  });

  it('should ...', inject([WheatherServiceService], (service: WheatherServiceService) => {
    expect(service).toBeTruthy();
  }));
});
