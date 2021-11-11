import { TestBed } from '@angular/core/testing';

import { HNService } from './hn.service';

describe('MoviesService', () => {
  let service: HNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
