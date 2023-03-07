import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent {

    constructor(private matDialog:MatDialog){

    }
    ngOnInit(){
    }

  OnSubmit(){
    this.matDialog.open(UpdateProfileComponent,{
      disableClose : true, minWidth : '700px', minHeight : '600px'
    });
  }
}
