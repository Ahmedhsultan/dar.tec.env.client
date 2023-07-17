import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PluginListComponent } from './plugin-list/plugin-list.component';
import { PluginPageComponent } from './plugin-page/plugin-page.component';
import { MaterialModule } from '../materials/materials.module';
import { DownloadDialogComponent } from './download-dialog/download-dialog.component';


@NgModule({
  declarations: [
    MainPageComponent,
    SidebarComponent,
    NavbarComponent,
    PluginListComponent,
    PluginPageComponent,
    DownloadDialogComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [MainPageComponent]
})
export class MainPageModule { }
