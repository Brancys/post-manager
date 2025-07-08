import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface ToastMessage {
  text: string;
  type: 'success' | 'error';
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new Subject<ToastMessage>();

  getToast(): Observable<ToastMessage> {
    return this.toastSubject.asObservable();
  }

  show(text: string, type: 'success' | 'error' = 'success'): void {
    this.toastSubject.next({ text, type });
  }
}
