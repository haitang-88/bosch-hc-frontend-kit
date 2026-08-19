import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator';

declare global {
  interface Window {
    initBoschFrontendKit: () => void;
  }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule, CommonModule, LoadingIndicatorComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Bosch HC Frontend Kit';
  theme = 'light-mode';

  constructor() {
    //window.initBoschFrontendKit();
  }
}
