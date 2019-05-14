import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api:string = 'http://pakdial.com/api/';

  constructor(public http: HttpClient) { }
 
  allCategoryList(){
   return this.http.get(this.api+'Category/get_main_category_home')
  }
}
