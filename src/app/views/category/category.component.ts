
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupEditCategoryComponent } from './popup-edit-category/popup-edit-category.component';
import { PopupAddCategoryTypeComponent } from './popup-add-category-type/popup-add-category-type.component';
import { PopupAddCategoryComponent } from './popup-add-category/popup-add-category.component';
import { EditCategoryTypeComponent } from './edit-category-type/edit-category-type.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];
  category_types: any[] = [];


  constructor(private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit() {
    this.getDataFromAPI();
    this.getDataCategoryType();
  }

  getDataFromAPI() {
    this.http.get<any[]>('http://localhost:8080/api/v1/category').subscribe(data => {
      this.categories = data;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(PopupEditCategoryComponent, {
      width: '700px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Kết quả:', result);
      if (result === 'success') {
        this.getDataFromAPI();
      }
    });
  }

  openDialogAdd() {
    const dialogRef = this.dialog.open(PopupAddCategoryTypeComponent, {
      width: '700px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Kết quả:', result);
      if (result === 'success') {
        this.getDataCategoryType();
      }
    });
  }

  getDataCategoryType() {
    this.http.get<any[]>('http://localhost:8080/api/v2/category_type').subscribe(data => {
      this.category_types = data;
    });
  }

  deleteCategoryType(id: number) {
    this.http.delete(`http://localhost:8080/api/v2/category_type/${id}`).subscribe(
      () => {
        window.location.reload();
        console.log('Xóa thành công');
        alert("Xóa thành công")
        this.getDataCategoryType();

      },
      (error) => {
        window.location.reload();
        console.error('Lỗi khi xóa', error);
      }
    );
  }

  deleteCategory(id: number) {
    this.http.delete(`http://localhost:8080/api/v1/category/${id}`).subscribe(
      () => {
        window.location.reload();
        console.log('Xóa thành công');
        alert("Xóa thành công")
        this.getDataCategoryType();

      },
      (error) => {
        window.location.reload();
        console.error('Lỗi khi xóa', error);
      }
    );
  }

  openPopupAddCategory() {
    const dialogRef = this.dialog.open(PopupAddCategoryComponent, {
      data: { categoryTypes: this.category_types }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Kết quả:', result);
      if (result === 'success') {
        this.getDataFromAPI();
      }
    });
  }

  editCategoryType(categoryTypeId: number): void {
    const categoryTypeToEdit = this.category_types.find(item => item.id === categoryTypeId);

    const dialogRef = this.dialog.open(EditCategoryTypeComponent, {
      width: '300px',
      data: { ...categoryTypeToEdit }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        this.getDataCategoryType(); 
      }
    });
  }

  editCategory(categoryId: number): void {
    const categoryToEdit = this.categories.find(item => item.id === categoryId);

    const dialogRef = this.dialog.open(PopupEditCategoryComponent, {
      width: '400px',
      data: { ...categoryToEdit, categoryTypes: this.category_types }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        this.getDataFromAPI(); 
      }
    });
  }
}
