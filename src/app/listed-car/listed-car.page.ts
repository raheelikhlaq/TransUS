import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-listed-car',
  templateUrl: './listed-car.page.html',
  styleUrls: ['./listed-car.page.scss'],
})
export class ListedCarPage implements OnInit {
  response: any;
  userID: any;
  Email: any;
  vehicles_list: any;
  base_url: any;
  loading: HTMLIonLoadingElement;
  constructor(public loadingController: LoadingController,public restService:RestService,private storage: Storage,public router:Router,public menuCtrl: MenuController) { }

  ngOnInit() {


  }
  ionViewWillEnter(){
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
  getCarList(){
    var stringy = JSON.stringify({
      "requestType" : "get_cars_list",
      "usersID":this.userID
    });
    console.log(stringy);
    this.present();
   this.restService.list_vehicles(stringy).subscribe(response => {
     this.response      =  JSON.parse(response['_body']);
     this.vehicles_list =  this.response.vehicles_list;
     this.dismiss();
     console.log(this.response);
     console.log(this.vehicles_list);
     this.dismiss();
    },err => {
    console.log(err);
    });
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  } 
  goToCarList(){
    this.router.navigate(['/list-your-car']);
  }
  editDetail(booking_details){
    var myData = JSON.stringify({
      booking_details: booking_details
    });
    
    this.router.navigate(['/edit-list-your-car'],{
      queryParams: {
        value : myData
        },
      });
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
