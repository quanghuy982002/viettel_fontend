import { HttpClient } from '@angular/common/http';
import { Component, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog  } from '@angular/material/dialog';
@Component({
  selector: 'app-popup-add-category-type',
  templateUrl: './popup-add-category-type.component.html',
  styleUrls: ['./popup-add-category-type.component.scss']
})
export class PopupAddCategoryTypeComponent {
  category_type: any = { code: '', name: '' };

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<PopupAddCategoryTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSave() {
    this.http.post('http://localhost:8080/api/v2/category_type', this.category_type)
      .subscribe(
        (response) => {
          console.log('Thêm thành công', response);
          this.dialogRef.close();
        },
        (error) => {
          console.error('Lỗi khi thêm', error);
        }
      );
  }

  onCancel() {
    this.dialogRef.close();
  }
}
