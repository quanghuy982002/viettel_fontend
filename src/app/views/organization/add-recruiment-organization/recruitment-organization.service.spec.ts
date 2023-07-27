import { TestBed } from '@angular/core/testing';

import { RecruitmentOrganizationService } from './recruitment-organization.service';

describe('RecruitmentOrganizationService', () => {
  let service: RecruitmentOrganizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruitmentOrganizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
