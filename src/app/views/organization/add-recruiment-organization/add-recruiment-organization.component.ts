import { RecruitmentOrganizationService } from './recruitment-organization.service';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-recruiment-organization',
  templateUrl: './add-recruiment-organization.component.html',
  styleUrls: ['./add-recruiment-organization.component.scss']
})
export class AddRecruimentOrganizationComponent implements OnInit {
  organization: any = {};
  organizations: any[] = [];

  constructor(
    private recruitmentService: RecruitmentOrganizationService,
    private http: HttpClient,
    public dialogRef: MatDialogRef<AddRecruimentOrganizationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.initializeOrganization();
  }

  // Khởi tạo đối tượng đơn vị với giá trị mặc định
  initializeOrganization() {
    this.organization = {
      is_active: 0,
      code: '',
      name: '',
      effective_start_date: null,
      effective_end_date: null,
      scope: '',
      office_address: '',
      recruitment_clues_fullname: '',
      recruitment_clues_email: '',
      recruitment_clues_phone: '',
      information: ''
    };
  }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/api/organization/organization').subscribe(
      (data) => {
        this.organizations = data;
      },
      (error) => {
        console.log('Error fetching organizations:', error);
      }
    );
  }
  
  getOrganizationIdByCode(code: string): number {
    const selectedOrg = this.organizations.find((org) => org.code === code);
    return selectedOrg ? selectedOrg.id : 0;
  }

  getOrganizationName(code: string): string {
    const selectedOrg = this.organizations.find((org) => org.code === code);
    return selectedOrg ? selectedOrg.name : '';
  }

  

  onSave() {
    // Map form data to DTO
    const recruitmentOrganizationDTO = {
      organizationId: this.getOrganizationIdByCode(this.organization.code),
      organizationName: this.getOrganizationName(this.organization.code),
      recruitmentName: this.organization.recruitmentCluesFullname,
      recruitmentEmail: this.organization.recruitmentCluesEmail,
      recruitmentNumphone: this.organization.recruitmentCluesPhone,
      information: this.organization.information,
      scope: this.organization.scope,
      officeAddress: this.organization.office_address,
      effective_start_date: this.organization.effective_start_date,
      effective_end_date: this.organization.effective_end_date,
      image_file: this.organization.image_file,
      is_active: this.organization.is_active
    };
    // Call the service function to save the DTO to the backend
    this.recruitmentService.saveRecruitmentOrganization(recruitmentOrganizationDTO).subscribe(
      (response) => {
        console.log('Data saved successfully!', response);
        this.organization = {}; 
      },
      (error) => {
        console.error('Error while saving data:', error);
      }
    );
  }


  onCancel() {
    this.dialogRef.close();
  }

  onFileChange(event: any) {
    // Xử lý logic để tải lên file ảnh (nếu cần thiết)
  }

  onSubmit() {
    console.log('Thông tin đơn vị:', this.organization);
    this.dialogRef.close();
  }

}
