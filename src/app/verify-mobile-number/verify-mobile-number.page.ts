import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController, NavParams, PopoverController, ToastController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-verify-mobile-number',
  templateUrl: './verify-mobile-number.page.html',
  styleUrls: ['./verify-mobile-number.page.scss'],
})
export class VerifyMobileNumberPage implements OnInit {
  a1: number = 1;
  b1: number = 2;
  c1: number = 3;
  d1: number = 4;
  ShowLoading:boolean=false;
  response: any = ''
  stringyOfSignup: any = ''
  loading: any = ''

  otp: any = ''
  otpArr: any = ''
  otpMsg: any = ''
  mobileNumber: any = ''

  responseOfOtp: any = ''

  otpCodeOfthisScreen: any = ''




  constructor(public navCtrl: NavController,
    public router: Router,
    public popoverController: PopoverController,
    public restService: RestService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public navParams: NavParams

  ) { }




  ngOnInit() {


    // alert('in the popup');
    // alert(this.navParams.get('stringyOfSignup'));

    this.stringyOfSignup = this.navParams.get('stringyOfSignup')
    this.otp = this.navParams.get('otp')
    this.otpArr = this.navParams.get('otpArr')
    this.otpMsg = this.navParams.get('otpMsg')
    this.mobileNumber = this.navParams.get('mobileNumber')

    this.a1 = this.otpArr[0]
    this.b1 = this.otpArr[1]
    this.c1 = this.otpArr[2]
    this.d1 = this.otpArr[3]

  }

  async ok() {
    await this.popoverController.dismiss();
  }
  async goToHome() {

    this.otpCodeOfthisScreen = this.a1.toString() + this.b1.toString() + this.c1.toString() + this.d1.toString()

    console.log(this.otpCodeOfthisScreen);

    if (this.otpCodeOfthisScreen == this.otp) {
      // this.present();
      this.ShowLoading = true
      console.log(this.stringyOfSignup);

      this.restService.authenticate(this.stringyOfSignup).subscribe(response => {

        this.response = JSON.parse(response['_body']);
        console.log(this.response.status);
        if (this.response.status == 'error') {
          this.presentToast(this.response.msg);
          this.ShowLoading =false;
          // this.dismiss();
        } else if (this.response.status == 'success') {


          // await this.popoverController.dismiss();
          this.popoverController.dismiss({
            //val
            val: 'ok'

          });
          //  this.router.navigate(['/']);


          this.router.navigate(['/']);
          // this.dismiss();
          this.ShowLoading=false;



        }
      }, err => {
        // this.dismiss();
        this.ShowLoading = false
      });
    } else {
      this.presentToast('Incorrect Code')
    }







  }

  moveFocus(nextElement) {
    nextElement.focus();
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


  resend() {


    var ss = JSON.stringify({
      requestType: 'send_otp',
      phone_number: this.mobileNumber

    })

    // this.present()
    this.ShowLoading = true;

    this.restService.auth_userAPI(ss).subscribe((ress: any) => {
      console.log(ress)


      this.responseOfOtp = JSON.parse(ress['_body']);

      console.log('respooooo', this.responseOfOtp)

      if (this.responseOfOtp.status == 'success') {


        this.otp = this.responseOfOtp.otp_code
        this.otpArr = this.responseOfOtp.otp_code_array
        this.otpMsg = this.responseOfOtp.msg


        this.a1 = this.otpArr[0]
        this.b1 = this.otpArr[1]
        this.c1 = this.otpArr[2]
        this.d1 = this.otpArr[3]



      } else {
        this.otpMsg = this.responseOfOtp.msg
        this.presentToast(this.otpMsg)
      }

      // this.dismiss()
      this.ShowLoading = false;
    })


  }
}
