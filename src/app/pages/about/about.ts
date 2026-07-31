import { Component } from '@angular/core';

interface TechItem {
  name: string;
  version: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  techStack: TechItem[] = [
    {
      name: 'Angular',
      version: 'v22',
      description: 'Latest version of the Angular framework with standalone components, signals, and improved performance.'
    },
    {
      name: 'TypeScript',
      version: 'v5.x',
      description: 'Strongly typed JavaScript for better developer experience and fewer runtime errors.'
    },
    {
      name: 'SCSS',
      version: 'Sass',
      description: 'CSS preprocessor for modular, maintainable, and scalable stylesheets.'
    },
    {
      name: 'Angular Router',
      version: 'Built-in',
      description: 'Client-side routing with lazy loading, guards, and resolvers for SPA navigation.'
    },
    {
      name: 'Karma & Jasmine',
      version: 'v5.x',
      description: 'Unit testing framework and test runner preconfigured out of the box.'
    },
    {
      name: 'Angular CLI',
      version: 'v22',
      description: 'Command-line interface for scaffolding, building, testing, and deploying Angular apps.'
    }
  ];
}
