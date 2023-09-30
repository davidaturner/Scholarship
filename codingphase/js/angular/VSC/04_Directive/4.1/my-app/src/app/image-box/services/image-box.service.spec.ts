import { TestBed } from '@angular/core/testing';

import { ImageBoxService } from './image-box.service';

describe('ImageBoxService', () => {
  let service: ImageBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
