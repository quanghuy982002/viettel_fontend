import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { PopupEditOrganizationComponent } from './popup-edit-organization/popup-edit-organization.component';

import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PopupEditOrganizationComponent
  ],
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    OrganizationRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrganizationModule { }
