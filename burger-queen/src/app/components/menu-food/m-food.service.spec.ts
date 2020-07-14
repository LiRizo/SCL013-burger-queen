import { TestBed } from '@angular/core/testing';

import { MFoodService } from './m-food.service';

describe('MFoodService', () => {
  let service: MFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
