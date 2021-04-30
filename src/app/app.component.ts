import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CommonserviceService } from './commonservice.service';
// import {Http,Response,ResponseOption,Headers} from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo';
  ApiUrl:String="http://httpbin.org";
  ProductDetails: any;

  constructor(private cs :CommonserviceService){

  }
 
}
