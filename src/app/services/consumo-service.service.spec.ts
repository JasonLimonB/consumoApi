import { TestBed } from '@angular/core/testing';

import { ConsumoServiceService } from './consumo-service.service';

describe('ConsumoServiceService', () => {
  let service: ConsumoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
