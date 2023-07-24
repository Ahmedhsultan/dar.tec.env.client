import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ServerService } from 'src/app/service/server.service';
import { FailDialogComponent } from '../fail-dialog/fail-dialog.component';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-plugin-dialog',
  templateUrl: './add-plugin-dialog.component.html',
  styleUrls: ['./add-plugin-dialog.component.css']
})
export class AddPluginDialogComponent {
  isButtonsDisabled: boolean = false;
  pluginForm: FormGroup;

  categories!: any[];

  constructor(
    public dialogRef: MatDialogRef<AddPluginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private server: ServerService,
    private failDialog: MatDialog
  ) {
    this.getAllCategories();

    this.pluginForm = this.formBuilder.group({
      pluginName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      excutedcodeURL: ['', [Validators.required]],
      file: [null],
      categoryName: ['', [Validators.required]],
    });
  }

  onUploadFile(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length) {
      this.pluginForm.patchValue({
        file: inputElement.files.item(0),
      });
    }
  }

  onAddPlugin(): void {
    this.isButtonsDisabled = true;
    const pluginData = this.pluginForm.value;
    console.log(pluginData)
    
    this.server.post('/plugin/add', pluginData ).subscribe(
      (any: any) => {
        this.dialogRef.close(pluginData);
      },
      (any: any) => {
        const dialogRef = this.failDialog.open(FailDialogComponent, {
          data: { msg: 'Failed to add plugin : ' + any.message }
        });
        this.isButtonsDisabled = false;
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  getAllCategories(){
    this.server.get<any>('/category/all').subscribe(
      (any: any) => {
        this.categories = any;
      },
      (any: any) => {
        const dialogRef = this.failDialog.open(FailDialogComponent, {
          data: { msg: 'Failed to get categories : ' + any.message }
        });
        this.dialogRef.close();
      }
    );
  }
}
