import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let spectator: Spectator<CounterComponent>;
  const createComponent = createComponentFactory(CounterComponent);

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });

  it('should update count', () => {
    spectator = createComponent({ props: { count: 1 }});

    expect(spectator.query<HTMLElement>('p')?.textContent).toMatch('1');

    spectator.setInput({ count: 2 });

    expect(spectator.query<HTMLElement>('p')?.textContent).toMatch('2');
  });
});
