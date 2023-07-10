import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    this.http.get<any[]>('http://localhost:8080/api/v1/category').subscribe(data => {
      this.categories = data;
    });
  }
}
