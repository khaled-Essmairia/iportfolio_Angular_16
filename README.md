# iPortfolio — Angular 16 conversion

Converted from the original static HTML "iPortfolio" template (BootstrapMade) into
an Angular 16.2.16 app using classic NgModules and a router with one route per section.

## Setup

```bash
npm install
npm start        # ng serve, http://localhost:4200
npm run build     # production build -> dist/iportfolio-angular
```

## Structure

- `src/app/layout/` — `HeaderComponent` (profile, nav, mobile toggle) and
  `FooterComponent` (copyright, back-to-top). Rendered once in `AppComponent`
  around `<router-outlet>`.
- `src/app/pages/` — one component per section, each mapped to its own route:
  - `/home` — hero (Typed.js)
  - `/about`
  - `/facts` — animated counters (PureCounter)
  - `/skills` — animated progress bars (IntersectionObserver, replaces the
    original Waypoints.js dependency)
  - `/resume`
  - `/portfolio` — filterable grid (Isotope + GLightbox)
  - `/portfolio/:id` — project detail page (Swiper slider), data comes from
    `PortfolioDataService` (id 0–6, one entry per original
    `portfolio-details*.html`)
  - `/contact`
- `src/app/core/services/`
  - `ScrollService` — shared back-to-top visibility & mobile nav open state
  - `PortfolioDataService` — all portfolio grid + detail content, extracted
    from the original HTML files
- `src/assets/` — original images, `style.css`, and the CV PDF, copied as-is
- Vendor libraries (Bootstrap, Bootstrap Icons, Boxicons, AOS, GLightbox,
  Isotope, Swiper, Typed.js, PureCounter) are installed via npm and wired
  into `angular.json` rather than manually vendored.

## Notes / things you may want to adjust

- The nav now has 7 items (Home/About/Resume/Skills/Facts/Portfolio/Contact)
  since every section got its own route — trim `HeaderComponent.navLinks` if
  you'd rather keep Facts/Skills folded into the About page.
- Google Fonts are still loaded via a normal `<link>` in `index.html` (font
  inlining is disabled in `angular.json` since it requires a build-time
  network fetch).
- The original `forms/contact.php` backend wasn't ported — `contact.html`
  itself has no `<form>`, just contact info + a map embed, so there was
  nothing to wire up. Add a contact form + real submit handler if you need one.
