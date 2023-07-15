import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Organization {
  id: number;
  name: string;
  parentId: number;
  children: Organization[];
}

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  @Input() organizationTree: Organization[] = [];

  RecruitmentOrganizations: any[] = [];

   private baseUrl = 'http://localhost:8080/api/organization';

  constructor(private http: HttpClient) { }

  getUnitTree(): Observable<Organization[]> {
    return this.http.get<Organization[]>(`${this.baseUrl}/tree`);
  }

  ngOnInit(): void {
    this.getUnitTree().subscribe(tree => {
      this.organizationTree = tree;
    });
    this.getDateRecruitmentOrganization()
  }

  getDateRecruitmentOrganization(){
    this.http.get<any[]>('http://localhost:8080/api/v3/join').subscribe(data => {
      this.RecruitmentOrganizations = data;
    });
  }

  onOrganizationClick(organization: Organization): void {
    // Xử lý khi người dùng click vào công ty mẹ (organization)
    // Gọi API hoặc thực hiện các hành động khác tùy ý
  }

  openAddOrganization() {

  }

  edit(id: number) {

  }
}
