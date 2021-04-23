import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { RestService } from '../rest.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { PhotoviewerPage } from '../photoviewer/photoviewer.page';
import { IonSlides, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.page.html',
  styleUrls: ['./car-detail.page.scss'],
})
export class CarDetailPage implements OnInit {
  response: any;
  cars_list_result: any;
  base_urls: any;
  userID: any;
  favouriteVehicle: boolean = false;
  currency_symbol: any;
  model_name: any;
  veh_imgs: any;
  charge_per_day: any;
  description: any;
  about_owner: any;
  country_name: any;
  owner_work: any;
  language_name: any;
  ratting_stars: any;
  redirect: any;

  showSlide: any = 'no'

  constructor(private photoViewer: PhotoViewer, public restService: RestService, private storage: Storage, public router: Router, public activatedRoute: ActivatedRoute, public modalCtrl: ModalController) {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.response = JSON.parse(res.value);
      this.storage.get('base_urls').then((base_urls) => {
        this.base_urls = base_urls;
        if(this.response.redirect != "/notification"){
        this.cars_list_result = this.response.cars_list_result;
        this.model_name = this.cars_list_result.model_name;
        this.veh_imgs = this.cars_list_result.veh_imgs;
        this.charge_per_day = this.cars_list_result.charge_per_day;
        this.description = this.cars_list_result.description;
        this.about_owner = this.cars_list_result.about_owner;
        this.country_name = this.cars_list_result.country_name;
        this.owner_work = this.cars_list_result.owner_work;
        this.language_name = this.cars_list_result.language_name;
        this.ratting_stars = this.cars_list_result.ratting_stars;
        this.redirect = this.response.redirect;
        if (this.cars_list_result.favourite == 'Yes') {
          this.favouriteVehicle = true;
        } else {
          this.favouriteVehicle = false;
        }
        console.log(this.response);
      }
      else{

        this.cars_list_result = this.response.cars_list_result;
        this.model_name = this.cars_list_result.model_name;
        this.veh_imgs = this.cars_list_result.vehicle_imgs;
        this.charge_per_day = this.cars_list_result.charge_per_day;
        this.description = this.cars_list_result.description;
        this.about_owner = this.cars_list_result.about;
        this.country_name = this.cars_list_result.country_name;
        this.owner_work = this.cars_list_result.owner_work;
        this.language_name = this.cars_list_result.language_name;
        this.ratting_stars = this.cars_list_result.ratting_stars;
        this.redirect = this.response.redirect;
        if (this.cars_list_result.favourite == 'Yes') {
          this.favouriteVehicle = true;
        } else {
          this.favouriteVehicle = false;
        }
        console.log(this.response);


      }
      });

    });
  }


  ionViewWillEnter() {
    this.showSlide = 'no'
  }

  ngOnInit() {
    this.storage.get('base_urls').then((base_urls) => {
      this.base_urls = base_urls;
      this.storage.get('user_details').then((user_details) => {
        console.log(user_details);
        if (user_details) {
          this.userID = user_details.users_id;
        }

        this.storage.get('currency_symbol').then((currency_symbol) => {
          console.log('currency_symbol', currency_symbol);
          this.currency_symbol = currency_symbol;
        });
      });
    });
  }
  previewImage(p) {
    console.log('photo viewer')

    this.showSlide = 'yes'

    this.indexOfSLide = 1


    //this.photoViewer.show(this.base_urls + '' + p);
  }

  closeModel() {
    this.showSlide = 'no'
  }

  indexOfSLide = 1

  @ViewChild('slides', { static: false }) slides: IonSlides;

  slideChanged(e: any) {
    this.slides.getActiveIndex().then((index: number) => {
      console.log('index -----------', index);

      this.indexOfSLide = index + 1

    })
  }


  // async openMapModel() {

  //   let modal = await this.modalCtrl.create({
  //     component: PhotoviewerPage,
  //     cssClass: 'map-model',
  //     backdropDismiss: false,
  //     componentProps: {
  //       veh_imgs: this.veh_imgs,
  //     }
  //   })

  //   modal.present()
  // }
  favourite(request: any, vehicle_id: any) {
    if (this.userID) {
      console.log(vehicle_id);
      var stringy = JSON.stringify({
        "requestType": request,
        "vehicleID": vehicle_id,
        "usersID": this.userID
      });
      console.log(stringy);
      this.restService.favourite_settings(stringy).subscribe(response => {
        this.response = JSON.parse(response['_body']);
        console.log(this.response.status);
        if (this.response.status == 'error') {

        } else if (this.response.status == 'success') {
          if (request == 'add_fav') {
            this.favouriteVehicle = true;
          } else {
            this.favouriteVehicle = false;
          }

        }

      }, err => {

      });
    } else {
      this.router.navigate(['/login']);
    }
  }
  chatRequest() {
    if (this.userID) {
      var stringy = JSON.stringify({
        "requestType": 'chatRequest',
        "otherUserId": this.cars_list_result.users_id,
        "usersID": this.userID
      });
      console.log(stringy);
      this.restService.update_messages(stringy).subscribe(response => {
        this.response = JSON.parse(response['_body']);
        console.log(this.response);
        if (this.response.status == 'error') {

        } else if (this.response.status == 'AlreadySent' || this.response.status == 'RequestSend') {
          var myData = JSON.stringify({
            otherUserId: this.cars_list_result.users_id,
            userID: this.userID,
            user_name: this.response.user_name,
            profile_img: this.response.profile_img
          });
          console.log(myData);
          this.router.navigate(['/chat-detail'], {
            queryParams: {
              value: myData
            },
          });

        }

      }, err => {

      });
    } else {
      this.router.navigate(['/login']);
    }
  }
  goToHome() {
    this.router.navigate([this.redirect]);
  }
  furtherDetail() {
    this.router.navigate(['/further-detail']);
  }
  gotoDetail() {

  }
  bookNow() {
    if (this.userID) {
      var myData = JSON.stringify({
        vehicle_id: this.cars_list_result.vehicles_id,
        start_date: this.cars_list_result.start_date,
        end_date: this.cars_list_result.end_date,
        model_name: this.model_name

      });

      this.router.navigate(['/car-booking'], {
        queryParams: {
          value: myData
        },
      });
    } else {
      this.router.navigate(['/login']);
    }
  }
  info() {
    var myData = JSON.stringify({
      cars_list_result: this.cars_list_result
    });

    this.router.navigate(['/further-detail'], {
      queryParams: {
        value: myData
      },
    });
  }

}
