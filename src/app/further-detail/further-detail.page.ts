import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-further-detail',
  templateUrl: './further-detail.page.html',
  styleUrls: ['./further-detail.page.scss'],
})
export class FurtherDetailPage implements OnInit {
  response: any;
  cars_list_result: any;
  start_date: string;
  end_date: string;
  constructor(public activatedRoute:ActivatedRoute,public router:Router) {
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.response = JSON.parse(res.value);
      this.cars_list_result = this.response.cars_list_result;
      console.log(this.response);
      if(this.cars_list_result.start_date){
        let sDate = new Date(this.cars_list_result.start_date);
        let eDate = new Date(this.cars_list_result.end_date);
        this.start_date = this.formatDate(sDate);
        this.end_date   = this.formatDate(eDate);
      }
      
    });
   }

  ngOnInit() {
   
  }
  formatDate(dateObj){
    const days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
    const months = ["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    
    const dateOrdinal=(dom)=> {
        if (dom == 31 || dom == 21 || dom == 1) return dom + "st";
        else if (dom == 22 || dom == 2) return dom + "nd";
        else if (dom == 23 || dom == 3) return dom + "rd";
        else return dom + "th";
    };
    //dateObj.getDate())+', '+
    return days[dateObj.getDay()]+', '+ months[dateObj.getMonth()]+' '+dateObj.getFullYear();
  }
  back(){
    this.router.navigate(['/car-detail']);
  }

}
