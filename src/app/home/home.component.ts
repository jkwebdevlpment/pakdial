import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  catData:any;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.allCategoryList().subscribe(data=> {
     this.catData = data;
    })
  }

}
