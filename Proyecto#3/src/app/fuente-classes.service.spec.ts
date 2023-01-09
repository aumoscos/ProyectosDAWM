import { TestBed } from '@angular/core/testing';

import { FuenteClassesService } from './fuente-classes.service';

describe('FuenteClassesService', () => {
  let service: FuenteClassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuenteClassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
