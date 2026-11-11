import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import { PortfolioDataService, PortfolioDetail } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('sliderEl') sliderRef?: ElementRef<HTMLElement>;

  detail?: PortfolioDetail;
  private swiper?: Swiper;
  private routeSub?: Subscription;

  constructor(private route: ActivatedRoute, private portfolioData: PortfolioDataService) { }

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.detail = this.portfolioData.getDetail(id);
      // Re-init the slider whenever the id changes (navigating between detail pages)
      setTimeout(() => this.initSwiper());
    });
  }

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
    this.swiper?.destroy(true, true);
  }

  private initSwiper(): void {
    if (!this.sliderRef || !this.detail) {
      return;
    }
    this.swiper?.destroy(true, true);
    this.swiper = new Swiper(this.sliderRef.nativeElement, {
      modules: [Autoplay, Pagination],
      speed: 400,
      loop: this.detail.images.length > 1,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }
}
