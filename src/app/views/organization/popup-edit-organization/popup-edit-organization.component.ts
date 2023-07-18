import { HttpClient } from '@angular/common/http';
import { Component, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog  } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-edit-organization',
  templateUrl: './popup-edit-organization.component.html',
  styleUrls: ['./popup-edit-organization.component.scss']
})
export class PopupEditOrganizationComponent {
  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<PopupEditOrganizationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSave() {
    // Xử lý logic lưu dữ liệu
    this.dialogRef.close();
  }

  onCancel() {
    this.dialogRef.close();
  }
}
