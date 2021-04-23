import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController, PopoverController, ToastController } from '@ionic/angular';
import { CameraimageService } from '../cameraimage.service';
import { RestService } from '../rest.service';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { VerifyMobileNumberPage } from '../verify-mobile-number/verify-mobile-number.page';
import { SubjectEventsService } from '../subject-events.service';
//$ ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name: any;
  mobileNumber: any;
  email: any;
  password: any;
  isSubmitted = false;
  nameError: boolean = false;
  mobileNumberError: boolean = false;
  emailError: boolean = false;
  passwordError: boolean = false;
  invalidEmailError: boolean = false;
  picError: boolean = false;
  profileImage: string;
  base64: string;
  apiResponse: any;
  response: any;
  loading: HTMLIonLoadingElement;
  validation: boolean = false;
  terms: boolean = false;
  offers: boolean = false;
  baseUrl: string = 'https://app.transusdrives.com/';
  termsError: boolean;

  stringyOfSignup: any = ''
  otp: any = ''
  otpArr: any = ''
  otpMsg: any = ''

  responseOfOtp: any = ''


  constructor(public navCtrl: NavController, public loadingController: LoadingController, public subjectEvents: SubjectEventsService, public popoverController: PopoverController, private storage: Storage, public toastController: ToastController, public router: Router, public restService: RestService, public alertCtrl: AlertController,
    public imageService: CameraimageService, private facebook: Facebook, private googlePlus: GooglePlus) { }

  ngOnInit() {
    // this.base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
    // this.profileImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
    // this.base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';

  }

  submitForm() {
    this.validation = true;
    if (this.validateForm() == true) {
      var profileImg = this.profileImage.split(',')[1];
      //alert('true');
      this.stringyOfSignup = JSON.stringify({
        "userName": this.name,
        "mobileNo": this.mobileNumber,
        "email": this.email,
        "password": this.password,
        "profilePic": profileImg,
        "subscribedAlerts": "Yes",
        "requestType": "signup",
        "loginWith": 'Email'
      });
      console.log(this.stringyOfSignup);

      var ss = JSON.stringify({
        requestType: 'send_otp',
        phone_number: this.mobileNumber

      })

      this.present()

      this.restService.auth_userAPI(ss).subscribe((ress: any) => {
        console.log(ress)


        this.responseOfOtp = JSON.parse(ress['_body']);

        console.log('respooooo', this.responseOfOtp)

        if (this.responseOfOtp.status == 'success') {


          this.otp = this.responseOfOtp.otp_code
          this.otpArr = this.responseOfOtp.otp_code_array
          this.otpMsg = this.responseOfOtp.msg

          this.verifyNumber();

        } else {
          this.otpMsg = this.responseOfOtp.msg
          this.presentToast(this.otpMsg)
        }

        this.dismiss()


      })


      // this.present();
      // this.restService.authenticate(stringy).subscribe(response => {

      //   this.response = JSON.parse(response['_body']);
      //   console.log(this.response.status);
      //   if (this.response.status == 'error') {
      //     this.presentToast(this.response.msg);
      //     this.dismiss();
      //   } else if (this.response.status == 'success') {

      //     //this.router.navigate(['/']);
      //     this.dismiss();
      //     


      //   }
      // }, err => {
      //   this.dismiss();
      // });
    }
  }

  validateForm() {
    console.log(this.offers);
    if (this.validation) {
      this.nameError = false;
      this.mobileNumberError = false;
      this.emailError = false;
      this.passwordError = false;
      this.invalidEmailError = false;
      this.picError = false;
      this.termsError = false;
      if (this.name == '' || this.name == undefined) {
        this.nameError = true;
        return false;
      } else if (this.mobileNumber == '' || this.mobileNumber == undefined) {
        this.mobileNumberError = true;
        return false;
      } else if (this.email == '' || this.email == undefined) {
        this.emailError = true;
        return false;
      } else if (this.ValidateEmail(this.email) == false) {
        this.invalidEmailError = true;
        return false;
      } else if (this.password == '' || this.password == undefined) {
        this.passwordError = true;
        return false;
      } else if (this.base64 == '' || this.base64 == undefined) {
        this.picError = true;
        return false;
      } else if (this.terms == false) {
        this.termsError = true;
        return false;
      } else {
        return true;
      }
    }
  }
  changeTerms(e) {

    if (e.detail.checked) {
      this.terms = true;
    } else {
      this.terms = false;
    }
    console.log(this.terms);
  }
  ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
      return (true)
    } else {
      //alert("You have entered an invalid email address!")
      return (false)
    }
  }
  LoginWithFacebook() {
    this.facebook.login(['public_profile', 'email']).then((res: FacebookLoginResponse) => {
      console.log('Logged into Facebook!', res)
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(626).height(939).as(picture_large)', []).then(profile => {
        console.log(profile);
        var stringy = JSON.stringify({
          "userName": profile['name'],
          "email": profile['email'],
          "profilePic": profile.picture_large.data.url,
          "requestType": "signup",
          "loginWith": 'Facebook'
        });
        this.restService.authenticate(stringy).subscribe(response => {
          this.response = JSON.parse(response['_body']);
          console.log(this.response.status);
          if (this.response.status == 'error') {
            this.presentToast(this.response.msg);
          } else if (this.response.status == 'success') {
            //this.presentToast(this.response.msg);
            //this.router.navigate(['/']);
            this.verifyNumber();

          }
        });
        //this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      });
    }).catch(e => console.log('Error logging into Facebook', e));
  }
  LoginWithGoogle() {
    this.googlePlus.login({})
      .then(res => {
        console.log(res);
        var stringy = JSON.stringify({
          "userName": res.displayName,
          "email": res.email,
          "profilePic": '',
          "requestType": "signup",
          "loginWith": 'Gmail'
        });
        this.restService.authenticate(stringy).subscribe(response => {
          this.response = JSON.parse(response['_body']);
          console.log(this.response.status);
          if (this.response.status == 'error') {
            this.presentToast(this.response.msg);
          } else if (this.response.status == 'success') {
            // this.presentToast(this.response.msg);
            //this.router.navigate(['/']);
            this.verifyNumber();

          }
        });
      }).catch(err => console.log(err));
  }
  async verifyNumber() {

    const popover = await this.popoverController.create({
      component: VerifyMobileNumberPage,
      translucent: true,
      componentProps: {
        stringyOfSignup: this.stringyOfSignup,
        otp: this.otp,
        otpArr: this.otpArr,
        otpMsg: this.otpMsg,
        mobileNumber:this.mobileNumber
      }
    });
    popover.onWillDismiss().then(data => {
      console.log(data);
      console.log(data.data.val);
      if (data.data.val == 'ok') {

        this.presentToast('Account Created Successfully');
        this.storage.set('user_details', this.response.user_details);
        this.storage.set('currency_symbol', this.response.user_details.symbol);
        this.storage.set('profile_img_url', this.response.profile_img_url);
        this.storage.set('base_urls', this.baseUrl);
        this.subjectEvents.publishSomeData({
          sidebar: 'sidebar'
        });
        this.navCtrl.navigateRoot('/');
      }
    })
    return await popover.present();
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
      this.validateForm();

    }).catch(err => console.error(err));
  }
  getImageFromGallery() {
    this.imageService.selectImageInGallery().then((imageData) => {
      this.profileImage = `data:image/png;base64,${imageData}`;
      this.base64 = `${imageData}`;
      this.validateForm();
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
  Gotologin() {
    this.router.navigate(['/login']);
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
