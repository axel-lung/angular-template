import { TestBed } from '@angular/core/testing';

import { BookFacadeService } from './book.facade';

describe('FacadeService', () => {
  let service: BookFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
