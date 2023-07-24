import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-plugin-dialog',
  templateUrl: './add-plugin-dialog.component.html',
  styleUrls: ['./add-plugin-dialog.component.css']
})
export class AddPluginDialogComponent {
  pluginForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddPluginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.pluginForm = this.formBuilder.group({
      pluginName: '',
      description: '',
      link: '',
      videoFile: null,
    });
  }

  onUploadFile(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length) {
      this.pluginForm.patchValue({
        videoFile: inputElement.files[0],
      });
    }
  }

  onAddPlugin(): void {
    const pluginData = this.pluginForm.value;
    console.log('Plugin data:', pluginData);
    this.dialogRef.close(pluginData);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
