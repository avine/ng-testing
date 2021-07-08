import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'demo-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  @Input() count!: number;
}
