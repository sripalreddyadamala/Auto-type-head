import { TestBed, inject } from '@angular/core/testing';

import { TypeaheadServiceService } from './typeahead-service.service';

describe('TypeaheadServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeaheadServiceService]
    });
  });

  it('should be created', inject([TypeaheadServiceService], (service: TypeaheadServiceService) => {
    expect(service).toBeTruthy();
  }));
});
