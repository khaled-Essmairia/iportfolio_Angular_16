import { Component } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';

interface NavLink {
  anchor: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  readonly navLinks: NavLink[] = [
    { anchor: 'hero', label: 'Home', icon: 'bx bx-home' },
    { anchor: 'about', label: 'About', icon: 'bx bx-user' },
    { anchor: 'resume', label: 'Resume', icon: 'bx bx-file-blank' },
    { anchor: 'skills', label: 'Skills', icon: 'bx bx-bar-chart-alt-2' },
    { anchor: 'facts', label: 'Facts', icon: 'bx bx-line-chart' },
    { anchor: 'portfolio', label: 'Portfolio', icon: 'bx bx-book-content' },
    { anchor: 'contact', label: 'Contact', icon: 'bx bx-envelope' }
  ];

  mobileNavOpen = false;

  constructor(private scrollService: ScrollService) {
    this.scrollService.mobileNavOpen$.subscribe(open => this.mobileNavOpen = open);
  }

  toggleMobileNav(): void {
    this.scrollService.toggleMobileNav();
  }

  onNavClick(): void {
    this.scrollService.closeMobileNav();
  }
}
