import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { LoadingController, MenuController, PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AcceptOfferPage } from '../accept-offer/accept-offer.page';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pet: string = "puppies";
  option1 = {
    loop: true,
    direction: 'vertical',
    slidesPerView: 2
  };
  userID: any = '';
  response: any;
  base_urls: any;
  car_types: any;
  top_rated_cars: any;
  top_rated_motors: any;
  notifications: any;
  user_name: any;
  currencyID: any;
  currency_symbol: any;
  loading: HTMLIonLoadingElement;
  sliderStartBoolean: number;
  baseUrl: string = 'https://app.transusdrives.com/';

  currencies_id: any = ''

  constructor(public loadingController: LoadingController, 
    private storage: Storage, public router: Router, public menuCtrl: MenuController, 
    public restService: RestService, public popoverController: PopoverController,
    public oneSignal:OneSignal) {
    this.pet = 'cars';

    this.storage.set('base_urls', this.baseUrl);
  }
  ngOnInit() {
    // alert("this is new build")
  }


  oneSignalData:any;
  OneSignal_userid:any;
  oneSignal_pushToken:any;
  oneDataSet:any;
  userDetail:any;
  ionViewWillEnter() {
    this.present();
    this.storage.get('user_details').then((user_details) => {
      console.log(user_details, "calling from home");
      if(user_details){
        this.userDetail = user_details
        var get_Setting = JSON.stringify({
          requestType : 'get_core_settings'
        })
        this.restService.CoreSettingOneSignal(get_Setting).subscribe(res=>{
          console.log(res, "from onesignal");

          this.oneDataSet =JSON.parse(res['_body']);
          console.log(this.oneDataSet,"getiing from oneset")
          this.oneSignal.startInit(this.oneDataSet.onesignal_app_key, this.oneDataSet.onesignal_server_id);
          this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
          this.oneSignal.handleNotificationReceived().subscribe(() => {
 
      });

      this.oneSignal.handleNotificationOpened().subscribe((res) => {
        console.log(res, "received notiiiiiiiiiiiiify")
      });

      this.oneSignal.endInit();
      this.oneSignal.getIds().then((id) => {
        ////console.log(id);
        this.oneSignalData = id;

     //   alert("one signal -: " + JSON.stringify(this.oneSignalData));

        this.OneSignal_userid = this.oneSignalData.userId
        this.oneSignal_pushToken = this.oneSignalData.pushToken
        console.log(this.OneSignal_userid)
     //   alert("one signal -: " + JSON.stringify(this.OneSignal_userid));
      //  alert("one signal -: " + JSON.stringify(this.oneSignal_pushToken));
        console.log(this.oneSignal_pushToken)
        console.log(this.oneSignalData)

        var update = JSON.stringify({
          requestType : 'user',
          email: this.userDetail.email,
          oneSignalID: this.OneSignal_userid
        })

        this.restService.upDateOnesignal(update).subscribe(res =>{
          console.log(res , " update one signal")
        },(err)=>{
          console.log(err)
        })

      })
        },(err)=>{
          console.log(err)
        })

      this.userID = user_details.users_id;

      this.currencies_id = user_details.currencies_id;
      }
    });
    this.storage.get('base_urls').then((base_urls) => {
      this.base_urls = base_urls;
      this.storage.get('user_details').then((user_details) => {
        this.storage.get('currency_symbol').then((currency_symbol) => {
          this.currency_symbol = currency_symbol;
          console.log('currency_symbol', this.currency_symbol);
          console.log(user_details);
          if (user_details) {
            this.userID = user_details.users_id;
            this.user_name = user_details.user_name;
            this.currencyID = user_details.currencies_id;
            this.homeData();

          } else {
            this.userID = '';

            console.log('call');
            this.getDropDownData();
          }
          // this.homeData();
          // this.getStartIndex(0);
        });
      });
    });
  }
  showCar() {
    this.getStartIndex(this.sliderStartBoolean);
  }
 
  getStartIndex(i) {
    console.log(this.sliderStartBoolean ,"line");
    if (this.sliderStartBoolean == undefined) {
      this.sliderStartBoolean = i;
      setTimeout(() => {
        document.querySelector('.bg_active img').setAttribute('src', this.New_car_types[this.sliderStartBoolean].type_icon_img);
      
      }, 50);
    } else {
      document.querySelector('.bg_active img').setAttribute('src', this.New_car_types[this.sliderStartBoolean].type_icon_img);
   
    }
    console.log(i);
    this.sliderStartBoolean = i;
    setTimeout(() => {
      console.log(i);
      document.querySelector('.bg_active img').setAttribute('src', this.New_car_types[this.sliderStartBoolean].white_icon_img);
  
    }, 50);

    
  }


  getStartIndexClick(data,i) {
    console.log(this.sliderStartBoolean ,"line");
    console.log(data)
    console.log(data.car_types_id)
    if (this.sliderStartBoolean == undefined) {
      this.sliderStartBoolean = i;
      setTimeout(() => {
        document.querySelector('.bg_active img').setAttribute('src', this.New_car_types[this.sliderStartBoolean].type_icon_img);
      // this.ifFound();
       this.filterFound(data.car_types_id)
      }, 50);
    } else {
      document.querySelector('.bg_active img').setAttribute('src', this.New_car_types[this.sliderStartBoolean].type_icon_img);
      // this.ifFound();
      this.filterFound(data.car_types_id)
    }
  

  }



  getDropDownData() {
    var stringy = JSON.stringify({
      "requestType": "currencies"
    });
    console.log(stringy);
    this.restService.getDdlData(stringy).subscribe(response => {
      this.response = JSON.parse(response['_body']);
      this.storage.set('currency_symbol', this.response.default_currency.symbol);
      this.currencyID = this.response.default_currency.currencies_id
      console.log(this.response,"currency id");
      this.homeData();

    }, err => {

    });
  }
  New_car_types=[];
  homeData() {
   
    var stringy = JSON.stringify({
      "requestType": 'home_page',
      "usersID": this.userID,
      "currencyID": this.currencyID
    });
    console.log(stringy);
    this.restService.homeData(stringy).subscribe(response => {
      this.New_car_types = [];
      this.response = JSON.parse(response['_body']);

      console.log(this.response);
      this.car_types = this.response.car_types;
      console.log(this.car_types,"types")

      if(this.car_types[3].name == 'Car'){
        this.New_car_types.push(this.car_types[3]);
        console.log(this.New_car_types, "finnal")
        if(this.car_types[1].name == 'Suv'){
          this.New_car_types.push(this.car_types[1]);
          if(this.car_types[0].name == 'Van'){
            this.New_car_types.push(this.car_types[0]);
            if(this.car_types[2].name == 'Mini Van'){
                this.New_car_types.push(this.car_types[2]);
                console.log(this.New_car_types, "finnal")
            }
          }
        }
       

      }
      this.top_rated_cars = this.response.top_rated_cars.cars_list_result;
      this.top_rated_motors = this.response.top_rated_motors.motors_list_result;

      var stringfy = JSON.stringify({
        "requestType": 'get_all',
        "usersID": this.userID,
        "limit": 4,
        "offset": 0,
        'readFilter':"Unread"
      });
      console.log(stringy);
      this.restService.notifications(stringfy).subscribe(response => {
        this.response = JSON.parse(response['_body']);
        if (this.sliderStartBoolean) {
          this.getStartIndex(this.sliderStartBoolean);
        } else {
          this.getStartIndex(0);
        }

        this.dismiss();
        this.notifications = this.response.notifications;
        // this.sliderStartBoolean = 0;

        // this.getStartIndex(0);
        console.log(this.response);

      }, err => {
        this.dismiss();
      });
    }, err => {
      this.dismiss();
    });

    var SearchingData = JSON.stringify({
      "currencyID": this.currencyID,
      "requestType":"all_veh",
      "userID":this.userID
    })
    this.restService.allVehicles(SearchingData).subscribe(resSearching =>{
      console.log(JSON.parse(resSearching['_body']),"searching DAta")
      this.responsess =  JSON.parse(resSearching['_body']);
      console.log(this.responsess, "from body ")
      if(this.responsess.status == 'NotFound'){
        // this.presentToast('Data Not Found!');
     }else if(this.responsess.status == 'Found'){
       console.log(this.responsess.all_approved_cars);
  
     }
    })
  }
  responsess:any;
  ifFound(){
    var myData = JSON.stringify({
      cars_list_result: this.responsess.all_approved_cars
    });
    
   this.router.navigate(['/car-list'],{
      queryParams: {
        value : myData
        },
      });
  }

  filterCars:any;
  allser:any;
  filterFound(id){
    var data = JSON.stringify({
      "currencyID": this.currencyID,
      "requestType":"select_veh",
      "carTypeID":id,
      "userID":this.userID
    })   
    console.log(data)
    this.restService.filterSearching(data).subscribe(res=>{
      this.filterCars = res;
      console.log(JSON.parse(this.filterCars['_body']))
      this.allser = JSON.parse(this.filterCars['_body']);
      var myData = JSON.stringify({
        cars_list_result: this.allser.selected_approved_car
      });
      
     this.router.navigate(['/car-list'],{
        queryParams: {
          value : myData
          },
        });
    },err=>{
      console.log(err)
    })
  }
  gotoDetail(data) {
    console.log(data)
    var myData = JSON.stringify({
      cars_list_result: data,
      redirect: '/'
    });

    this.router.navigate(['/car-detail'], {
      queryParams: {
        value: myData
      },
    });
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
  carDetail() {

    this.router.navigate(['/car-detail']);
  }
  goToFilter() {
    this.router.navigate(['/filters']);
  }
  GotoList() {

    this.storage.get('user_details').then((user_details) => {
      console.log(user_details);
      if (user_details) {
        this.router.navigate(['/list-your-bike']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
  goToCarList() {
    this.storage.get('user_details').then((user_details) => {

      if (user_details) {
        this.router.navigate(['/list-your-car']);
      } else {
        this.router.navigate(['/login']);
      }
    });

  }
  viewMotorDetail(p) {

    var myData = JSON.stringify({
      motor_detail: p
    });
    console.log(myData);
    this.router.navigate(['/view-bike-detail'], {
      queryParams: {
        value: myData
      },
    });



  }
  refer() {
    window.open("https://play.google.com/store/apps", '_system', 'location=yes');
  }
  viewAllNotifications() {
    this.storage.get('user_details').then((user_details) => {
      if (user_details) {
        this.router.navigate(['/view-all-notifications']);
      } else {
        this.router.navigate(['/login']);
      }
    });

  }
  async present() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await this.loading.present();
  }


   dismiss() {
  this.loading.dismiss();
  }

  accptOffer(p) {

    console.log(p, "ok nice notificatino");

    if(p.type_id == '1'){
      this.router.navigate(['/chat-list'])
    }
    if(p.type_id == '2'){
      this.router.navigate(['/booking-list'])
    }
    if(p.type_id == '3'){
      this.router.navigate(['/chat-list'])
    }
    if(p.type_id == '5'){
      this.router.navigate(['/other-booking-list'])
    }
    if(p.type_id == '6'){
      this.router.navigate(['/listed-car'])
    }
    if(p.type_id == '7'){
      this.router.navigate(['/listed-car'])
    }
    if(p.type_id == '8'){
      this.router.navigate(['/listed-car'])
    }

    if(p.type_id == '9'){
      this.router.navigate(['/other-booking-list'])
    }
    if(p.type_id == '10'){
      this.router.navigate(['/other-booking-list'])
    }
    if(p.type_id == '11'){
      this.router.navigate(['//other-booking-list'])
    }

    if(p.type_id == '12'){
      this.router.navigate(['/other-booking-list'])
    }
    if(p.type_id == '13'){
      this.router.navigate(['/listed-car'])
    }

    // if (p.offer_id) {
    //   var stringy = JSON.stringify({
    //     "requestType": "check_offer_by_id",
    //     "customerID": this.userID,
    //     "offerID": p.offer_id,
    //     "currencyID": this.currencies_id
    //   });
    //   this.restService.inquire_charges(stringy).subscribe(response => {
    //     this.response = JSON.parse(response['_body']);
    //     console.log(this.response);
    //     if (this.response.status == 'NotFound') {
    //       console.log('NotFound');
    //     } else if (this.response.status == 'Found') {
    //       this.offerPopup(this.response.offers, p.offer_id);
    //     }
    //   }, err => {

    //   });
    // }


    // if (p.type_id == '1' || p.type_id == '3') {
    //   console.log('msggggggggggg', p);

    //   var myData = JSON.stringify({
    //     userID: p.receiver_id,
    //     otherUserId: p.sender_id,
    //     user_name: p.sender_name,
    //     profile_img: p.sender_img_url

    //   });
    //   console.log(myData);
    //   this.router.navigate(['/chat-detail'], {
    //     queryParams: {
    //       value: myData
    //     }
    //   });

    // }



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
