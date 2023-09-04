import { TestBed } from '@angular/core/testing';

import { ClimaFetchService } from './clima-fetch.service';

describe('ClimaFetchService', () => {
  let service: ClimaFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimaFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
