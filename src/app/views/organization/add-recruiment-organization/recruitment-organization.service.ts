import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecruitmentOrganizationService {

  private apiUrl = 'http://localhost:8080/api/v3/recruitment_organization';

  constructor(private http: HttpClient) {}

  saveRecruitmentOrganization(organization: any) {
    return this.http.post<any>(this.apiUrl, organization);
  }

}
