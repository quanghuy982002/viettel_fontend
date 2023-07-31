import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from '../models/category.model';
import { CategoryType } from '../models/category-type.model';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-popup-add-category',
  templateUrl: './popup-add-category.component.html',
  styleUrls: ['./popup-add-category.component.scss']
})

export class PopupAddCategoryComponent implements OnInit {
  category: Category = new Category();
  categoryTypes: CategoryType[] = [];
  constructor(public dialogRef: MatDialogRef<PopupAddCategoryComponent>,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategoryTypes().subscribe(
      (data) => {
        this.categoryTypes = data;
      },
      (error) => {
        console.error('Error fetching category types:', error);
      }
    );
  }

  onSubmit(): void {
    this.categoryService.addCategory(this.category).subscribe(
      (data) => {
        console.log('New category added:', data);
        this.dialogRef.close();
        this.categoryService.getAllCategory();
      },
      (error) => {
        console.error('Error adding category:', error);
        this.categoryService.getAllCategory();
      }
    );
  }
}
