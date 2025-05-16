import { TestBed } from '@angular/core/testing';

import { OrderSignalrServiceTsService } from './order-signalr.service.ts.service';

describe('OrderSignalrServiceTsService', () => {
  let service: OrderSignalrServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderSignalrServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
