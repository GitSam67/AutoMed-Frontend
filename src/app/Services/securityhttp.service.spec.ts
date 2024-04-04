import { TestBed } from '@angular/core/testing';

import { SecurityhttpService } from './securityhttp.service';

describe('SecurityhttpService', () => {
  let service: SecurityhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
