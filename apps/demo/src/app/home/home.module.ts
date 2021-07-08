import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, CounterComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
