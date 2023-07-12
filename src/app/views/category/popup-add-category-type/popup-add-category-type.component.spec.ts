import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddCategoryTypeComponent } from './popup-add-category-type.component';

describe('PopupAddCategoryTypeComponent', () => {
  let component: PopupAddCategoryTypeComponent;
  let fixture: ComponentFixture<PopupAddCategoryTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupAddCategoryTypeComponent]
    });
    fixture = TestBed.createComponent(PopupAddCategoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
