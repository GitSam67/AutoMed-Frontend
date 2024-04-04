import { TestBed } from '@angular/core/testing';

import { AdminhttpService } from './adminhttp.service';

describe('AdminhttpService', () => {
  let service: AdminhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
