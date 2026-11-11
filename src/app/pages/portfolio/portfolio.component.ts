import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';
import { PortfolioDataService, PortfolioItem } from '../../core/services/portfolio-data.service';

type Filter = 'all' | 'web' | 'platform';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit, OnDestroy {
  @ViewChild('portfolioContainer') portfolioContainerRef!: ElementRef<HTMLElement>;

  readonly items: PortfolioItem[] = this.portfolioData.items;
  activeFilter: Filter = 'all';

  private isotope?: Isotope;
  private lightbox?: ReturnType<typeof GLightbox>;
  private readonly onWindowLoad = () => this.isotope?.layout();

  constructor(private portfolioData: PortfolioDataService) { }

  ngAfterViewInit(): void {
    // Let Angular finish rendering the *ngFor items before Isotope scans the DOM
    setTimeout(() => {
      const container = this.portfolioContainerRef.nativeElement;

      this.isotope = new Isotope(container, {
        itemSelector: '.portfolio-item'
      });
      this.lightbox = GLightbox({ selector: '.portfolio-lightbox' });

      // Re-layout each time an image finishes loading
      container.querySelectorAll('img').forEach((img: HTMLImageElement) => {
        if (!img.complete) {
          img.addEventListener('load', () => this.isotope?.layout(), { once: true });
          img.addEventListener('error', () => this.isotope?.layout(), { once: true });
        }
      });

      // Safety net: once the whole page (images, fonts, CSS) has loaded
      if (document.readyState === 'complete') {
        this.isotope.layout();
      } else {
        window.addEventListener('load', this.onWindowLoad);
      }
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('load', this.onWindowLoad);
    this.isotope?.destroy();
    this.lightbox?.destroy();
  }

  setFilter(filter: Filter): void {
    this.activeFilter = filter;
    const filterValue = filter === 'all' ? '*' : `.filter-${filter}`;
    this.isotope?.arrange({ filter: filterValue });
  }
}