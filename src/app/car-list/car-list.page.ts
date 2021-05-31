import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.page.html',
  styleUrls: ['./car-list.page.scss'],
})
export class CarListPage implements OnInit {
  response: any;
  cars_list_result: any;
  base_urls: any;
  currency_symbol: any;

  constructor(public menuCtrl:MenuController,private storage: Storage,public router:Router,public activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((res)=>{
      console.log(res,"getresponce")
      this.response = JSON.parse(res.value);
      console.log(this.response);
      console.log(this.response.cars_list_result,"fom my searching")
      if(this.response.cars_list_result != []){
        this.storage.get('base_urls').then((base_urls) => {
          this.base_urls = base_urls;
          this.storage.get('currency_symbol').then((currency_symbol) => {
            console.log('currency_symbol',currency_symbol);
            this.currency_symbol = currency_symbol;
            this.cars_list_result =  this.response.cars_list_result;
          });
        });
      }
      else{
        console.log(this.response.cars_list_result, "from else")
      }
     
      
    });
  }
  gotoDetail(data){
    var myData = JSON.stringify({
      cars_list_result: data,
      redirect:'/car-list'
    });
    
   this.router.navigate(['/car-detail'],{
      queryParams: {
        value : myData
        },
      });
  }
  ngOnInit() {
   
  }

  goToFilter(){
    this.router.navigate(['/filters']);
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
