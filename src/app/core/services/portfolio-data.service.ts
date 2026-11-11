import { Injectable } from '@angular/core';

export type PortfolioCategory = 'web' | 'platform';

export interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
}

export interface PortfolioDetail {
  id: number;
  images: string[];
  category: string;
  heading: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  /** Grid items shown on the Portfolio page (4 platforms + 3 websites) */
  readonly items: PortfolioItem[] = [
    { id: 0, image: 'assets/img/portfolio/doctor-2.png', title: 'Doctor Management', category: 'platform', categoryLabel: 'Platform' },
    { id: 1, image: 'assets/img/portfolio/gym-2.png', title: 'Gym Management', category: 'platform', categoryLabel: 'Platform' },
    { id: 2, image: 'assets/img/portfolio/hospital-1.png', title: 'Hospital Management', category: 'platform', categoryLabel: 'Platform' },
    { id: 3, image: 'assets/img/portfolio/pharmacy-1.png', title: 'Pharmacy Management', category: 'platform', categoryLabel: 'Platform' },
    { id: 4, image: 'assets/img/portfolio/clinic-1.png', title: 'Clinic Website', category: 'web', categoryLabel: 'Web' },
    { id: 5, image: 'assets/img/portfolio/company-1.png', title: 'NextTech Website', category: 'web', categoryLabel: 'Web' },
    { id: 6, image: 'assets/img/portfolio/student-1.png', title: 'Student Courses Website', category: 'web', categoryLabel: 'Web' }
  ];

  /** Detail pages, keyed by id 0-6 (route: /portfolio/:id) */
  readonly details: PortfolioDetail[] = [
    {
      id: 0,
      images: ['assets/img/portfolio/doctor-1.png', 'assets/img/portfolio/doctor-2.png', 'assets/img/portfolio/doctor-3.png', 'assets/img/portfolio/doctor-4.png', 'assets/img/portfolio/doctor-5.png', 'assets/img/portfolio/doctor-6.png', 'assets/img/portfolio/doctor-7.png', 'assets/img/portfolio/doctor-8.png', 'assets/img/portfolio/doctor-9.png', 'assets/img/portfolio/doctor-10.png', 'assets/img/portfolio/doctor-11.png', 'assets/img/portfolio/doctor-12.png', 'assets/img/portfolio/doctor-13.png', 'assets/img/portfolio/doctor-14.png', 'assets/img/portfolio/doctor-15.png'],
      category: 'Platform - Healthcare',
      heading: 'Doctor management platform',
      description: `A complete patient and practice management platform for doctors and private clinics. The secretary can register patients (or import them in bulk), schedule appointments, record consultations with diagnosis and treatment, and issue printable prescriptions. A built-in billing module creates invoices, tracks paid and unpaid amounts and prints receipts, while the dashboard summarizes the day's appointments, new patients and monthly revenue. The interface is available in French, Arabic and English, every table can be exported to CSV, and the database is backed up automatically every day.`
    },
    {
      id: 1,
      images: ['assets/img/portfolio/gym-1.png', 'assets/img/portfolio/gym-2.png', 'assets/img/portfolio/gym-3.png', 'assets/img/portfolio/gym-4.png', 'assets/img/portfolio/gym-5.png', 'assets/img/portfolio/gym-6.png', 'assets/img/portfolio/gym-7.png'],
      category: 'Platform - Fitness',
      heading: 'Gym management platform',
      description: `A management application built for gyms and fitness clubs. It offers a dashboard with key figures and charts, member registration and a searchable list of registered members, payment tracking with printable receipts, and a reporting page to export data. The application is protected by a built-in licence system so that each installation stays tied to the client it was delivered to.`
    },
    {
      id: 2,
      images: ['assets/img/portfolio/hospital-1.png', 'assets/img/portfolio/hospital-2.png', 'assets/img/portfolio/hospital-3.png', 'assets/img/portfolio/hospital-4.png'],
      category: 'Platform - Healthcare',
      heading: 'Hospital management platform',
      description: `A hospital management platform that brings the daily work of a medical facility into a single place. The dashboard shows active doctors, patients, nurses, departments and available beds, together with invoices, billed, collected and outstanding amounts. Dedicated modules cover patients, doctors, departments, schedules, appointments, invoices and payments, reports, human resources and bed management.`
    },
    {
      id: 3,
      images: ['assets/img/portfolio/pharmacy-1.png', 'assets/img/portfolio/pharmacy-2.png', 'assets/img/portfolio/pharmacy-3.png', 'assets/img/portfolio/pharmacy-4.png'],
      category: 'Platform - Healthcare',
      heading: 'Pharmacy management platform',
      description: `A pharmacy management platform to run stock, purchases and sales. The dashboard highlights today's sales, available categories, expired medicines and system users, with a graph report of purchases, sales and suppliers. Pharmacists can record purchases with category, supplier, cost price, quantity and expiry date, manage products and suppliers, follow sales reports, control access by user role, create database backups and customize the application name, currency and logo from the settings page.`
    },
    {
      id: 4,
      images: ['assets/img/portfolio/clinic-1.png', 'assets/img/portfolio/clinic-2.png', 'assets/img/portfolio/clinic-3.png'],
      category: 'Web - Healthcare',
      heading: 'Clinic website',
      description: `A modern, responsive showcase website for a medical clinic. It presents the clinic's services and medical specialities, introduces its team of specialists and guides patients with clear calls to action, all in a clean and reassuring design that adapts to desktop, tablet and phone screens.`
    },
    {
      id: 5,
      images: ['assets/img/portfolio/company-1.png', 'assets/img/portfolio/company-2.png', 'assets/img/portfolio/company-3.png'],
      category: 'Web - Company website',
      heading: 'NextTech Solution website',
      description: `The official website of NextTech Solution, a company that builds web platforms and websites for businesses. It presents the company's services, explains its working process in four steps (discover, design, develop, launch and support) and invites visitors to get in touch, with a responsive layout and a contact form.`
    },
    {
      id: 6,
      images: ['assets/img/portfolio/student-1.png', 'assets/img/portfolio/student-2.png'],
      category: 'Web - Education',
      heading: 'Online courses website',
      description: `A responsive website for an online learning center. Visitors can browse the course catalogue, discover the instructors and sign in or create an account to follow the courses, in a bright and easy-to-navigate interface.`
    }
  ];

  getDetail(id: number): PortfolioDetail | undefined {
    return this.details.find(d => d.id === id);
  }
}
