import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { Location } from '@angular/common';
import { SharedDataServiceService } from 'src/app/services/shared-data-service.service';
import { StoreRating } from 'src/app/services/authetication.service';
import { SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-detailpage',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  responses : any;
  Visibility : boolean;
  isDisabled : boolean;
  credentials : StoreRating = 
 {
    rating_val:''
 }


  constructor(private http: HttpClient ,private router: Router,private share : SharedDataServiceService,private _location:Location) { }
  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  activeSlides: SlidesOutputData;

  slidesStore: any[];

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }
  ngOnInit() {
    let base;
    let num;
    var data = this.share.getDataByOption("listingId");
    base = this.http.post("http://pakdial.com/api/Listing/view",{listing_id : data});
    //base.subscribe((d)=>this.responses=d);
    base.subscribe((d)=>{this.responses=d;
    console.log(d);
    num = d.cat_names.length;
    console.log(num)});
    console.log(this.responses);
    this.Visibility = this.share.isReviewDone();

  }
  saveItem(event)
  {
    if(this.share.getDataByOption("user"))
    {
      this.isDisabled=true;
      var user_id = this.share.getDataByOption("user").user.user_id;
      var listingId = this.share.getDataByOption("listingId");
      this.http.post("http://pakdial.com/api/Listing/save_item",{user_id : user_id , listing_id : listingId}).subscribe((d)=>console.log(d));
    }
    else{
      this.router.navigateByUrl('/login');
    }
  }
  alsoListedclicked(event,data)
  {
      this.share.setPosition();
      var inc = this.share.getPosition();
      this.share.setData(inc,data);
      this.router.navigateByUrl('/location');
  }
  bestdealclicked(event)
  {
    console.log("hi there!");
     this.router.navigateByUrl('/bestdeal');
  }
  ratechanged()
  {
      this.share.setData("rating",this.credentials.rating_val);
      this.router.navigateByUrl('/review');
  }
}