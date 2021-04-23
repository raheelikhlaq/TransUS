import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides, LoadingController, Platform } from '@ionic/angular';
import { AlertController, MenuController, PopoverController, ToastController } from '@ionic/angular';
import { CameraimageService } from '../cameraimage.service';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ImagePicker } from '@ionic-native/image-picker/ngx';


@Component({
  selector: 'app-list-your-car',
  templateUrl: './list-your-car.page.html',
  styleUrls: ['./list-your-car.page.scss'],
})
export class ListYourCarPage implements OnInit {

  @ViewChild('startSlides') startSlides: IonSlides;
  @ViewChild('endSlides') endSlides: IonSlides;
  option1 = {
    loop: true,
    slidesPerView: 8
  };
  response: any;
  model: any;
  make: any;
  fuel_type: any;
  gear_type: any;
  roof_type: any;
  countries: any;
  languages: any;
  Model: any;
  Make: any;
  LicensePlate: any;
  Description: any;
  Seats: any;
  Gas: any;
  GearType: any;
  Convertable: any;
  wheels: any;
  other_features: any;
  about: any;
  Lives: any;
  work: any;
  Language: any;
  start_date: string;
  end_date: string;
  dropoff: any;
  pickup: any;
  document_one: any;
  document_two: any;
  document_three: any;
  document_four: any;
  document_five: any;
  ModelError: boolean;
  MakeError: boolean;
  LicensePlateError: boolean;
  document_oneError: boolean;
  document_twoError: boolean;
  document_threeError: boolean;
  DescriptionError: boolean;
  SeatsError: boolean;
  GasError: boolean;
  GearTypeError: boolean;
  ConvertableError: boolean;
  wheelsError: boolean;
  other_featuresError: boolean;
  aboutError: boolean;
  LivesError: boolean;
  workError: boolean;
  LanguageError: boolean;
  RouteError: boolean;
  document_fourError: boolean;
  document_fiveError: boolean;
  ChargesInfoError: boolean;
  ChargesInfo: string;
  month: string;
  start_date_month: string = '';
  end_date_month: string = '';
  start_month_index: number = 1;
  end_month_index: number = 1;
  userID: any;
  Email: any;
  documentBase64: Array<String> = [];
  Door: any;
  DoorError: boolean;
  days: Array<any> = [];
  currentYear: number;
  currentYearTwo: number;
  monthCounter: number = 1;
  base_url: any;
  sliderStartBoolean: any;
  sliderEndBoolean: any;
  document_sixError: boolean;
  document_sevenError: boolean;
  document_six: string;
  document_seven: string;
  validation: boolean = false;
  loading: HTMLIonLoadingElement;
  max_price: any;
  min_price: any;
  pickuplong: any;
  pickuplat: any;
  dropofflong: any;
  dropofflat: any;
  fieldMissing: boolean = false;
  endMonthCounter: number;
  startMonthCounter: number;
  currencyID: any;
  currency_symbol: any;
  active_end_date: any;
  endmonthCounter: number = 1;
  active_start_date: any = 1;
  startmonthCounter: number = 1;

  dateStartError: boolean;


  image1: any = ''
  image2: any = ''
  image3: any = ''
  image4: any = ''
  image5: any = ''
  image6: any = ''
  image7: any = ''

  constructor(public loadingController: LoadingController, public activatedRoute: ActivatedRoute, 
              public popoverController: PopoverController, private storage: Storage, 
              public toastController: ToastController, public router: Router, 
              public restService: RestService, public alertCtrl: AlertController,
              public imageService: CameraimageService, public menuCtrl: MenuController, 
              private imageCompress: NgxImageCompressService, public imagePicker: ImagePicker,
              public platform:Platform,
    ) {

     

      var month = new Date().getMonth() + 1;
      console.log(month, "date From Month")
       var getname =  this.monthList(month);
       console.log("getmonth from monthlist",getname)

        this.start_date_month= getname; 
        this.end_date_month = getname;
        this.end_month_index = month;
        

        this.startMonthCounter = month
        this.endMonthCounter = month

    /* this.activatedRoute.queryParams.subscribe((res)=>{
       
         this.response = JSON.parse(res.value);
         console.log(this.response);
         if(this.response){
           this.pickup = this.response.pickup;
           this.dropoff = this.response.dropoff;
           console.log(this.pickup);
         }
     });  */
    this.days = Array.from({ length: 30 }, (v, k) => k + 1);
  }

  ngOnInit() {
    this.getDropDownData();
    this.storage.get('user_details').then((user_details) => {
      console.log(user_details);
      this.userID = user_details.users_id;
      this.Email = user_details.email;

      this.about = user_details.about;
      this.work = user_details.work;
      this.currencyID = user_details.currencies_id;
      setTimeout(() => {
        this.Language = user_details.languages_id;
        this.Lives = user_details.countries_id;
        console.log('ok');
      }, 2000);
      this.storage.get('base_urls').then((base_url) => {
        this.base_url = base_url;
        this.storage.get('currency_symbol').then((currency_symbol) => {
          this.currency_symbol = currency_symbol;
        });
      });
    });

    this.currentYear = new Date().getFullYear();
    this.currentYearTwo = new Date().getFullYear();
    this.getStartIndex(1);
    this.getEndIndex(1);
  }
  ionViewWillEnter() {
    this.storage.get('pickup').then((pickup) => {
      this.storage.get('dropoff').then((dropoff) => {
        this.storage.get('pickuplong').then((pickuplong) => {
          this.storage.get('pickuplat').then((pickuplat) => {
            this.storage.get('dropofflong').then((dropofflong) => {
              this.storage.get('dropofflat').then((dropofflat) => {
                this.pickup = pickup;
                this.dropoff = dropoff;
                this.pickuplong = pickuplong;
                this.pickuplat = pickuplat;
                this.dropofflong = dropofflong;
                this.dropofflat = dropofflat;
              });
            });
          });
        });
      });
    });
  }
  getStartIndex(i) {
    this.sliderStartBoolean = i;
    console.log(this.sliderEndBoolean,"nice days start")
    this.validateStartDate();
  }
  getEndIndex(i) {
    this.sliderEndBoolean = i;
    console.log(this.sliderEndBoolean,"nice days ")
    this.validateEndDate();
  }
  goToLocation() {
    var myData = JSON.stringify({
      location: '/list-your-car'
    });
    this.router.navigate(['/location'], {
      queryParams: {
        value: myData
      },
    });
  }
  getDropDownData() {
    var stringy = JSON.stringify({
      "requestType": "list_car_page"
    });
    console.log(stringy);
    this.restService.getDdlData(stringy).subscribe(response => {
      this.response = JSON.parse(response['_body']);
      this.model = this.response.model;
      this.make = this.response.make;
      this.fuel_type = this.response.fuel_type;
      this.gear_type = this.response.gear_type;
      this.roof_type = this.response.roof_type;
      this.countries = this.response.countries;
      this.languages = this.response.languages;

      console.log(this.response);

    }, err => {

    });
  }
  validateForm() {
    // this.document_one = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
    // this.document_two = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
    // this.document_three = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
    // this.document_four = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
    // this.document_five = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
    // this.document_six = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
    // this.document_seven = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';



    // this.document_one = 'data1';
    // this.document_two = 'data2';
    // this.document_three = 'data3';
    // this.document_four = 'data4';
    // this.document_five = 'data5'
    // this.document_six = 'data6';
    // this.document_seven = 'data7'

    if (this.validation) {
      this.active_start_date = document.querySelector(".start_date .activeState").textContent;
      let cStartDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date).getTime();

      this.active_end_date = document.querySelector(".end_date .activeEndState").textContent;
      let cDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date).getTime();

      this.ModelError = false;
      this.MakeError = false;
      this.LicensePlateError = false;
      this.document_oneError = false;
      this.document_twoError = false;
      this.document_threeError = false;
      this.document_sixError = false;
      this.document_sevenError = false;
      this.DoorError = false;
      this.document_fourError = false;
      this.document_fiveError = false;
      this.DescriptionError = false;
      this.SeatsError = false;
      this.GasError = false;
      this.GearTypeError = false;
      this.ConvertableError = false;
      this.wheelsError = false;
      this.other_featuresError = false;
      this.aboutError = false;
      this.LivesError = false;
      this.workError = false;
      this.LanguageError = false;
      this.RouteError = false;
      this.ChargesInfoError = false;
      if (this.Model == '' || this.Model == undefined) {
        this.ModelError = true;
        return false;
      } else if (this.Make == '' || this.Make == undefined) {
        this.MakeError = true;
        return false;
      } else if (this.LicensePlate == '' || this.LicensePlate == undefined) {
        this.LicensePlateError = true;
        return false;
      }
      //  else if (this.document_one == '' || this.document_one == undefined) {
      //   this.document_oneError = true;
      //   return false;
      // } else if (this.document_two == '' || this.document_two == undefined) {
      //   this.document_twoError = true;
      //   return false;
      // } else if (this.document_three == '' || this.document_three == undefined) {
      //   this.document_threeError = true;
      //   return false;
      // } else if (this.document_six == '' || this.document_six == undefined) {
      //   this.document_sixError = true;
      //   return false;
      // } else if (this.document_seven == '' || this.document_seven == undefined) {
      //   this.document_sevenError = true;
      //   return false;
      // } 
      else if (this.Description == '' || this.Description == undefined) {
        this.DescriptionError = true;
        return false;
      } else if (this.Seats == '' || this.Seats == undefined) {
        this.SeatsError = true;
        return false;
      } else if (this.Door == '' || this.Door == undefined) {
        this.DoorError = true;
        return false;
      } else if (this.Gas == '' || this.Gas == undefined) {
        this.GasError = true;
        return false;
      } else if (this.GearType == '' || this.GearType == undefined) {
        this.GearTypeError = true;
        return false;
      } else if (this.Convertable == '' || this.Convertable == undefined) {
        this.ConvertableError = true;
        return false;
      } else if (this.wheels == '' || this.wheels == undefined) {
        this.wheelsError = true;
        return false;
      } else if (this.other_features == '' || this.other_features == undefined) {
        this.other_featuresError = true;
        return false;
      } else if (this.document_four == '' || this.document_four == undefined) {
        this.document_fourError = true;
        return false;
      } else if (this.document_five == '' || this.document_five == undefined) {
        this.document_fiveError = true;
        return false;
      } else if (this.about == '' || this.about == undefined) {
        this.aboutError = true;
        return false;
      } else if (this.Lives == '' || this.Lives == undefined) {
        this.LivesError = true;
        return false;
      } else if (this.work == '' || this.work == undefined) {
        this.workError = true;
        return false;
      } else if (this.Language == '' || this.Language == undefined) {
        this.LanguageError = true;
        return false;
      } else if (this.pickup == '' || this.pickup == undefined) {
        this.RouteError = true;
        return false;
      } else if (this.dropoff == '' || this.dropoff == undefined) {
        this.RouteError = true;
        return false;
      } else if (this.ChargesInfo == '' || this.ChargesInfo == undefined) {
        this.ChargesInfoError = true;
        return false;
      } else {
        if (cStartDate > cDate) {
          this.dateStartError = true;
          console.log(this.dateStartError);
        } else {
          return true;
        }
      }

    }
  }

  submitForms(){
    this.start_date = document.querySelector(".start_date .activeState").textContent;
    this.end_date = document.querySelector(".end_date .activeEndState").textContent;

    console.log(this.currentYear + '-' + this.startMonthCounter + '-' + this.start_date)
    console.log(this.currentYearTwo + '-' + this.endMonthCounter + '-' + this.end_date)
  }
  submitForm() {
    if(this.platform.is("android")){

      this.validation = true;

      // console.log(this.document_four);
      if (this.validateForm() == true) {
        this.fieldMissing = false;
        //alert('true');
        this.start_date = document.querySelector(".start_date .activeState").textContent;
        this.end_date = document.querySelector(".end_date .activeEndState").textContent;
        this.document_one = this.document_one.split(',')[1];
        this.document_two = this.document_two.split(',')[1];
        this.document_three = this.document_three.split(',')[1];
        this.document_six = this.document_six.split(',')[1];
        this.document_seven = this.document_seven.split(',')[1];
        this.documentBase64.push(this.document_one);
        this.documentBase64.push(this.document_two);
        this.documentBase64.push(this.document_three);
        this.documentBase64.push(this.document_six);
        this.documentBase64.push(this.document_seven);
        var roadworthy = this.document_four.split(',')[1];
        var insurance = this.document_five.split(',')[1];
  
        // var roadworthy = this.image4;
        // var insurance = this.image5;
        var stringy = JSON.stringify({
          "requestType": 'list_car',
          "modelID": this.Model,
          "makeID": this.Make,
          "licensePlate": this.LicensePlate,
          "carImages": this.documentBase64,
          "noOfSeats": this.Seats,
          "description": this.Description,
          "noOfDoors": this.Door,
          "fuelTypeID": this.Gas,
          "gearTypeID": this.GearType,
          "noOfWheels": this.wheels,
          "roofTypeID": this.Convertable,
          "otherFeatures": this.other_features,
          "roadWorthy": roadworthy,
          "insurance": insurance,
          "chargePerDay": this.ChargesInfo,
          "countriesID": this.Lives,
          "about": this.about,
          "work": this.work,
          "languagesId": this.Language,
          "pickupLocationName": this.pickup,
          "dropoffLocationName": this.dropoff,
          "start_date": this.currentYear + '-' + this.startMonthCounter + '-' + this.start_date,
          "end_date": this.currentYearTwo + '-' + this.endMonthCounter + '-' + this.end_date,
          "pickupLatitude": this.pickuplat,
          "pickupLongitude": this.pickuplong,
          "dropoffLatitude": this.dropofflat,
          "dropoffLongitude": this.dropofflong,
          "usersID": this.userID,
          "email": this.Email,
          "currencyID": this.currencyID
        });
  
        console.log(stringy);
  
    //    alert(stringy)
  
        this.present();
        this.restService.saveListVehicles(stringy).subscribe(response => {
          this.response = JSON.parse(response['_body']);
          console.log(response['_body'])
     //     alert(response['_body'])
          console.log(this.response.status);
          if (this.response.status == 'error') {
            this.dismiss();
            this.presentToast(this.response.msg);
          } else if (this.response.status == 'success') {
            this.presentToast('Vehicle Added Successfully');
            this.Model = '';
            this.Make = '';
            this.LicensePlate = '';
            this.documentBase64 = [];
            this.Seats = '';
            this.Description = '';
            this.Door = '';
            this.Gas = '';
            this.GearType = '';
            this.wheels = '';
            this.Convertable = '';
            this.other_features = '';
            roadworthy = '';
            insurance = '';
            this.ChargesInfo = '';
            this.Lives = '';
            this.about = '';
            this.work = '';
            this.Language = '';
            this.pickup = '';
            this.dropoff = '';
            this.document_one = '';
            this.document_two = '';
            this.document_three = '';
            this.document_four = '';
            this.document_five = '';
            this.document_six = '';
            this.document_seven = '';
            this.storage.set('pickup', null);
            this.storage.set('dropoff', null);
            this.router.navigate(['/']);
  
            this.dismiss();
          }
  
        }, err => {
          alert('request error')
          this.dismiss();
        });
      } else {
        this.fieldMissing = true;
      }

    }
    else if(this.platform.is("ios")){
     

      // console.log(this.document_four);
  
        //alert('true');
        this.start_date = document.querySelector(".start_date .activeState").textContent;
        this.end_date = document.querySelector(".end_date .activeEndState").textContent;
        this.document_one = this.document_one.split(',')[1];
        this.document_two = this.document_two.split(',')[1];
        this.document_three = this.document_three.split(',')[1];
        this.document_six = this.document_six.split(',')[1];
        this.document_seven = this.document_seven.split(',')[1];
        this.documentBase64.push(this.document_one);
        this.documentBase64.push(this.document_two);
        this.documentBase64.push(this.document_three);
        this.documentBase64.push(this.document_six);
        this.documentBase64.push(this.document_seven);
        var roadworthy = this.document_four.split(',')[1];
        var insurance = this.document_five.split(',')[1];
  
        // var roadworthy = this.image4;
        // var insurance = this.image5;
        var stringy = JSON.stringify({
          "requestType": 'list_car',
          "modelID": this.Model,
          "makeID": this.Make,
          "licensePlate": this.LicensePlate,
          "carImages": "",
          "noOfSeats": this.Seats,
          "description": this.Description,
          "noOfDoors": this.Door,
          "fuelTypeID": this.Gas,
          "gearTypeID": this.GearType,
          "noOfWheels": this.wheels,
          "roofTypeID": this.Convertable,
          "otherFeatures": this.other_features,
          "roadWorthy": roadworthy,
          "insurance": insurance,
          "chargePerDay": this.ChargesInfo,
          "countriesID": this.Lives,
          "about": this.about,
          "work": this.work,
          "languagesId": this.Language,
          "pickupLocationName": this.pickup,
          "dropoffLocationName": this.dropoff,
          "start_date": this.currentYear + '-' + this.startMonthCounter + '-' + this.start_date,
          "end_date": this.currentYearTwo + '-' + this.endMonthCounter + '-' + this.end_date,
          "pickupLatitude": this.pickuplat,
          "pickupLongitude": this.pickuplong,
          "dropoffLatitude": this.dropofflat,
          "dropoffLongitude": this.dropofflong,
          "usersID": this.userID,
          "email": this.Email,
          "currencyID": this.currencyID
        });
  
        console.log(stringy);
  
      //  alert(stringy)
  
        this.present();
        this.restService.saveListVehicles(stringy).subscribe(response => {
          this.response = JSON.parse(response['_body']);
          console.log(response['_body'])
         // alert(response['_body'])
          console.log(this.response.status);
          if (this.response.status == 'error') {
            this.dismiss();
            this.presentToast(this.response.msg);
          } else if (this.response.status == 'success') {
          
            var carid = this.response.vehicle_id;
            for(let i=0; i<this.documentBase64.length; i++){
              var St= JSON.stringify({
                requestType:"single_car",
                userID: this.userID,
                carID: carid,
                imageIndex:i,
                carImage: this.documentBase64[i],
              });

              this.restService.imgesForIos(St).subscribe(res=>{
                console.log(res, "added car ");
                if(i==4){
                  this.Model = '';
                  this.Make = '';
                  this.LicensePlate = '';
                  this.documentBase64 = [];
                  this.Seats = '';
                  this.Description = '';
                  this.Door = '';
                  this.Gas = '';
                  this.GearType = '';
                  this.wheels = '';
                  this.Convertable = '';
                  this.other_features = '';
                  roadworthy = '';
                  insurance = '';
                  this.ChargesInfo = '';
                  this.Lives = '';
                  this.about = '';
                  this.work = '';
                  this.Language = '';
                  this.pickup = '';
                  this.dropoff = '';
                  this.document_one = '';
                  this.document_two = '';
                  this.document_three = '';
                  this.document_four = '';
                  this.document_five = '';
                  this.document_six = '';
                  this.document_seven = '';
                  this.storage.set('pickup', null);
                  this.storage.set('dropoff', null);
                  this.presentToast('Vehicle Added Successfully');
                  this.router.navigate(['/']);
                  this.dismiss();

                }
              },(err)=>{
                console.log(err);
              })

            }

          

         
            
            // this.dismiss();
          }
  
        }, err => {
          alert('request error')
          this.dismiss();
        });
      
    }

  }
  async uploadDocument(param) {

   // this.takeImageFromCamera(param);
    let alert = await this.alertCtrl.create({
      message: 'Upload Photo?',
      buttons: [
        {
          text: 'Take image from camera',
          handler: () => {
            this.takeImageFromCamera(param);
          }
        },
        {
          text: 'Upload image from gallery',
          handler: () => {
            this.takeImageFromCamera(param);
          }
        }
      ]
    });
    alert.present();
  }

    uploadDocumentsPhotos(params){
      console.log("params", params)
      var options = {
        maximumImagesCount: 5,
        outputType: 1
      };
  
      this.imagePicker.getPictures(options).then((results) => {
        for (var i = 0; i < results.length; i++) {
            console.log('Image URI: sucessed' + results[i]);
            if(i==0){  
              var base640 = `data:image/png;base64,${results[0]}`;  
              this.image1 = results[0]
              this.document_one = base640;
            }
            if(i==1){
              var base641 = `data:image/png;base64,${results[1]}`;  
              this.image2 = results[1] 
              this.document_two = base641;
            }
            if(i==2){
              var base642 = `data:image/png;base64,${results[2]}`;  
              this.image3 = results[2]
              this.document_three = base642;
            }
            if(i==3){
              var base643 = `data:image/png;base64,${results[3]}`;  
              this.image6 = results[3]
              this.document_six = base643;
            }
            if(i==4){
              var base644 = `data:image/png;base64,${results[4]}`;  
              this.image7 = results[4]
              this.document_seven =base644;
            }
        }
      }, (err) => { 
        console.log(err, "error in images??")
      });
  
    }

  // hasReadPermission() {
  //   window.imagePicker.hasReadPermission(
  //     function (result) {
  //       // if this is 'false' you probably want to call 'requestReadPermission' now
  //       alert(result);
  //     }
  //   )
  // }

  // requestReadPermission() {
  //   // no callbacks required as this opens a popup which returns async
  //   window.imagePicker.requestReadPermission();
  // }
  takeImageFromCamera(param) {

    //this.imageService.selectImageInCamera().then((imageData) => {

    var options = {
      maximumImagesCount: 1,
      outputType: 1
    };


    this.imagePicker.getPictures(options).then((imageData) => {

      console.log('Image URI: ' + imageData);
  //    alert('Image URI: ' + imageData)



      var base64 = `data:image/png;base64,${imageData}`;
      this.imageCompress.compressFile(base64, 0, 50, 50).then(
        result => {
          console.log(result);
          console.log('Size in bytes is now:', this.imageCompress.byteCount(result));
          if (param == 1) {
            this.image1 = imageData
            this.document_one = result;
          } else if (param == 2) {
            this.image2 = imageData 
            this.document_two = result;
          } else if (param == 3) {
            this.image3 = imageData
            this.document_three = result;
          } else if (param == 4) {
            this.image4 = imageData
            this.document_four = result;
          } else if (param == 5) {
            this.image5 = imageData
            this.document_five = result;
          } else if (param == 6) {
            this.image6 = imageData
            this.document_six = result;
          } else if (param == 7) {
            this.image7 = imageData
            this.document_seven = result;
          }
        }
      );
    }, (err) => {
      console.log('imagepicker  now:', err);
     });
  //   }).catch(err => console.error(err));
  }
  getImageFromGallery(param) {
    this.imageService.selectImageInGallery().then((imageData) => {
      var base64 = `data:image/png;base64,${imageData}`;
      this.imageCompress.compressFile(base64, 0, 50, 50).then(
        result => {
          console.log(result);
          console.log('Size in bytes is now:', this.imageCompress.byteCount(result));
          if (param == 1) {
            this.image1 = imageData
            this.document_one = result;
          } else if (param == 2) {
            this.image2 = imageData
            this.document_two = result;
          } else if (param == 3) {
            this.image3 = imageData
            this.document_three = result;
          } else if (param == 4) {
            this.image4 = imageData
            this.document_four = result;
          } else if (param == 5) {
            this.image5 = imageData
            this.document_five = result;
          } else if (param == 6) {
            this.image6 = imageData
            this.document_six = result;
          } else if (param == 7) {
            this.image7 = imageData
            this.document_seven = result;
          }
        }
      );
    }).catch(err => console.error(err));
  }
  validateStartDate() {
    setTimeout(() => {
      this.dateStartError = false;

      /**** end date ****/
      this.active_end_date = document.querySelector(".end_date .activeEndState").textContent;
      let cEndDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date).getTime();
      /**** end date ****/
      this.active_start_date = document.querySelector(".start_date .activeState").textContent;
      let cDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date).getTime();


      if (cDate > cEndDate) {
        console.log('start date ');
        this.dateStartError = true;
        console.log(this.dateStartError);
        //this.validateEndDate();
      }
    }, 300);
  }
  validateEndDate() {
    setTimeout(() => {
      this.dateStartError = false;

      this.active_start_date = document.querySelector(".start_date .activeState").textContent;
      let cStartDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date).getTime();

      this.active_end_date = document.querySelector(".end_date .activeEndState").textContent;
      let cDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date).getTime();

      if (cStartDate > cDate) {
        console.log('end date ');
        this.dateStartError = true;
        console.log(this.dateStartError);
      }
    }, 300);
  }
  goToHome() {
    this.router.navigate(['/listed-car']);
  }
  slidePrev() {
    this.start_month_index--;
    if (this.start_month_index < 1) {
      this.currentYear = this.currentYear - 1;
      this.start_month_index = 12;
    }
    this.start_date_month = this.monthList(this.start_month_index);
    this.startMonthCounter = this.start_month_index;
    // this.startSlides.slidePrev();
    this.validateStartDate();
  }
  slideNext() {
    this.start_month_index++;
    if (this.start_month_index == 13) {
      this.currentYear = this.currentYear + 1;
      this.start_month_index = 1;
    }
    this.start_date_month = this.monthList(this.start_month_index);
    this.startMonthCounter = this.start_month_index;
    this.validateStartDate();
    // this.startSlides.slideNext();
  }
  slidePrev2() {
    this.end_month_index--;
    if (this.end_month_index < 1) {
      this.currentYearTwo = this.currentYearTwo - 1;
      this.end_month_index = 12;
    }
    this.end_date_month = this.monthList(this.end_month_index);
    this.endMonthCounter = this.end_month_index;
    this.validateEndDate();
    // end_month_index 
    // this.endSlides.slidePrev();
  }
  slideNext2() {

    this.end_month_index++;
    if (this.end_month_index == 13) {
      this.currentYearTwo = this.currentYearTwo + 1;
      this.end_month_index = 1;
    }
    this.end_date_month = this.monthList(this.end_month_index);
    this.endMonthCounter = this.end_month_index;
    this.validateEndDate();
    // this.endSlides.slideNext();
  }

  monthList(param) {
    // console.log(param);
    //param = parseInt(param)+1;

    if (param == 1) {
      this.month = 'January';
    } else if (param == 2) {
      this.month = 'February';
    } else if (param == 3) {
      this.month = 'March';
    } else if (param == 4) {
      this.month = 'April';
    } else if (param == 5) {
      this.month = 'May';
    } else if (param == 6) {
      this.month = 'June';
    } else if (param == 7) {
      this.month = 'July';
    } else if (param == 8) {
      this.month = 'August';
    } else if (param == 9) {
      this.month = 'September';
    } else if (param == 10) {
      this.month = 'October';
    } else if (param == 11) {
      this.month = 'November';
    } else if (param == 12) {
      this.month = 'December';
    }
    return this.month;
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
    toast.present();
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
