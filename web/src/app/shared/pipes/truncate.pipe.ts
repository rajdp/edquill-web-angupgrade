import {inject, Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'truncateHtml'
})
export class TruncateHtmlPipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);
  transform(value: string, limit: number = 50, trail: string = '...'): SafeHtml {
    if (!value) return this.sanitizer.bypassSecurityTrustHtml('-');

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = value;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    const truncatedText = textContent.trim().length > limit ? textContent.trim().substring(0, limit) + trail : textContent.trim();

    return this.sanitizer.bypassSecurityTrustHtml(truncatedText);
  }
}
