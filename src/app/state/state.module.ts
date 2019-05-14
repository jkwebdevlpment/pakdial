import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './state.component';
import { StateDetailsComponent } from './state-details/state-details.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { DetailsComponent } from './details/details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [StateComponent, StateDetailsComponent, DetailsComponent],
  imports: [
    CommonModule,
    StateRoutingModule,
    BarRatingModule,
    CarouselModule,
    
  ]
})
export class StateModule { }
