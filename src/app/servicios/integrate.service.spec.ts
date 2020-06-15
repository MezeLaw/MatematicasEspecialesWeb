import { TestBed } from '@angular/core/testing';

import { IntegrateService } from './integrate.service';

describe('IntegrateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntegrateService = TestBed.get(IntegrateService);
    expect(service).toBeTruthy();
  });
});
