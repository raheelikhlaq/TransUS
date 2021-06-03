import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { CameraimageService } from '../cameraimage.service';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
@Component({
  selector: 'app-car-booking',
  templateUrl: './car-booking.page.html',
  styleUrls: ['./car-booking.page.scss'],
})
export class CarBookingPage implements OnInit {

  @ViewChild('startSlides') startSlides: IonSlides;
  @ViewChild('endSlides') endSlides: IonSlides;
  option1 = {
    slidesPerView: 8,
    loop: true,
  };
  option = {
    loop: true,
    direction: 'vertical',
    slidesPerView: 3
  };

  hours: Array<any> = [];
  mints: Array<any> = [];
  start_date_month: string = '';
  end_date_month: string = '';
  start_month_index: number = 1;
  end_month_index: number = 1;
  days: Array<any> = [];
  currentYear: number;
  currentYearTwo: number;
  monthCounter: number = 1;
  month: string;
  document_one: string;
  start_date: string;
  end_date: string;
  document_oneError: boolean;
  response: any;
  sHours: string;
  sMints: string;
  sV: string;
  userID: any;
  Email: any;
  eHours: string;
  eMints: string;
  eV: string;
  loading: HTMLIonLoadingElement;
  sliderStartBoolean: any;
  sliderEndBoolean: any;
  vehicle_id: any;
  active_start_date: any = 1;
  db_end_date: any;
  db_start_date: any;
  dateError: boolean = false;
  active_end_date: any;
  endmonthCounter: number = 1;
  startmonthCounter: number = 1;
  currencyID: any;
  dateStartError: boolean;
  model_name: any;

  constructor(public activatedRoute: ActivatedRoute, public loadingController: LoadingController,
     private storage: Storage, public toastController: ToastController, 
     public restService: RestService, public alertCtrl: AlertController,
      public router: Router, public imageService: CameraimageService, 
      public imagePicker: ImagePicker,
      public location: Location) {
 
        var date   =    new Date();
        var month = date.getMonth() +1;
        var fMonth = this.monthList(month);
        this.end_date_month = fMonth;
        this.start_date_month = fMonth;
       
         
        this.startmonthCounter = month;
        this.endmonthCounter = month;
        this.start_month_index = month;
        this.end_month_index = month;
        console.log(month, "monthsssssssssssssss")

    this.activatedRoute.queryParams.subscribe((res) => {
      this.response = JSON.parse(res.value);
      this.vehicle_id = this.response.vehicle_id;
      this.db_start_date = this.response.start_date;
      this.db_end_date = this.response.end_date;
      this.model_name = this.response.model_name;
      console.log(this.response);
    });
  }

  ngOnInit() {
    this.storage.get('user_details').then((user_details) => {
      console.log(user_details);
      this.userID = user_details.users_id;
      this.Email = user_details.email;
      this.currencyID = user_details.currencies_id;
      console.log("currncy ID" + this.currencyID);
    });
    this.hours = Array.from({ length: 12 }, (v, k) => k + 1);
    this.mints = Array.from({ length: 60 }, (v, k) => k + 1);
    this.days = Array.from({ length: 30 }, (v, k) => k + 1);
    this.currentYear = new Date().getFullYear();
    this.currentYearTwo = new Date().getFullYear();


    this.getStartIndex(1);
    this.getEndIndex(1);
    //this.document_one = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
  }
 
  back() {

    this.location.back()
    //this.router.navigate(['/car-list']);
  }
  getStartIndex(i) {
    this.sliderStartBoolean = i;
    this.validateStartDate();
  }
  getEndIndex(i) {
    this.sliderEndBoolean = i;
    this.validateEndDate();
  }

  validateForm() {


    this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
    this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
    this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
    this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
    this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
    this.eV = document.querySelector(".e_v .swiper-slide-active p").textContent;

    this.active_start_date = document.querySelector(".start_date .activeState").textContent;
    let cStartDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date, Number(this.sHours), Number(this.sMints)).getTime();

    this.active_end_date = document.querySelector(".end_date .activeEndState").textContent;
    let cDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date, Number(this.eHours), Number(this.eMints)).getTime();
    this.document_oneError = false;


    console.log(' Number(this.eHours)---------- ', this.eHours)

    console.log('active_start_date---------- ', this.active_start_date)

    console.log('start time---------- ', cStartDate)
    console.log('End time---------- ', cDate)

    // if (this.dateError) {
    //   console.log('date error');
    //   this.presentToast('End Time should be greater than Start Time.')
    // } else 

    if (this.document_one == '' || this.document_one == undefined) {
      this.document_oneError = true;
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

  submitFormsss(){
    
    this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
    this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
    this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
    this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
    this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
    this.eV = document.querySelector(".e_v .swiper-slide-active p").textContent;

    this.active_start_date = document.querySelector(".start_date .activeState").textContent;
    let cStartDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date, Number(this.sHours), Number(this.sMints)).getTime();

    this.active_end_date = document.querySelector(".end_date .activeEndState").textContent;
    let cDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date, Number(this.eHours), Number(this.eMints)).getTime();
    this.document_oneError = false;

    this.start_date = document.querySelector(".start_date .activeState").textContent;
    this.end_date = document.querySelector(".end_date .activeEndState").textContent;
    this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
    this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
    this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
    this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
    this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
    this.eV = document.querySelector(".e_v .swiper-slide-active p").textContent;
    // var licenseImg = this.document_one.split(',')[1];
    var stringy = JSON.stringify({
      "requestType": 'book_by_car_id',
      "usersID": this.userID,
      "vehicleID": this.vehicle_id,
      "startDate": this.currentYear + '-' + this.startmonthCounter + '-' + this.start_date,
      "endDate": this.currentYearTwo + '-' + this.endmonthCounter + '-' + this.end_date,
      "startTime": this.sHours + ':' + this.sMints + ' ' + this.sV,
      "endTime": this.eHours + ':' + this.eMints + ' ' + this.eV,
      // "licenseImg": licenseImg,
      "currencyID": this.currencyID
    });

    console.log(stringy, "final")


  }
  ShowLoading:boolean=false;
  submitForm() {




    this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
    this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
    this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
    this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
    this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
    this.eV = document.querySelector(".e_v .swiper-slide-active p").textContent;

    this.active_start_date = document.querySelector(".start_date .activeState").textContent;
    let cStartDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date, Number(this.sHours), Number(this.sMints)).getTime();

    this.active_end_date = document.querySelector(".end_date .activeEndState").textContent;
    let cDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date, Number(this.eHours), Number(this.eMints)).getTime();
    this.document_oneError = false;


    console.log(' Number(this.eHours)---------- ', this.eHours)

    console.log('active_start_date---------- ', this.active_start_date)

    console.log('start time---------- ', cStartDate)
    console.log('End time---------- ', cDate)


    if (cDate > cStartDate) {
      if (this.validateForm() == true) {
        this.start_date = document.querySelector(".start_date .activeState").textContent;
        this.end_date = document.querySelector(".end_date .activeEndState").textContent;
        this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
        this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
        this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
        this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
        this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
        this.eV = document.querySelector(".e_v .swiper-slide-active p").textContent;
        var licenseImg = this.document_one.split(',')[1];
        var stringy = JSON.stringify({
          "requestType": 'book_by_car_id',
          "usersID": this.userID,
          "vehicleID": this.vehicle_id,
          "startDate": this.currentYear + '-' + this.startmonthCounter + '-' + this.start_date,
          "endDate": this.currentYearTwo + '-' + this.endmonthCounter + '-' + this.end_date,
          "startTime": this.sHours + ':' + this.sMints + ' ' + this.sV,
          "endTime": this.eHours + ':' + this.eMints + ' ' + this.eV,
          "licenseImg": licenseImg,
          "currencyID": this.currencyID
        });
        // this.present();
        this.ShowLoading= true;
        console.log(stringy);
        this.restService.bookings(stringy).subscribe(response => {
          this.response = JSON.parse(response['_body']);
          console.log(this.response);
          if (this.response.status == 'error') {
            this.presentToast(this.response.message);
          } else if (this.response.status == 'success') {
            this.presentToast(this.response.msg);
            this.document_one = '';
            var myData = JSON.stringify({
              booking_details: this.response.booking_details,
              vehicle_imgs: this.response.vehicle_imgs
            });

            this.router.navigate(['/summary'], {
              queryParams: {
                value: myData
              },
            });
          }
          // this.dismiss();
          this.ShowLoading = false;
        }, err => {
          // this.dismiss();
          this.ShowLoading = false;
        });
      }
    } else {
      this.presentToast('End Time Should greater then End Time')
    }


  }
  slidePrev() {
    this.start_month_index--;
    if (this.start_month_index < 1) {
      this.currentYear = this.currentYear - 1;
      this.start_month_index = 12;
    }
    this.start_date_month = this.monthList(this.start_month_index);
    this.startmonthCounter = this.start_month_index;
    this.validateStartDate();
    // this.startSlides.slidePrev();
  }
  slideNext() {
    this.start_month_index++;
    if (this.start_month_index == 13) {
      this.currentYear = this.currentYear + 1;
      this.start_month_index = 1;
    }
    this.start_date_month = this.monthList(this.start_month_index);
    this.startmonthCounter = this.start_month_index;
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
    this.endmonthCounter = this.end_month_index;
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
    this.endmonthCounter = this.end_month_index;
    this.validateEndDate();
    // this.endSlides.slideNext();
  }
  validateStartDate() {




    setTimeout(() => {
      this.dateError = true;
      this.dateStartError = false;

      /**** end date ****/
      this.active_end_date = document.querySelector(".end_date .activeEndState").textContent;
      let cEndDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date).getTime();
      /**** end date ****/
      this.active_start_date = document.querySelector(".start_date .activeState").textContent;
      let cDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date).getTime();

      let sDate = new Date(this.db_start_date).setHours(0, 0, 0, 0);
      let eDate = new Date(this.db_end_date).setHours(0, 0, 0, 0);


      if (cDate >= sDate && cDate < eDate) {
        console.log('ok');
        this.dateError = false;
      } else {
        console.log('NotOk');
        this.dateError = true;
      }
      if (cDate >= cEndDate && this.dateError == false) {
        console.log('start date ');
        this.dateStartError = true;
        console.log(this.dateStartError);
        //this.validateEndDate();
      }
    }, 300);
  }
  validateEndDate() {
    setTimeout(() => {
      this.dateError = true;
      this.dateStartError = false;

      this.active_start_date = document.querySelector(".start_date .activeState").textContent;
      let cStartDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date).getTime();

      this.active_end_date = document.querySelector(".end_date .activeEndState").textContent;
      let cDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date).getTime();
      let sDate = new Date(this.db_start_date).setHours(0, 0, 0, 0);
      let eDate = new Date(this.db_end_date).setHours(0, 0, 0, 0);

      if (cDate > sDate && cDate <= eDate) {
        console.log('ok');
        this.dateError = false;
      } else {
        console.log('NotOk');
        this.dateError = true;
      }
      if (cStartDate >= cDate && this.dateError == false) {
        console.log('end date ');
        this.dateStartError = true;
        console.log(this.dateStartError);
      }
    }, 300);
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

  async uploadDocument() {
    let alert = await this.alertCtrl.create({
      message: 'Upload Profile Photo?',
      buttons: [
        // {
        //   text: 'Take image from camera',
        //   handler: () => {
        //     this.takeImageFromCamera();
        //   }
        // },
        {
          text: 'Upload image from gallery',
          handler: () => {
            this.getImageFromGallery();
          }
        }
      ]
    });
    alert.present();
  }
  takeImageFromCamera() {

    this.imageService.selectImageInCamera().then((imageData) => {
      this.document_one = `data:image/png;base64,${imageData}`;


    }).catch(err => console.error(err));
  }
  getImageFromGallery() {

    var options = {
      maximumImagesCount: 1,
      outputType: 1
    };
    this.imagePicker.getPictures(options).then((imageData) => {

      console.log('Image URI: ' + imageData);
  //    alert('Image URI: ' + imageData)
      this.document_one = `data:image/png;base64,${imageData}`;
 
  }, (err) => {
    console.log('imagepicker  now:', err);
   });
  }
  goToSummary() {
    this.router.navigate(['/summary']);
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
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
