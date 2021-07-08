import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { CounterComponent } from './counter/counter.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let spectator: Spectator<HomeComponent>;
  const createComponent = createComponentFactory({
    component: HomeComponent,
    declarations: [HeaderComponent, CounterComponent],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should increment', async () => {
    expect((spectator.query('p') as HTMLElement).textContent).toMatch('0');

    spectator.component.count = 1;
    spectator.detectComponentChanges();

    expect((spectator.query('p') as HTMLElement).textContent).toMatch('1');
  });
});
