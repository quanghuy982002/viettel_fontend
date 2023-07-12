import { Component, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog  } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-edit-category',
  templateUrl: './popup-edit-category.component.html',
  styleUrls: ['./popup-edit-category.component.scss']
})
export class PopupEditCategoryComponent {

  constructor(
    public dialogRef: MatDialogRef<PopupEditCategoryComponent>,
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
