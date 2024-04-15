import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { storeownerGuard } from './storeowner.guard';

describe('storeownerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => storeownerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
