import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog  } from '@angular/material/dialog';
import { CategoryType } from '../models/category-type.model';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-popup-edit-category',
  templateUrl: './popup-edit-category.component.html',
  styleUrls: ['./popup-edit-category.component.scss']
})
export class PopupEditCategoryComponent implements OnInit {
  category: Category = new Category();
  categoryTypes: any[] = []; 

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<PopupEditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.category = { ...data }; 
  }
  ngOnInit(): void {
    this.http.get<CategoryType[]>(`http://localhost:8080/api/v2/category_type`).subscribe(
      (data) => {
        this.categoryTypes = data;
      },
      (error) => {
        console.error('Error fetching category types:', error);
      }
    );
  }

  saveChanges(): void {
    const apiUrl = `http://localhost:8080/api/v1/category/${this.category.id}`;
    this.http.put(apiUrl, this.category).subscribe(
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
