import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './registration/login/login.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { MaterialModule } from './materials/materials.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FailDialogComponent } from './core-component/fail-dialog/fail-dialog.component'
import { HttpClientModule} from '@angular/common/http';
import { SuccessDialogComponent } from './core-component/success-dialog/success-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FailDialogComponent,
    SuccessDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
