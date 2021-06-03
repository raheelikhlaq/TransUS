import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, PopoverController, ToastController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
import { GiveRatingPage } from '../give-rating/give-rating.page';
import { ActionBookingPage } from '../action-booking/action-booking.page';
@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.page.html',
  styleUrls: ['./booking-list.page.scss'],
})
export class BookingListPage implements OnInit {
  pet: string = "puppies";
  response: any;
  userID: any;
  Email: any;
  vehicles_list: any;
  base_url: any;
  upcomingBooking: any;
  previousBooking: any;
  requested_bookings: any;
  currency_symbol: any;
  currencyID: any;

  constructor(public popoverController:PopoverController,
    public toastController:ToastController,public restService:RestService,
    private storage: Storage,public router:Router,public menuCtrl: MenuController,
    public alertController:AlertController,) { }

  ngOnInit() {
    this.storage.get('user_details').then((user_details) => {
      console.log(user_details);
      this.userID = user_details.users_id;
      this.Email = user_details.email;
      this.currencyID = user_details.currencies_id;
      this.getCarList();
      this.storage.get('base_urls').then((base_url) => {
        this.base_url = base_url;
      });
      this.storage.get('currency_symbol').then((currency_symbol) => {
        this.currency_symbol = currency_symbol;
      });
    });
    this.pet = 'request';
  }
 getCarList(){
  var stringy = JSON.stringify({
    "requestType" : "listed_cars",
    "usersID":this.userID,
    "currencyID": this.currencyID
  });
  console.log(stringy);
 this.restService.bookings(stringy).subscribe(response => {
   this.response      =  JSON.parse(response['_body']);
    console.log(this.response);
   this.previousBooking = this.response.previous_bookings;
   this.upcomingBooking = this.response.upcoming_bookings;
   this.requested_bookings = this.response.requested_bookings;
   if(this.previousBooking[0].bookings_id == null){
    this.previousBooking = [];
   }
   if(this.upcomingBooking[0].bookings_id == null){
    this.upcomingBooking = [];
   }
   if(this.requested_bookings[0].bookings_id == null){
    this.requested_bookings = [];
   }
  },err => {
  
  });
}


 toggleMenu(){
   this.menuCtrl.toggle();
 }

 back(){
    this.router.navigate(['/bookings']);
  }
  BookNow(){
    
    var stringy = JSON.stringify({
      "requestType": 'all_cars_list',
      "usersID": this.userID
    });
    console.log(stringy);
    this.restService.filters(stringy).subscribe(response => {
      this.response =  JSON.parse(response['_body']);
      if(this.response.status == 'NotFound'){
        this.presentToast('Data Not Found!');
     }else if(this.response.status == 'Found'){
       console.log(this.response.cars_list_result);
       var myData = JSON.stringify({
        cars_list_result: this.response.cars_list_result
      });
      
     this.router.navigate(['/car-list'],{
        queryParams: {
          value : myData
          },
        });
     }
     },err => {
     
     });
  }
  data:any;
  cancel(booking){
    console.log(booking)
    this.data = booking;
 // bookingid , action/requestType, userID, ownerid,
    this.action(this.data.bookings_id,'cancel_booking', this.data.booked_by_users_id, this.data.veh_users_id);
  }
  reject(booking){
    console.log(booking)
    this.data = booking;
     // bookingid , action/requestType, userID, ownerid,
    this.action(this.data.bookings_id,'reject_booking',this.data.booked_by_users_id, this.data.veh_users_id);
  }
  accept(booking){
    console.log(booking)
    this.data = booking;
     // bookingid , action/requestType, userID, ownerid,
    this.action(this.data.bookings_id,'accept_booking',this.data.booked_by_users_id, this.data.veh_users_id);
  }

async action(bookingId,action,userID, OwnerID){
    
  const popover = await this.popoverController.create({
    component: ActionBookingPage,
    translucent: true,
    componentProps: {
      "data": bookingId,
      "booking": action,
      "ownerID": OwnerID,
      "userID": userID,
    },
  }); 
  popover.onWillDismiss().then(data => {
    console.log(data);
    console.log(data.data.val);
    if(data.data.val == 'ok'){
      this.getCarList();
    }
  })
  return await popover.present();
} 
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position:'top'
    });
    toast.present();
  }


  

  async acceptUnapid() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Booking Infomation',
      subHeader: 'Booking Status Pending',
      message: 'You Accepted the booking and payment status is pending by user',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
