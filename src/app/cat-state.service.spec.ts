import { TestBed } from '@angular/core/testing';

import { CatStateService } from './cat-state.service';

describe('CatStateService', () => {
  let service: CatStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
