import { TestBed } from '@angular/core/testing';

import { PrincipalFormService } from './principal-form.service';

describe('PrincipalFormService', () => {
  let service: PrincipalFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipalFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
