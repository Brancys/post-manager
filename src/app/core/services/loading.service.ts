import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loading = new BehaviorSubject<boolean>(false);
  private requestCount = 0;

  get isLoading$(): Observable<boolean> {
    return this.loading.asObservable();
  }

  show(): void {
    this.requestCount++;
    if (this.requestCount === 1) {
      this.loading.next(true);
    }
  }

  hide(): void {
    if (this.requestCount > 0) {
      this.requestCount--;
    }
    if (this.requestCount === 0) {
      this.loading.next(false);
    }
  }
}
