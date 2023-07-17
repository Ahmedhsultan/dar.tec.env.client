import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { PluginListComponent } from './plugin-list/plugin-list.component';
import { PluginPageComponent } from './plugin-page/plugin-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'nav', component: NavbarComponent },
  { path: 'side', component: SidebarComponent },
  { path: 'plugins', component: PluginListComponent },
  { path: 'plugin', component: PluginPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
