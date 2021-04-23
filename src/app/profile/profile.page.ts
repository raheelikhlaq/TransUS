import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, PopoverController, ToastController } from '@ionic/angular';
import { CameraimageService } from '../cameraimage.service';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
import { SubjectEventsService } from '../subject-events.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  Email: any;
  About: any;
  Lives: any;
  Works: any;
  Language: any;
  base64: any = '';
  AboutError: boolean = false;
  LivesError: boolean = false;
  WorksError: boolean = false;
  EmailError: boolean = false;
  LanguageError: boolean = false;
  base64Error: boolean = false;
  profileImage: string;
  response: any;
  userID: any;
  countries: any;
  languages: any;
  loading: HTMLIonLoadingElement;
  validation: boolean = false;
  currencies: any;
  Currencies: string;
  CurrenciesError: boolean;
  accountNumber: string;
  accountTitleError: boolean;
  accountTitle: string;
  accountNumberError: boolean;
  constructor(public loadingController: LoadingController, public subjectEvents: SubjectEventsService, public popoverController: PopoverController, private storage: Storage, public toastController: ToastController, public router: Router, public restService: RestService, public alertCtrl: AlertController,
    public imageService: CameraimageService, public menuCtrl: MenuController) {

  }

  ngOnInit() {

    this.getDropDownData();

  }
  ionViewWillEnter() {
    this.storage.get('user_details').then((user_details) => {
      console.log(user_details);
      this.userID = user_details.users_id;
      this.About = user_details.about;
      this.Works = user_details.work;
      this.accountNumber = user_details.bank_acc_no;
      this.accountTitle = user_details.bank_acc_title;
      //  this.base64 = user_details.profile_image;
      this.Email = user_details.email;

      setTimeout(() => {
        this.Language = user_details.languages_id;
        this.Lives = user_details.countries_id;
        this.Currencies = user_details.currencies_id;
        console.log('ok');
      }, 2000);

    });

    this.storage.get('profile_img_url').then((profile_img_url) => {
      this.storage.get('base_urls').then((base_url) => {
        this.profileImage = base_url + '' + profile_img_url;
        console.log(this.profileImage);
      });
    });
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
  getDropDownData() {
    var stringy = JSON.stringify({
      "requestType": "profile_page"
    });
    console.log(stringy);
    this.restService.getDdlData(stringy).subscribe(response => {
      this.response = JSON.parse(response['_body']);
      this.languages = this.response.languages;
      this.countries = this.response.countries;
      this.currencies = this.response.system_currencies;
      console.log(this.response);

    }, err => {

    });
  }
  submitForm() {

    console.log('update');

    // this.validation = true;
    if (this.validateForm() == true) {
      //alert('true');
      this.present();
      var stringy = JSON.stringify({
        "usersID": this.userID,
        "email": this.Email,
        "about": this.About,
        "countriesID": this.Lives,
        "works": this.Works,
        "languagesID": this.Language,
        "profilePic": this.base64,
        "currencyID": this.Currencies,
        "accountNumber": this.accountNumber,
        "accountTitle": this.accountTitle,
        "requestType": "update"
      });
      console.log(stringy);
      this.restService.editProfile(stringy).subscribe(response => {
        this.response = JSON.parse(response['_body']);
        console.log(this.response.status);
        if (this.response.status == 'error') {
          this.presentToast(this.response.msg);
        } else if (this.response.status == 'success') {
          this.presentToast(this.response.msg);

          this.getUserDetail();
        }
        this.dismiss();
      }, err => {
        this.dismiss();
      });
    }else{
      console.log('update else');
      
    }
  }
  getUserDetail() {
    var stringy = JSON.stringify({
      "usersID": this.userID,
      "requestType": 'withID'
    });
    console.log(stringy);
    this.restService.getUserDetails(stringy).subscribe(response => {
      this.response = JSON.parse(response['_body']);
      console.log(this.response);
      if (this.response.status == 'NotFound') {

      } else if (this.response.status == 'Found') {
        this.storage.set('user_details', this.response.user_details);
        this.storage.set('profile_img_url', this.response.profile_img_url);
        this.storage.set('country_name', this.response.country_name);
        console.log('currency_symbol', this.response.user_details.symbol);
        this.storage.set('currency_symbol', this.response.user_details.symbol);

        this.subjectEvents.publishSomeData({
          sidebar: 'sidebar'
        });
      }
    }, err => {

    });
  }
  validateForm() {
    //this.base64 = 'iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
    //if(this.validation){
    this.AboutError = false;
    this.LivesError = false;
    this.WorksError = false;
    this.LanguageError = false;
    this.base64Error = false;
    this.accountTitleError = false;
    this.accountNumberError = false;
    this.CurrenciesError = false;
    if (this.About == '' || this.About == undefined) {
      this.AboutError = true;
      return false;
    } else if (this.Email == '' || this.Email == undefined) {
      this.EmailError = true;
      return false;

    } else if (this.Lives == '' || this.Lives == undefined) {
      this.LivesError = true;
      return false;
    } else if (this.Works == '' || this.Works == undefined) {
      this.WorksError = true;
      return false;
    } else if (this.Language == '' || this.Language == undefined) {
      this.LanguageError = true;
      return false;
    } else if (this.Currencies == '' || this.Currencies == undefined) {
      this.CurrenciesError = true;
      return false;
    }
    //  else if (this.accountNumber == '' || this.accountNumber == undefined) {
    //   this.accountNumberError = true;
    //   return false;
    // } else if (this.accountTitle == '' || this.accountTitle == undefined) {
    //   this.accountTitleError = true;
    //   return false;
    // }
    
    else {
      return true;
    }
    // }
  }
  async uploadProfile() {
    let alert = await this.alertCtrl.create({
      message: 'Upload Profile Photo?',
      buttons: [
        {
          text: 'Take image from camera',
          handler: () => {
            this.takeImageFromCamera();
          }
        },
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
      this.profileImage = `data:image/png;base64,${imageData}`;
      this.base64 = `${imageData}`;


    }).catch(err => console.error(err));
  }
  getImageFromGallery() {
    this.imageService.selectImageInGallery().then((imageData) => {
      this.profileImage = `data:image/png;base64,${imageData}`;
      this.base64 = `${imageData}`;
    }).catch(err => console.error(err));
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
