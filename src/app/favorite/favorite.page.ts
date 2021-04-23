import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  base_urls: any;
  userID: any;
  response: any;
  listVehicles: any;
  cars_list_result: any = [];
  Currencies: any;
  currency_symbol: any;

  constructor(public router:Router,public restService:RestService,private storage: Storage,public menuCtrl: MenuController) {
    
  }

 ngOnInit() {
   
  this.storage.get('base_urls').then((base_urls) => {
    this.base_urls = base_urls;
    
  });
 }
 ionViewWillEnter(){
  this.storage.get('user_details').then((user_details) => {
    this.storage.get('currency_symbol').then((currency_symbol) => {
      this.currency_symbol = currency_symbol;
    console.log(user_details);
    this.userID = user_details.users_id;
    this.Currencies = user_details.currencies_id;
    this.favourite();
  });
});
 }
 toggleMenu(){
   this.menuCtrl.toggle();
 }
 favourite(){
  var stringy = JSON.stringify({
    "requestType": 'get_fav_cars_list',
    "usersID" : this.userID,
    "currencyID": this.Currencies
   });
   console.log(stringy);
  this.restService.list_vehicles(stringy).subscribe(response => {
    this.listVehicles =  JSON.parse(response['_body']);
    this.cars_list_result = this.listVehicles.cars_list_result;
    console.log(this.cars_list_result);
    if(this.cars_list_result == undefined){
      this.cars_list_result = [];
    }
   
    
   
   
   },err => {
   
   });
}
gotoDetail(data){
  var myData = JSON.stringify({
    cars_list_result: data,
    redirect:'/favorite'
  });
  
 this.router.navigate(['/car-detail'],{
    queryParams: {
      value : myData
      },
    });
}
}
