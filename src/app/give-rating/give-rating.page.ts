import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams, PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-give-rating',
  templateUrl: './give-rating.page.html',
  styleUrls: ['./give-rating.page.scss'],
})
export class GiveRatingPage implements OnInit {

  activeRating:number = 0;
  active_star_1:boolean= false;
  active_star_2:boolean= false;
  active_star_3:boolean= false;
  active_star_4:boolean= false;
  active_star_5:boolean= false;
  bookingId: any;
  userID: any;
  Description:any;
  response: any;
  starts: number = 0;
  constructor(public restService:RestService,private storage: Storage,public navParams:NavParams,public navCtrl:NavController,public router:Router,public popoverController:PopoverController) { 
    this.bookingId =  this.navParams.data.data;
    this.storage.get('user_details').then((user_details) => {
      console.log(user_details);
      this.userID = user_details.users_id;
    });
  }

  
  async ok() {
    await this.popoverController.dismiss();
  }
  async goToHome() {
   // await this.popoverController.dismiss();
    this.popoverController.dismiss({
      //val
      val: 'ok'
      
    });
  //  this.router.navigate(['/']);
    
  }

  ngOnInit() {
  }
  logRatingChange(rating){
    console.log(rating);
    this.starts = rating;
    this.active_star_1 = false;
    this.active_star_2 = false;
    this.active_star_3 = false;
    this.active_star_4 = false;
    this.active_star_5 = false;
    if(rating == 1){
      this.active_star_1 = true;
    }else if(rating == 2){
      this.active_star_1 = true;
      this.active_star_2 = true;
    }else if(rating == 3){
      this.active_star_1 = true;
      this.active_star_2 = true;
      this.active_star_3 = true;
    }else if(rating == 4){
      this.active_star_1 = true;
      this.active_star_2 = true;
      this.active_star_3 = true;
      this.active_star_4 = true;
    }else if(rating == 5){
      this.active_star_1 = true;
      this.active_star_2 = true;
      this.active_star_3 = true;
      this.active_star_4 = true;
      this.active_star_5 = true;
    }
    //var empty = 5 - rating;
    //console.log(empty);
  //  this.emtpy_rating = Array.from({length:4},(v,k)=>k+1);
  }
  giveRating(){
    var stringy = JSON.stringify({
      "requestType" : "add_review",
      "usersID":this.userID,
      "bookingID":this.bookingId,
      "feedback":this.Description,
      "stars": this.starts
    });
    console.log(stringy);
   this.restService.reviews(stringy).subscribe(response => {
     this.response      =  JSON.parse(response['_body']);
      console.log(this.response);
      this.goToHome();
    },err => {
    
    });
  }

}
