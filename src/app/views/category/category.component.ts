import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog  } from '@angular/material/dialog';
import { PopupEditCategoryComponent } from './popup-edit-category/popup-edit-category.component';
import { PopupAddCategoryTypeComponent } from './popup-add-category-type/popup-add-category-type.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];
  category_types : any[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog ) { }
  ngOnInit() {
    this.getDataFromAPI();
    this.getDataCategoryType();
  }

  getDataFromAPI() {
    this.http.get<any[]>('http://localhost:8080/api/v1/category').subscribe(data => {
      this.categories = data;
    });
  }

  openDialog()
  {
    this.dialog.open(PopupEditCategoryComponent)
  }

  openDialogAdd()
  {
    this.dialog.open(PopupAddCategoryTypeComponent)
  }

  //get api category type
  getDataCategoryType() {
    this.http.get<any[]>('http://localhost:8080/api/v2/category_type').subscribe(data => {
      this.category_types = data;
    });
  }
  
}
