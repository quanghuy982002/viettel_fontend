import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { PopupEditCategoryComponent } from './popup-edit-category/popup-edit-category.component';

import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field';
import { PopupAddCategoryTypeComponent } from './popup-add-category-type/popup-add-category-type.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
  
    PopupEditCategoryComponent,
       PopupAddCategoryTypeComponent
  ],
  imports: [
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    CommonModule,
    CategoryRoutingModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoryModule { }
