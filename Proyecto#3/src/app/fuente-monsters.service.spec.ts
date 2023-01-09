import { TestBed } from '@angular/core/testing';

import { FuenteMonstersService } from './fuente-monsters.service';

describe('FuenteMonstersService', () => {
  let service: FuenteMonstersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuenteMonstersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
