import { TestBed } from '@angular/core/testing';

import { StoreownerhttpService } from './storeownerhttp.service';

describe('StoreownerhttpService', () => {
  let service: StoreownerhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreownerhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
