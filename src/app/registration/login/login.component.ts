import { HttpClient } from '@angular/common/http';
import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FailDialogComponent } from 'src/app/core-component/fail-dialog/fail-dialog.component';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup = new FormGroup({});

  constructor(private router: Router, private formBuilder: FormBuilder,
    private server: ServerService, private failDialog: MatDialog) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (this.form.valid) {
      this.server.post('/user/signin', this.form.value).subscribe(
        (any: any) => {
          this.router.navigate(['index']); // Replace '/' with the path of your index page
        },
        (any: any) => {
          const dialogRef = this.failDialog.open(FailDialogComponent, {
            // width: '400px', // Set the width of the dialog as needed
            data: { msg: 'Login Failed ' + any.message } // Replace 'your_download_link_here' with the actual download link
          });
        }
      );
    }
  }
}
