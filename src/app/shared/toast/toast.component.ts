import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, ToastMessage } from '../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  message: ToastMessage | null = null;
  timeoutId?: any;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.getToast().subscribe((msg) => {
      this.message = msg;
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => (this.message = null), 3000);
    });
  }
}
