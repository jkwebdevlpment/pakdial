import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { SearchComponent } from './component/search/search.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { SocialLandingComponent } from './social-landing/social-landing.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { FreeListingComponent } from './free-listing/free-listing.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [HomeComponent, SideMenuComponent, SearchComponent, SocialLandingComponent, AdvertiseComponent, FreeListingComponent, FooterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AutocompleteLibModule
  ]
})
export class HomeModule { }
