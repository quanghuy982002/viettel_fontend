import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddRecruimentOrganizationComponent } from './add-recruiment-organization/add-recruiment-organization.component';

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

  organizationsToShow: Organization[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  getUnitTree(): Observable<Organization[]> {
    return this.http.get<Organization[]>(`${this.baseUrl}/tree`);
  }

  ngOnInit(): void {
    this.getUnitTree().subscribe(tree => {
      this.organizationTree = tree;
      this.organizationsToShow.push(...this.organizationTree); // Hiển thị công ty mẹ ban đầu
    });
    this.getDataRecruitmentOrganization();
  }

  // ngOnInit(): void {
  //   this.getUnitTree().subscribe(tree => {
  //     this.organizationTree = tree;
  //     this.organizationsToShow = this.organizationTree.slice(0, 1); // Chỉ hiển thị công ty mẹ ban đầu
  //   });
  //   this.getDataRecruitmentOrganization();
  // }

  getDataRecruitmentOrganization() {
    this.http.get<any[]>('http://localhost:8080/api/v3/recruitment_organization').subscribe(data => {
      this.RecruitmentOrganizations = data;
    });
  }

  onOrganizationClick(organization: Organization): void {
    if (organization.children && organization.children.length > 0) {
      if (this.organizationsToShow.includes(organization)) {
        this.organizationsToShow = this.organizationsToShow.filter(org => org !== organization);
      } else {
        this.organizationsToShow.push(organization);
      }
    }
  }

  openAddRO() {
    const dialogRef = this.dialog.open(AddRecruimentOrganizationComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Kết quả:', result);
      if (result === 'success') {
        this.getDataRecruitmentOrganization();
      }
    });
  }

  edit(id: number) {
  }
}
