import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, PopoverController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
import { AcceptOfferPage } from '../accept-offer/accept-offer.page';

@Component({
  selector: 'app-view-all-notifications',
  templateUrl: './view-all-notifications.page.html',
  styleUrls: ['./view-all-notifications.page.scss'],
})
export class ViewAllNotificationsPage implements OnInit {
  userID: any;
  response: any;
  notifications: any;
  base_url: any;
  callInterval: any;
  currencies_id: any;

  constructor(public popoverController: PopoverController, public restService: RestService, private storage: Storage, public router: Router, public menuCtrl: MenuController) {

  }

  ngOnInit() {
    this.storage.get('user_details').then((user_details) => {
      console.log(user_details);
      this.userID = user_details.users_id;

      this.currencies_id = user_details.currencies_id;
      this.storage.get('base_urls').then((base_url) => {
        this.base_url = base_url;
        this.viewAll();
      });

    });
    // this.callInterval = setInterval(() => {
    //   this.viewAll();

    // }, 3000
    // );
  }
  ionViewWillLeave() {
    clearInterval(this.callInterval);
    console.log('clear');
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
  viewAll() {
    var stringy = JSON.stringify({
      "requestType": "get_all",
      "usersID": this.userID,
      "limit": 100,
      "offset": 0,
      "readFilter":''
    });    
    console.log(stringy);
    this.restService.notifications(stringy).subscribe(response => {
      this.response = JSON.parse(response['_body']);
      console.log(this.response);
      if (this.response.status == 'NotFound') {
        this.notifications = [];
      } else if (this.response.status == 'Found') {
        this.notifications = this.response.notifications;
      }

    }, err => {

    });
  }
  // inquire_charges
  gotoDetails:any;
  accptOffer(p) {

    console.log(p);

    if (p.offer_id) {
      this.readNotification(p)
      var stringy = JSON.stringify({
        "requestType": "check_offer_by_id",
        "customerID": this.userID,
        "offerID": p.offer_id,
        "currencyID": this.currencies_id
      });
      this.restService.inquire_charges(stringy).subscribe(response => {
        this.response = JSON.parse(response['_body']);
        console.log(this.response);
        if (this.response.status == 'NotFound') {
          console.log('NotFound');
        } else if (this.response.status == 'Found') {
          this.offerPopup(this.response.offers, p.offer_id);
        }
      }, err => {

      });
    }


    if (p.type_id == '1' || p.type_id == '3') {
      console.log('msggggggggggg',p);
      this.readNotification(p)
      var myData = JSON.stringify({
        userID: p.receiver_id,
        otherUserId: p.sender_id,
        user_name: p.sender_name,
        profile_img: p.sender_img_url

      });
      console.log(myData);
      this.router.navigate(['/chat-detail'], {
        queryParams: {
          value: myData
        }
      });

    }

    if (p.type_id == '5' || p.type_id == '7') {
    
    //  this.readNotification(p);

      var vhDetails = JSON.stringify({
        requestType: "get_car_details_by_id",
        usersID: this.userID,
        vehicleID: p.vehicle_id,
        currencyID: this.currencies_id
      })

      console.log(vhDetails);
      this.router.navigate(['/listed-car']);


      // this.restService.list_vehicles(vhDetails).subscribe(vhRes =>{
      //   console.log(JSON.parse(vhRes['_body'])," resss wheel");
      //   this.gotoDetails =JSON.parse(vhRes['_body'])
      //   console.log(this.gotoDetails.vehicles_list[0], "listing")
      //   var myData = JSON.stringify({
      //     cars_list_result: this.gotoDetails.vehicles_list[0],
      //     redirect: '/notification'
      //   });

      //   this.router.navigate(['/car-detail'], {
      //     queryParams: {
      //       value: myData  
      //     },
      //   });
      // },(err)=>{
      //   console.log(err);
      // });

    
    }
  }


  readNotification(notification) {
  
     var read = JSON.stringify({
      requestType : 'mark_read',
      usersID:    this.userID,
      notifyID: notification.notifications_id
     })
     this.restService.notifications(read).subscribe(res =>{
       console.log(res);
     
     },(readError)=>{
       console.log(readError);
     })

  }
  async offerPopup(p, offer_id) {
    const popover = await this.popoverController.create({
      component: AcceptOfferPage,
      componentProps: {
        "data": p,
        "offer_id": offer_id
      },
      translucent: true
    });
    popover.onWillDismiss().then(data => {

      // console.log('dismiss');

    })
    return await popover.present();
  }
}
