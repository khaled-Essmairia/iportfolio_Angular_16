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

  constructor(private portfolioData: PortfolioDataService) { }

  ngAfterViewInit(): void {
    // Let Angular finish rendering the *ngFor items before Isotope scans the DOM
    setTimeout(() => {
      this.isotope = new Isotope(this.portfolioContainerRef.nativeElement, {
        itemSelector: '.portfolio-item'
      });
      this.lightbox = GLightbox({ selector: '.portfolio-lightbox' });
    });
  }

  ngOnDestroy(): void {
    this.isotope?.destroy();
    this.lightbox?.destroy();
  }

  setFilter(filter: Filter): void {
    this.activeFilter = filter;
    const filterValue = filter === 'all' ? '*' : `.filter-${filter}`;
    this.isotope?.arrange({ filter: filterValue });
  }
}
