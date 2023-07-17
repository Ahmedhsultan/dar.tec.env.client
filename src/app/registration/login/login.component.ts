import { HttpClient } from '@angular/common/http';
import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({});

  constructor(private router: Router, private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
        username:['',[Validators.required, Validators.minLength(6)]],
        password:['',[Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (this.form.valid) {
      this.router.navigate(['index']); // Replace '/' with the path of your index page
    }
  }
}
