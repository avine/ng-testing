import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter/counter.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderComponent, CounterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should NOT increment', async () => {
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).querySelector('p')?.textContent).toMatch('0');

    component.count = 1;
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).querySelector('p')?.textContent).not.toMatch('1');
  });
});
