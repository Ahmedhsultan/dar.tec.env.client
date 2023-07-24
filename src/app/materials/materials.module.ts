import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

const materials =[
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatDividerModule,
  MatIconModule,
  MatSidenavModule,
  MatOptionModule,
  MatSelectModule,
  MatToolbarModule,
  MatDialogModule,
  ReactiveFormsModule
]
@NgModule({
  imports: [materials],
  exports: [materials],
})
export class MaterialModule { }
