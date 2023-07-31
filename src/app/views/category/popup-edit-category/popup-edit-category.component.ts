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
  categoryTypes: CategoryType[] = [];

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<PopupEditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  
  ngOnInit(): void {
    this.http.get<CategoryType[]>(`http://localhost:8080/api/v2/category_type`).subscribe(
      (data) => {
        this.categoryTypes = data;
        this.category = { ...this.data };
        const selectedCategoryType = this.categoryTypes.find(ct => ct.id === this.category.typeId);
        if (!selectedCategoryType) {
          const defaultCategoryType = this.categoryTypes[0];
          this.category.typeId = defaultCategoryType ? defaultCategoryType.id : 0;
        }
      },
      (error) => {
        console.error('Lỗi khi tải loại danh mục:', error);
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

  compareCategoryType(ct1: CategoryType, ct2: CategoryType): boolean {
    return ct1 && ct2 ? ct1.id === ct2.id : ct1 === ct2;
  }

  
}
