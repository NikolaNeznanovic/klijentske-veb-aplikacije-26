import { TestBed } from '@angular/core/testing';

import { Utils } from './utilis';

describe('Utilis', () => {
  let service: Utils;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Utils);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
