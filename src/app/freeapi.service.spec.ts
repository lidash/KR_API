import { TestBed, inject } from '@angular/core/testing';

import { FreeapiService } from './freeapi.service';

describe('FreeapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FreeapiService]
    });
  });

  it('should be created', inject([FreeapiService], (service: FreeapiService) => {
    expect(service).toBeTruthy();
  }));
});
