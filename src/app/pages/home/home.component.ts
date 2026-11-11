import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private typed?: Typed;

  ngAfterViewInit(): void {
    this.typed = new Typed('.typed', {
      strings: ['Backend Engineer', 'Java & Spring Boot Developer', 'Full-Stack Engineer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  ngOnDestroy(): void {
    this.typed?.destroy();
  }
}
