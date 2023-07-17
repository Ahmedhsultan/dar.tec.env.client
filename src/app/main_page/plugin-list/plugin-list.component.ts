import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DownloadDialogComponent } from '../download-dialog/download-dialog.component';

@Component({
  selector: 'app-plugin-list',
  templateUrl: './plugin-list.component.html',
  styleUrls: ['./plugin-list.component.css']
})
export class PluginListComponent {
  productName = 'Angular Introduction';
  productDescription = `Learn the basics of Angular in this introduction video..\nLearn the basics of Angular in this introduction video.Learn the basics of Angular in this introduction video.
                        Learn the basics of Angular in this introduction video..\nLearn the basics of Angular in this introduction video.Learn the basics of Angular in this introduction video.
                        Learn the basics of Angular in this introduction video..\nLearn the basics of Angular in this introduction video.Learn the basics of Angular in this introduction video.
                        Learn the basics of Angular in this introduction video..\nLearn the basics of Angular in this introduction video.Learn the basics of Angular in this introduction video.
                        Learn the basics of Angular in this introduction video.
                        Learn the basics of Angular in this introduction video..\nLearn the basics of Angular in this introduction video.Learn the basics of Angular in this introduction video.
                        Learn the basics of Angular in this introduction video..\nLearn the basics of Angular in this introduction video.Learn the basics of Angular in this introduction video.
                        Learn the basics of Angular in this introduction video..\nLearn the basics of Angular in this introduction video.Learn the basics of Angular in this introduction video.
                        Learn the basics of Angular in this introduction video..\nLearn the basics of Angular in this introduction video.Learn the basics of Angular in this introduction video.
                        Learn the basics of Angular in this introduction video.`;
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private dialog: MatDialog) {
    // Replace VIDEO_ID with the actual ID of the YouTube video
    const videoId = 'VIDEO_ID';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/watch?v=O6P-r8xa0KM&ab_channel=EXTRATube`);
  }

  download() {
    // Implement download functionality here
    const dialogRef = this.dialog.open(DownloadDialogComponent, {
      // width: '400px', // Set the width of the dialog as needed
      data: { downloadLink: 'your_download_link_hereyour_download_link_here' } // Replace 'your_download_link_here' with the actual download link
    });
  }

  addToWishlist() {
    // Implement add to wishlist functionality here
  }
}
