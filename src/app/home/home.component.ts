import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { SharedDataServiceService } from '../services/shared-data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  catData:any;
  constructor(public dataService: DataService,
              private share : SharedDataServiceService,
              public router: Router) { }

  ngOnInit() {
    this.dataService.allCategoryList().subscribe(data=> {
     this.catData = data;
    })
  }

  ItemClicked(event , response,catName)
  {
      var inc = this.share.getPosition();
      this.share.setData(inc,response.category_id);
      this.router.navigateByUrl('/state?='+catName);
  }

  openNav(){
    this.router.navigateByUrl('sideMenu');
  }
}
