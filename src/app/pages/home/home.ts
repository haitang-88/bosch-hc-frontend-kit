import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  features: Feature[] = [
    {
      icon: '⚡',
      title: 'Angular Latest',
      description: 'Built with Angular 22 using the latest standalone components, signals, and modern APIs.'
    },
    {
      icon: '🎨',
      title: 'Bosch Design',
      description: 'Follows Bosch brand guidelines with a consistent and professional look and feel.'
    },
    {
      icon: '📐',
      title: 'Scalable Architecture',
      description: 'Structured for growth with lazy-loaded routes, feature modules, and clean separation of concerns.'
    },
    {
      icon: '🔒',
      title: 'Enterprise Ready',
      description: 'Includes routing guards, HTTP interceptors, and best practices for enterprise applications.'
    },
    {
      icon: '📱',
      title: 'Responsive Layout',
      description: 'Fully responsive design that adapts beautifully across desktop, tablet, and mobile devices.'
    },
    {
      icon: '🧪',
      title: 'Testing Support',
      description: 'Preconfigured with Jasmine and Karma for unit tests and component testing.'
    }
  ];
}
