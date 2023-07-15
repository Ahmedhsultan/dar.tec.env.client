import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

const materials =[
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatDividerModule,
  MatIconModule
]
@NgModule({
  imports: [materials],
  exports: [materials],
})
export class MaterialModule { }
