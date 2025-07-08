import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './shared/toast/toast.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'post-manager';
}
