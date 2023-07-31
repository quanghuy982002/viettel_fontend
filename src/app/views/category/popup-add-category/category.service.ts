import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryType } from '../models/category-type.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategoryTypes(): Observable<CategoryType[]> {
    return this.http.get<CategoryType[]>(`http://localhost:8080/api/v2/category_type`);
  }
  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`http://localhost:8080/api/v1/category`, category);
  }
  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:8080/api/v1/category');
  }
}
