import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams, PopoverController, ToastController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-enter-offer',
  templateUrl: './enter-offer.page.html',
  styleUrls: ['./enter-offer.page.scss'],
})
export class EnterOfferPage implements OnInit {
  email:any;
  response: any;
  currency_symbol: any;
  price:any;
  booking_data: any;
  userId: any;
  currencies_id: any;
  constructor(public navParams:NavParams,public storage:Storage,public toastController:ToastController,public router:Router,public popoverController:PopoverController,public restService:RestService) { 
    this.booking_data =  this.navParams.data.data;
    console.log(this.booking_data);
  }

  ngOnInit() {
     this.storage.get('currency_symbol').then((currency_symbol) => {
          this.currency_symbol = currency_symbol;
     });
     this.storage.get('user_details').then((user_details) => {
      console.log(user_details);
      this.userId = user_details.users_id;
      this.currencies_id = user_details.currencies_id;
      
    });
  }
  
  async ok() {
    await this.popoverController.dismiss();
  }
  async sendRequest() {
    var stringy = JSON.stringify({
      "requestType": "send_price",
      "riderID":this.userId,
      "customerID":this.booking_data.users_id,
      "vehicleID":this.booking_data.vehicles_id,
      "price": this.price,
      "currencyID": this.currencies_id
    });
    console.log(stringy);
    this.restService.inquire_charges(stringy).subscribe(response => {
      this.response =  JSON.parse(response['_body']);
      console.log(this.response.status);
      if(this.response.status == 'error'){
          this.presentToast('Oops!something went wrong');
      }else if(this.response.status == 'success'){
        this.presentToast('offer submitted successfully!');
        this.ok();
      }
     
    },err => {
    
    });
    
   
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position:'top'
    });
    toast.present();
  }

}
