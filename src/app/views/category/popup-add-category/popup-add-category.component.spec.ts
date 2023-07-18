import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddCategoryComponent } from './popup-add-category.component';

describe('PopupAddCategoryComponent', () => {
  let component: PopupAddCategoryComponent;
  let fixture: ComponentFixture<PopupAddCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupAddCategoryComponent]
    });
    fixture = TestBed.createComponent(PopupAddCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
