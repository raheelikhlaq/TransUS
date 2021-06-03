import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  userID: any;
  notify: string;
  response: any;
  Notifications: boolean=false;

  constructor(public restService:RestService,private storage: Storage,public router:Router,public menuCtrl: MenuController) { }
  
  ngOnInit() {
    this.storage.get('user_details').then((user_details) => {
      console.log(user_details);
      this.userID = user_details.users_id;
     });
     var notification = localStorage.getItem("enableNotification");
     if(notification == "true"){
       this.Notifications = true
     }
     else{
      this.Notifications = false
     }
  }
  notifie(){
    console.log(this.Notifications);
    if(this.Notifications){
      this.notify = 'Yes';
      localStorage.setItem("enableNotification", "true");
    }else{
      this.notify = 'No';
      localStorage.setItem("enableNotification", "false");
    }
    var stringy = JSON.stringify({
      "requestType" : "notifications_status",
      "usersID":this.userID,
      "enable":this.notify
    });
    console.log(stringy);
   this.restService.editProfile(stringy).subscribe(response => {
     this.response =  JSON.parse(response['_body']);
    
     
     console.log(this.response);
     
    },err => {
    
    });
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  } 
  goToPayment(){
    this.router.navigate(['/payment-detail']);
  }
  goToChangePassword(){
    this.router.navigate(['/change-password']);
  }

}
