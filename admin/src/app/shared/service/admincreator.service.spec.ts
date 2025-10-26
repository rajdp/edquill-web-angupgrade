import { TestBed } from '@angular/core/testing';

import { AdmincreatorService } from './admincreator.service';

describe('AdmincreatorService', () => {
  let service: AdmincreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmincreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
