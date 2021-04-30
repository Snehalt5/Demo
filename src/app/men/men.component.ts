import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {

  AllProductDetails: any;

  constructor(private cs :CommonserviceService) { }

  ngOnInit(): void {
    this.getAllProductDetails();
  }
  public getAllProductDetails(){
    this.AllProductDetails=[{
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
    },
    {
      id:'4',
      name:"Men save Home half sleeve",
      Price:"350"
    },
    {
      id:'5',
      name:"Men save Home half sleeve",
      Price:"350"
    },
    {
      id:'6',
      name:"Men save Home half sleeve",
      Price:"350"
    }]
    
  // this.cs.getAllProduct().subscribe(res => {
  //   if (res.status == 200) {
  //     this.AllProductDetails = res.data;
  //   } 
  // })
 }
}

