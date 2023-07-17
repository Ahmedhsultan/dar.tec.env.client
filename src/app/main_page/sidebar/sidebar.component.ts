import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isSidebarOpen: boolean = true; // Set initial state, adjust as needed

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}