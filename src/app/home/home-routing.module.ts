import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { SocialLandingComponent } from './social-landing/social-landing.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { FreeListingComponent } from './free-listing/free-listing.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sideMenu',
    component: SideMenuComponent
  },
  
  {
    path: 'social-landing',
    component: SocialLandingComponent
  },
  {
    path: 'advertise',
    component: AdvertiseComponent
  },
  {
    path: 'free-listing',
    component: FreeListingComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
