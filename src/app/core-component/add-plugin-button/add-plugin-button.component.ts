import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPluginDialogComponent } from '../add-plugin-dialog/add-plugin-dialog.component';

@Component({
  selector: 'app-add-plugin-button',
  templateUrl: './add-plugin-button.component.html',
  styleUrls: ['./add-plugin-button.component.css']
})
export class AddPluginButtonComponent {
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPluginDialogComponent, {
      width: '600px', // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle the result from the dialog if needed
      console.log('The dialog was closed', result);
    });
  }
}
