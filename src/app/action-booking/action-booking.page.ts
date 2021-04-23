import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams, PopoverController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-action-booking',
  templateUrl: './action-booking.page.html',
  styleUrls: ['./action-booking.page.scss'],
})
export class ActionBookingPage implements OnInit {
  response: any;
  bookingId: any;
  booking_action: any;
  userID:any;
  ownerID:any;

  constructor(public navParams:NavParams,public restService:RestService,
              public navCtrl:NavController,public router:Router,
              public popoverController:PopoverController) {

    this.bookingId =  this.navParams.data.data;
    this.booking_action =  this.navParams.data.booking;
    this.ownerID = this.navParams.data.ownerID;
    this.userID  = this.navParams.data.userID;
    console.log(this.ownerID);
    console.log(this.booking_action);
    console.log(this.userID);
    console.log(this.bookingId)
   }

  ngOnInit() {
  }
  
  async ok() {
    await this.popoverController.dismiss();
  }
  async Hide() {
   // await this.popoverController.dismiss();
    this.popoverController.dismiss({
      //val
      val: 'ok'
      
    });
  //  this.router.navigate(['/']);
    
  }
  actionBooking(){
    if(this.booking_action == 'cancel_booking'){
      var stringy = JSON.stringify({
        "requestType" : "cancel_booking",
        "bookingID":this.bookingId,
        "usersID": this.userID,
        "ownerID": this.ownerID
      });
    }else if(this.booking_action == 'accept_booking'){
      var stringy = JSON.stringify({
        "requestType" : "accept_booking",
        "bookingID":this.bookingId,
        "usersID": this.userID,
        "ownerID": this.ownerID
      });
    }else if(this.booking_action == 'reject_booking'){
      var stringy = JSON.stringify({
        "requestType" : "reject_booking",
        "bookingID":this.bookingId,
        "usersID": this.userID,
        "ownerID": this.ownerID
      });
    }
   
    console.log(stringy);
   this.restService.booking_action(stringy).subscribe(response => {
     this.response      =  JSON.parse(response['_body']);
     if(this.response.status == 'success'){
      this.Hide();
     }
      console.log(this.response);
    },err => {
    
    });
  }

}
