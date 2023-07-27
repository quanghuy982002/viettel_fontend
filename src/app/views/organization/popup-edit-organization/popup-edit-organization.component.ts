import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-edit-organization',
  templateUrl: './popup-edit-organization.component.html',
  styleUrls: ['./popup-edit-organization.component.scss']
})
export class PopupEditOrganizationComponent implements OnInit {
  organization: any = {};
  organizations: any[] = [];

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<PopupEditOrganizationComponent>,
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
  
  getOrganizationName(code: string): string {
    const org = this.organizations.find((o) => o.code === code);
    return org ? org.name : '';
  }

  onOrganizationCodeChange() {
    const selectedOrg = this.organizations.find(org => org.code === this.organization.code);
    this.organization.name = selectedOrg ? selectedOrg.name : '';
  }

  onSave() {
    this.http.post('http://localhost:8080/api/v3/recruitment_organization', this.organization).subscribe(
      (response) => {
        console.log('Dữ liệu đã được gửi thành công:', response);
        alert('Dữ liệu đã được lưu thành công!');
        this.dialogRef.close();
      },
      (error) => {
        console.log('Lỗi khi gửi dữ liệu:', error);
        alert('Đã xảy ra lỗi khi lưu dữ liệu!');
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
