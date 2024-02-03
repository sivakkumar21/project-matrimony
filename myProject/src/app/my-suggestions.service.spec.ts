import { TestBed } from '@angular/core/testing';

import { MySuggestionsService } from './my-suggestions.service';

describe('MySuggestionsService', () => {
  let service: MySuggestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySuggestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
