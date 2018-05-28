import { TestBed, inject } from '@angular/core/testing';

import { ImgLibService } from './img-lib.service';

describe('ImgLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgLibService]
    });
  });

  it('should be created', inject([ImgLibService], (service: ImgLibService) => {
    expect(service).toBeTruthy();
  }));
});
