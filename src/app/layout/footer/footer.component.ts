import { Component, HostListener } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  showBackToTop = false;

  constructor(private scrollService: ScrollService) {
    this.scrollService.showBackToTop$.subscribe(show => this.showBackToTop = show);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrollService.updateScrollState(window.scrollY);
  }

  backToTop(event: Event): void {
    event.preventDefault();
    this.scrollService.scrollToTop();
  }
}
