import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should NOT update count twice', () => {
    component.count = 1;
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).querySelector('p')?.textContent).toMatch('1');

    component.count = 2;
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).querySelector('p')?.textContent).not.toMatch('2');
  });
});
