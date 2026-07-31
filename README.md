# Bosch HC Frontend Kit

Demo how to use FrontEnd kit into existing project.

This project is built with **Angular 22** and showcases a clean, scalable frontend setup using the latest Angular features including standalone components, signals, and modern routing.

## Pages

- **Home** (`/home`) — Landing page with hero banner, feature highlights, and a CTA section.
- **About** (`/about`) — Project information, technology stack, and links.

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- Angular CLI 22: `npm install -g @angular/cli`

### Installation

```bash
npm install
```

### Development Server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app automatically reloads on source file changes.

### Build

```bash
ng build
```

Build artifacts are stored in the `dist/` directory.

### Running Tests

```bash
ng test
```

## Project Structure

```
src/
├── app/
│   ├── pages/
│   │   ├── home/          # Home page component
│   │   └── about/         # About page component
│   ├── app.ts             # Root app component
│   ├── app.html           # Root template (header + router-outlet + footer)
│   ├── app.scss           # Global layout styles
│   ├── app.routes.ts      # Application routes
│   └── app.config.ts      # App configuration (provideRouter, etc.)
├── styles.scss             # Global stylesheet
└── index.html              # HTML entry point
```

## Technology Stack

| Technology    | Version  |
|---------------|----------|
| Angular       | v22      |
| TypeScript    | v5.x     |
| SCSS          | Sass     |
| Angular CLI   | v22      |
| Vitest        | v4.x     |
