import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

interface Skill {
  name: string;
  value: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('skillsContent') skillsContentRef!: ElementRef<HTMLElement>;

  readonly columnOne: Skill[] = [
    { name: 'JAVA', value: 80 },
    { name: 'Spring Boot', value: 90 },
    { name: 'Angular', value: 70 }
  ];

  readonly columnTwo: Skill[] = [
    { name: 'Microservices', value: 85 },
    { name: 'Docker & CI/CD', value: 80 },
    { name: 'Apache Kafka', value: 70 }
  ];

  readonly columnThree: Skill[] = [
    { name: 'SQL & Databases', value: 80 },
    { name: 'Keycloak & OAuth 2.0', value: 75 },
    { name: 'Grafana, Prometheus & ELK', value: 65 }
  ];

  private observer?: IntersectionObserver;
  animated = false;

  ngAfterViewInit(): void {
    if (!this.skillsContentRef) {
      return;
    }
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animated = true;
            this.observer?.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    this.observer.observe(this.skillsContentRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
