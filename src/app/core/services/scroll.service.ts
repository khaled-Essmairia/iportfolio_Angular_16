import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  /** Whether the page has scrolled past the "show back-to-top button" threshold */
  showBackToTop$ = new BehaviorSubject<boolean>(false);

  /** Whether the mobile nav (hamburger) menu is open */
  mobileNavOpen$ = new BehaviorSubject<boolean>(false);

  updateScrollState(scrollY: number): void {
    this.showBackToTop$.next(scrollY > 100);
  }

  toggleMobileNav(): void {
    this.mobileNavOpen$.next(!this.mobileNavOpen$.value);
  }

  closeMobileNav(): void {
    if (this.mobileNavOpen$.value) {
      this.mobileNavOpen$.next(false);
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
