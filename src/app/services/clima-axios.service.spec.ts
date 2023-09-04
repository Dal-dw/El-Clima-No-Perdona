import { TestBed } from '@angular/core/testing';

import { ClimaAxiosService } from './clima-axios.service';

describe('ClimaAxiosService', () => {
  let service: ClimaAxiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimaAxiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
