import { TestBed } from '@angular/core/testing';

import { ServicedemoService } from './servicedemo.service';

describe('ServicedemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicedemoService = TestBed.get(ServicedemoService);
    expect(service).toBeTruthy();
  });
});
