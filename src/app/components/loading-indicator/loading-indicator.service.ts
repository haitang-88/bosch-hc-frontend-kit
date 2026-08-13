import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingIndicatorService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public type = 1;
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  show(): void {
    this.loadingSubject.next(true);
    this.type = 1;
  }

  show2(): void {
    this.loadingSubject.next(true);
    this.type = 2;
  }

  hide(): void {
    this.loadingSubject.next(false);
  }

  isLoading(): boolean {
    return this.loadingSubject.value;
  }
}
