import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, MenuController, ToastController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.page.html',
  styleUrls: ['./payment-detail.page.scss'],
})
export class PaymentDetailPage implements OnInit {
  response: any;
  booking_details: any;
  base_url: any;
  payment_methods: any;
  sliderStartBoolean:number =0;
  wallet_amount: number;
  currency_symbol: any;
  userID: any;
  trip_cost:number;
  amount_error:boolean=false;
  desc:any = '';
  loading: HTMLIonLoadingElement;
  booking_id:any;
  constructor(public toastController:ToastController,
    public loadingController: LoadingController,private storage: Storage,
    public restService:RestService,public activatedRoute:ActivatedRoute,
    public router:Router,public menuCtrl: MenuController) { 
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.response = JSON.parse(res.value);
      console.log(this.response);
      this.booking_details =  this.response.booking_details;
      this.trip_cost = this.booking_details.trip_cost;
      this.booking_id = this.booking_details.bookings_id;
      console.log(this.trip_cost);
      /*var date1 = new Date(this.booking_details.start_date); 
      var date2 = new Date(this.booking_details.end_date);
      var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
      // To calculate the no. of days between two dates 
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
        console.log('dieffernce in days: '+Difference_In_Days);*/
  });
  
  }
  Email:any;
  ngOnInit() {
    this.storage.get('base_urls').then((base_url) => {
      this.base_url = base_url;
      this.storage.get('user_details').then((user_details) => {
        console.log(user_details);
        this.wallet_amount = user_details.wallet_amount;
        this.userID = user_details.users_id;
          this.Email = user_details.email;
        this.getUserDetail()
        this.storage.get('currency_symbol').then((currency_symbol) => {
          this.currency_symbol = currency_symbol;
        });
      });
      this.get_payment_method_detail();
     
    });
  }
  getStartIndex(i){
    document.querySelector('.bg_active img').setAttribute('src',this.base_url+''+this.payment_methods[this.sliderStartBoolean].white_icon_url);
    
    this.sliderStartBoolean = i;
    setTimeout(() => {
    document.querySelector('.bg_active img').setAttribute('src',this.base_url+''+this.payment_methods[this.sliderStartBoolean].blue_icon_url);
    
    }, 100);
  }
  get_payment_method_detail(){
    var stringy = JSON.stringify({
      "requestType" : "payment_methods"
    });
    console.log(stringy);
   this.restService.getDdlData(stringy).subscribe(response => {
     this.response      =  JSON.parse(response['_body']);
     this.payment_methods = this.response.payment_methods;
      console.log(this.response);
      this.getStartIndex(0);
    },err => {
    
    });
  }
  getUserDetail(){
    var stringy = JSON.stringify({
      "usersID":this.userID,
      "requestType":'withID'
    });
    console.log(stringy);
   this.restService.getUserDetails(stringy).subscribe(response => {
     this.response =  JSON.parse(response['_body']);
     console.log(this.response);
     if(this.response.status == 'NotFound'){
      
     }else if(this.response.status == 'Found'){
       this.storage.set('user_details', this.response.user_details);
       this.wallet_amount  = this.response.user_details.wallet_amount;
     
     }
    },err => {
    
    });
  }
 
  sendPayment(){
    this.amount_error = false;
    var wallet_amount  = parseFloat(this.response.user_details.wallet_amount.replace(/,/g, ''));
    var trip_cost = parseFloat(this.booking_details.trip_cost.replace(/,/g, ''));
    if(wallet_amount>trip_cost){
      var stringy = JSON.stringify({
        "usersID":this.userID,
        "requestType":'make_payment',
        "bookingID":this.booking_details.bookings_id,
        "paymentMethodID":this.payment_methods[0].payment_methods_id,
        "desc": this.desc
      });
      console.log(stringy);
      this.present();
     this.restService.transactions(stringy).subscribe(response => {
       this.response =  JSON.parse(response['_body']);
       console.log(this.response);
       if(this.response.status == 'success'){
          this.presentToast('Your payment has been received and admin will review your booking.');
       }else{
        this.presentToast('Oops! something went wrong!');
       }
        this.dismiss();
        this.router.navigate(['/']); 
      },err => {
      this.dismiss();
      });
    }else{
      this.amount_error = true;
    }
  }
  
  toggleMenu(){
    this.menuCtrl.toggle();
  } 
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position:'top'
    });
    toast.present();
  }
  async present() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await this.loading.present();
  }
  

  async dismiss() {
      await this.loading.dismiss();
  }
}
