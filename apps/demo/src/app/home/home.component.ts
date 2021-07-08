import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  count = 0;

  increment() {
    this.count += 1;
  }
}
