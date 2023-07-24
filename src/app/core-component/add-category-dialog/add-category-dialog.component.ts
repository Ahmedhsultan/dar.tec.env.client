import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ServerService } from 'src/app/service/server.service';
import { FailDialogComponent } from '../fail-dialog/fail-dialog.component';
import{ Category } from '../../model/Category'

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.css']
})
export class AddCategoryDialogComponent {
  isButtonsDisabled: boolean = false;
  
  constructor(
    public dialogRef: MatDialogRef<AddCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private server:ServerService,
    private failDialog: MatDialog
  ) {}

  onAddClicked(categoryName: string): void {
    this.isButtonsDisabled = true;

    this.server.post('/category/add', new Category(categoryName)).subscribe(
      (any: any) => {
        this.dialogRef.close(categoryName);
      },
      (any: any) => {
        const dialogRef = this.failDialog.open(FailDialogComponent, {
          // width: '400px', // Set the width of the dialog as needed
          data: { msg: 'Failed to add category : ' + any.message } // Replace 'your_download_link_here' with the actual download link
        });
        this.isButtonsDisabled = false;
      }
    );
  }
}
