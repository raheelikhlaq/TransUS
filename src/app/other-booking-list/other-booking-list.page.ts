import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController, PopoverController, ToastController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
import { GiveRatingPage } from '../give-rating/give-rating.page';
import { ActionBookingPage } from '../action-booking/action-booking.page';
@Component({
  selector: 'app-other-booking-list',
  templateUrl: './other-booking-list.page.html',
  styleUrls: ['./other-booking-list.page.scss'],
})
export class OtherBookingListPage implements OnInit {

  pet: string = "puppies";
  response: any;
  userID: any;
  Email: any;
  vehicles_list: any;
  base_url: any;
  upcomingBooking: any;
  previousBooking: any;
  pending_bookings:any;
  currencyID: any;
  currency_symbol: any;

  constructor(public toastController:ToastController,
    public popoverController:PopoverController,public restService:RestService,
    private storage: Storage,public router:Router,public menuCtrl: MenuController,
    public activatedRoute:ActivatedRoute, public alertController:AlertController) { }
    valres:any;
  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.valres =  res.value;
      console.log(res);
      console.log(this.valres);
      if(this.valres){
        if(this.valres == "pending"){
          this.pet = 'pending';
        }
        else if(this.valres == "upcoming"){
          this.pet = 'upcoming';
        }
       
       
      }
      else{
        this.pet = 'previous';
        console.log('previous')
      }
      
    })
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

    
    
  }

  ngOnInit(){
    
  }

async giveRating(bookingId){
    
  const popover = await this.popoverController.create({
    component: GiveRatingPage,
    translucent: true,
    componentProps: {
      "data": bookingId,
      "booking": 'cancel_booking'
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
 getCarList(){
  var stringy = JSON.stringify({
    "requestType" : "others_cars",
    "usersID":this.userID,
    "currencyID": this.currencyID
  });
  console.log(stringy);
 this.restService.bookings(stringy).subscribe(response => {
   this.response      =  JSON.parse(response['_body']);
    console.log(this.response);
   this.previousBooking = this.response.previous_bookings;
   if(this.previousBooking[0].bookings_id == null){
    this.previousBooking = [];
   }
   this.upcomingBooking = this.response.upcoming_bookings;
   if(this.upcomingBooking.length != 0){
   if(this.upcomingBooking[0].bookings_id == null || undefined){
    this.upcomingBooking = [];
   }
  }
   
   this.pending_bookings = this.response.pending_bookings;
   console.log(this.pending_bookings)
  //  if(this.pending_bookings[0].bookings_id == null){
  //   this.upcomingBooking = [];
  //  }
  },err => {
  
  });
}

data:any;
async cancelBooking(booking){
  this.data = booking;
  const popover = await this.popoverController.create({
    component: ActionBookingPage,
    translucent: true,
    componentProps: {
      "data": this.data.bookings_id,
      "booking": 'cancel_booking',
      "ownerID": this.data.veh_users_id,
      "userID": this.data.booked_by_users_id,
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

paynow(bookingdetails){

  console.log(bookingdetails)
  console.log(bookingdetails.veh_imgs)
  
  var myData = JSON.stringify({
    booking_details: bookingdetails,
    vehicle_imgs: bookingdetails.veh_imgs
  });

  this.router.navigate(['/summary'], {
    queryParams: {
      value: myData
    },
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
      "usersID": this.userID,
      "currencyID": this.currencyID
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
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position:'top'
    });
    toast.present();
  }

   
  async pendingAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Booking Infomation',
      subHeader: 'Booking Status Pending',
      message: 'Your booking status is Pending, you can proceed when it is Accepted by the owner',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
