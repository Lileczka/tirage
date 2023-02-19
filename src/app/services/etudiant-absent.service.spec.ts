import { TestBed } from '@angular/core/testing';

import { EtudiantAbsentService } from './etudiant-absent.service';

describe('EtudiantAbsentService', () => {
  let service: EtudiantAbsentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtudiantAbsentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
