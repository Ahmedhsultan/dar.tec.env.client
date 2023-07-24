import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServerService } from 'src/app/service/server.service';
import { FailDialogComponent } from '../fail-dialog/fail-dialog.component';
import { SharedDataService } from '../../service/shared-data.service'
import { CategoryWithPlugins } from 'src/app/model/CategoryWithPlugins';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{
  categories!:any[];

  constructor(private server:ServerService, private failDialog: MatDialog,
    private dataSharingService: SharedDataService){}

  ngOnInit(): void {
    this.server.get('/category/all').subscribe(
      (any: any) => {
        this.categories = any;
      },
      (any: any) => {
        const dialogRef = this.failDialog.open(FailDialogComponent, {
          data: { msg: 'Failed to connect to server, Please reload page.\n' + any.message }
        });
      }
    );
  }

  onClick(categoryName:string){
    this.server.get(`/plugin/bycategory?categoryName=${categoryName}`).subscribe(
      (plugins: any) => {
        let categoryWithPlugins = new CategoryWithPlugins(categoryName, plugins);
        this.dataSharingService.setSelectedData(categoryWithPlugins);
      },
      (any: any) => {
        const dialogRef = this.failDialog.open(FailDialogComponent, {
          data: { msg: 'Failed to connect to server, Please reload page.\n' + any.message }
        });
      }
    );
  }
}
