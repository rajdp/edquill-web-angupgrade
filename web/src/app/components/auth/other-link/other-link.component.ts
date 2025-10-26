import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-other-link',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './other-link.component.html',
  styleUrls: ['./other-link.component.scss']
})
export class OtherLinkComponent implements OnInit {

  @Input() arrayValue: any = [];
  @Input() titleName = 'Additional resource links';
  @Input() showLink = true;
  @Input() calledFrom = '';
  @Output() saveLinks?: EventEmitter<any> = new EventEmitter();
  public isEditLink = false;
  public linksType = ['video', 'audio', 'document', 'ppt', 'Others'];
  public selectedVideolinkData: any;

  constructor(public sanitizer: DomSanitizer) { }

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

  addLinkArray() {
    this.isEditLink = true;
    this.arrayValue.push({
      type: 'document',
      name: '',
      link: ''
    });
  }

  filterEmptyArrayValue() {
    this.selectedVideolinkData = '';
    this.arrayValue.forEach(item => item.error = item.name == '' && item.link != '');
    if (this.arrayValue.some(item => item.error)) {
      return;
    }
    this.isEditLink = false;
    this.arrayValue = this.arrayValue.filter((item) => item.link !== '');
    this.arrayValue.forEach((list) => {
      list.link = list.link.includes('https') ? list.link : list.link.includes('http') ? list.link.replace(/^http:\/\//, 'https://') : 'https://' + list.link;
    });

    if (this.calledFrom == 'curriculum') {
      console.log(this.arrayValue, 'arrayalue');
      this.saveLinks.emit(this.arrayValue);
    }
  }

  deleteArray(index) {
    this.arrayValue.splice(index, 1);
  }

}
