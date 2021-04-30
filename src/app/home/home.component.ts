import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ProductDetails: any;

  constructor(private cs :CommonserviceService) { }

  ngOnInit(): void {
    this.Custget();
  }
  public Custget(){
    this.ProductDetails=[{
      id:'1',
      name:"Men save Home half sleeve",
      Price:"350"
    },
    {
      id:'2',
      name:"Men save Home half sleeve",
      Price:"350"
    },
    {
      id:'3',
      name:"Men save Home half sleeve",
      Price:"350"
    }]
    
  // this.cs.getProduct().subscribe(res => {
  //   if (res.status == 200) {
  //     this.ProductDetails = res.data;
  //   } 
  // })
 }
}
