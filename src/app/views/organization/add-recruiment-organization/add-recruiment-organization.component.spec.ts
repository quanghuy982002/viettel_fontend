import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecruimentOrganizationComponent } from './add-recruiment-organization.component';

describe('AddRecruimentOrganizationComponent', () => {
  let component: AddRecruimentOrganizationComponent;
  let fixture: ComponentFixture<AddRecruimentOrganizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRecruimentOrganizationComponent]
    });
    fixture = TestBed.createComponent(AddRecruimentOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
