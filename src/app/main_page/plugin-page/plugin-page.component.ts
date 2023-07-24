import { Component } from '@angular/core';
import { CategoryWithPlugins } from 'src/app/model/CategoryWithPlugins';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-plugin-page',
  templateUrl: './plugin-page.component.html',
  styleUrls: ['./plugin-page.component.css']
})
export class PluginPageComponent {
  public plugins!:any[];
  public categoryName!:String;
  constructor(private dataSharingService: SharedDataService){}
  ngOnInit() {
    this.dataSharingService.getSelectedData().subscribe((categoryWithPlugins: CategoryWithPlugins) => {
      this.plugins = categoryWithPlugins.plugins;
      this.categoryName = categoryWithPlugins.categoryName;
    });
  }

  openPlugin(pluginName:String){
  }
}
