import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorService } from './loading-indicator.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-indicator.html',
  styleUrl: './loading-indicator.scss',
})
export class LoadingIndicatorComponent implements OnInit {
  isLoading$: Observable<boolean>;

  constructor(public loadingService: LoadingIndicatorService) {
    this.isLoading$ = this.loadingService.loading$;
  }

  ngOnInit(): void {}
}
