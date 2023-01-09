import { TestBed } from '@angular/core/testing';

import { FuenteSpellsService } from './fuente-spells.service';

describe('FuenteSpellsService', () => {
  let service: FuenteSpellsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuenteSpellsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
