import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent {
  generateUpdateForm!: FormGroup;
  data: any;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.ProfileUpdateForm();
  }

  ProfileUpdateForm() {
    this.generateUpdateForm = this.formBuilder.group({
      name: ['', Validators.required],
      domain: ['', Validators.required],
      gender: ['male', Validators.required],
      dateOfBirth: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  onSubmit() {
    this.data = this.generateUpdateForm.value;
    console.log(this.data);
  }
}
