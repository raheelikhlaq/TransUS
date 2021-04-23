import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  LoadingController, MenuController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-listed-motor',
  templateUrl: './listed-motor.page.html',
  styleUrls: ['./listed-motor.page.scss'],
})
export class ListedMotorPage implements OnInit {
  userID: any;
  Email: any;
  base_url: any;
  response: any;
  vehicles_list: any;
  loading: HTMLIonLoadingElement;
  constructor(public loadingController: LoadingController,public restService:RestService,private storage: Storage,public router:Router,public menuCtrl: MenuController) { }
  ngOnInit() {
    this.storage.get('user_details').then((user_details) => {
      console.log(user_details);
      this.userID = user_details.users_id;
      this.Email = user_details.email;
      this.getCarList();
      this.storage.get('base_urls').then((base_url) => {
        this.base_url = base_url;
      });
    });

  }
  ionViewWillEnter(){
    if(this.userID){
      this.getCarList();
    }
  }
  getCarList(){
    var stringy = JSON.stringify({
      "requestType" : "get_motors_list",
      "usersID":this.userID
    });
    console.log(stringy);
   
   this.restService.list_vehicles(stringy).subscribe(response => {
     this.response      =  JSON.parse(response['_body']);
     this.vehicles_list =  this.response.vehicles_list;
     console.log(this.response);
     
    },err => {
      
    });
  }
  goToEdit(data){
    var myData = JSON.stringify({
      booking_details: data
    });
    
    this.router.navigate(['/edit-motor'],{
      queryParams: {
        value : myData
        },
      });
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  } 
  goToBikeList(){
    this.router.navigate(['/list-your-bike']);
  }
 
}
