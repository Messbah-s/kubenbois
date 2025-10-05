import { TestBed } from '@angular/core/testing';

import { AeTurnOrderService } from './ae-turn-order-service';

describe('AeTurnOrderService', () => {
  let service: AeTurnOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeTurnOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
