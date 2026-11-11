import { AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import AOS from 'aos';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'iportfolio-angular';
  isPortfolioDetails = this.router.url.startsWith('/portfolio/');

  constructor(private router: Router) {
    // Re-run AOS's element scan whenever we navigate to a new route,
    // since each page mounts its own [data-aos] elements.
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(event => {
        this.isPortfolioDetails = event.urlAfterRedirects.startsWith('/portfolio/');
        setTimeout(() => AOS.refresh());
      });
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
}
