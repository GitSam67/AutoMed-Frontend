import { TestBed } from '@angular/core/testing';

import { CustomerhttpService } from './customerhttp.service';

describe('CustomerhttpService', () => {
  let service: CustomerhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
