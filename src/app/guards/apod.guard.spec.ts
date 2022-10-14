import { TestBed } from '@angular/core/testing';

import { ApodGuard } from './apod.guard';

describe('ApodGuard', () => {
  let guard: ApodGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApodGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
