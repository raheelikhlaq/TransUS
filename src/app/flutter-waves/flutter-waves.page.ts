import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastController, LoadingController, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AsyncPaymentOptions, Flutterwave, PaymentSuccessResponse } from 'flutterwave-angular-v3';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-flutter-waves',
  // templateUrl: './flutter-waves.page.html',
  template:  ` <button (click)="payViaPromise()" >Pay via Promise </button>`,
  styleUrls: ['./flutter-waves.page.scss'],
})
export class FlutterWavesPage implements OnInit {

  constructor(public toastController:ToastController,

    private flutterwave: Flutterwave,

    public loadingController: LoadingController,private storage: Storage,
    public restService:RestService,public activatedRoute:ActivatedRoute,
    public router:Router,public menuCtrl: MenuController) { }
    response: any;
    booking_details: any;
    base_url: any;
    booking_id:any;
    trip_cost:number=77;
    wallet_amount:any
    userID:any;
    Email:any;
    name:any;
    date:any='';

    publicKey = "FLWPUBK_TEST-24a82587c83dda8d3c3a9ea64dd6e405-X";
 
    customerDetails = { name: '', email: '', phone_number: ''}
     
    customizations = {title: 'TransUS', description: 'Pay now for confrim your booking', logo: 'https://flutterwave.com/images/logo-colored.svg'}
   
    meta = {'counsumer_id': '7898', 'consumer_mac': 'kjs9s8ss7dd'}
  

    paymentData : AsyncPaymentOptions = {
      public_key: this.publicKey,
      tx_ref: this.generateReference(),
      amount: this.trip_cost,
      currency: 'NGN',
      payment_options: 'card',
      meta: this.meta,
      customer: this.customerDetails,
      customizations: this.customizations,
     }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.response = JSON.parse(res.value);
      console.log(this.response);
      this.booking_details =  this.response.booking_details;
      this.trip_cost = parseInt(this.booking_details.trip_cost);
      this.booking_id = this.booking_details.bookings_id;
      console.log(this.trip_cost);
      this.storage.get('user_details').then((user_details) => {
        console.log(user_details);
        this.wallet_amount = user_details.wallet_amount;
        this.userID = user_details.users_id;
          this.Email = user_details.email;
          this.name = user_details.user_name

          this.customerDetails.name = this.name;
          this.customerDetails.email = this.Email;
          this.date = new Date();
           this.date.getTime().toString();
          console.log(this.customerDetails)

      });
      /*var date1 = new Date(this.booking_details.start_date); 
      var date2 = new Date(this.booking_details.end_date);
      var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
      // To calculate the no. of days between two dates 
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
        console.log('dieffernce in days: '+Difference_In_Days);*/
  });
  }
  getRespo:any;
  payViaPromise() {
    this.flutterwave.asyncInlinePay(this.paymentData).then(
      (response) =>{
        console.log("Promise Res line 88" , response)
        this.getRespo = response;
        this.flutterwave.closePaymentModal(5);
        if(this.getRespo.status == "successful"){

        }
      }
    )
  }

  makePaymentCallback(response: PaymentSuccessResponse): void {
    console.log("Pay", response);
    this.flutterwave.closePaymentModal(5)
  }
  closedPaymentModal(): void {
    console.log('payment is closed');
  }
  generateReference(): string {
    let date = new Date();
    return date.getTime().toString();
  }

}
