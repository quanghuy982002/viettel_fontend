import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoryTypeComponent } from './edit-category-type.component';

describe('EditCategoryTypeComponent', () => {
  let component: EditCategoryTypeComponent;
  let fixture: ComponentFixture<EditCategoryTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCategoryTypeComponent]
    });
    fixture = TestBed.createComponent(EditCategoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
