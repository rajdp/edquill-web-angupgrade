import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-source-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './source-link.component.html',
  styleUrls: ['./source-link.component.scss']
})
export class SourceLinkComponent implements OnInit {

  @Input() pdfPath: any = [];
  @Input() setHeight = true;
  @Input() showWithIcon = true;
  public selectedVideolinkData: any;

  constructor(public sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
  }

  showVideo(videolink) {
    if (videolink.includes('youtube') && videolink.includes('watch') || videolink.includes('loom') || videolink.includes('mp4')) {
      if (videolink.includes('youtube') || videolink.includes('loom')) {
        this.selectedVideolinkData = this.sanitizer.bypassSecurityTrustResourceUrl(this.convertToEmbedUrl(videolink));
        console.log(this.selectedVideolinkData, 'selectedVideoLink');
      } else {
        this.selectedVideolinkData = this.sanitizer.bypassSecurityTrustResourceUrl(videolink);
      }
      setTimeout(() => {
        const element = document.getElementById('showVideo');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      this.selectedVideolinkData = '';
      window.open(videolink, '_blank');
    }
  }

  convertToEmbedUrl(url: string): string {
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const loomRegex = /loom\.com\/share\/([a-zA-Z0-9]+)/;

    const youtubeMatch = url.match(youtubeRegex);
    if (youtubeMatch && youtubeMatch[1]) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    }

    const loomMatch = url.match(loomRegex);
    if (loomMatch && loomMatch[1]) {
      return `https://www.loom.com/embed/${loomMatch[1]}`;
    }

    console.log(url, 'url');
    return url;
  }

}
