import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-category-type',
  templateUrl: './edit-category-type.component.html',
  styleUrls: ['./edit-category-type.component.scss']
})
export class EditCategoryTypeComponent {
  categoryType: any; // Data of the category type to be edited

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<EditCategoryTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.categoryType = { ...data }; 
  }

  saveChanges(): void {
    const apiUrl = `http://localhost:8080/api/v2/category_type/${this.categoryType.id}`;
    this.http.put(apiUrl, this.categoryType).subscribe(
      () => {
        console.log('Cập nhật thành công');
        this.dialogRef.close('success'); 
      },
      (error) => {
        console.error('Lỗi khi cập nhật', error);
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close(); 
  }
}
