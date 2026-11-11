import { AfterViewInit, Component } from '@angular/core';
import PureCounter from '@srexi/purecounterjs';

interface Fact {
  icon: string;
  end: number;
  label: string;
}

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements AfterViewInit {
  readonly facts: Fact[] = [
    { icon: 'bi bi-calendar-check', end: 3, label: 'Years of Experience' },
    { icon: 'bi bi-bank', end: 3, label: 'Banks Served' },
    { icon: 'bi bi-people', end: 3, label: 'Junior Developers Mentored' },
    { icon: 'bi bi-shield-lock', end: 500, label: 'Users Secured with RBAC' }
  ];

  ngAfterViewInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    new PureCounter();
  }
}
