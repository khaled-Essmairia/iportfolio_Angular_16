import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FactsComponent } from './pages/facts/facts.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './pages/portfolio-details/portfolio-details.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'facts', component: FactsComponent, data: { title: 'Facts' } },
  { path: 'skills', component: SkillsComponent, data: { title: 'Skills' } },
  { path: 'resume', component: ResumeComponent, data: { title: 'Resume' } },
  { path: 'portfolio', component: PortfolioComponent, data: { title: 'Portfolio' } },
  { path: 'portfolio/:id', component: PortfolioDetailsComponent, data: { title: 'Portfolio Details' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
