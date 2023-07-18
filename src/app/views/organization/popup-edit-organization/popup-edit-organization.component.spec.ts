import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditOrganizationComponent } from './popup-edit-organization.component';

describe('PopupEditOrganizationComponent', () => {
  let component: PopupEditOrganizationComponent;
  let fixture: ComponentFixture<PopupEditOrganizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupEditOrganizationComponent]
    });
    fixture = TestBed.createComponent(PopupEditOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
