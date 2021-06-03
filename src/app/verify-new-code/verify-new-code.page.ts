import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController, NavParams, PopoverController, ToastController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-verify-new-code',
  templateUrl: './verify-new-code.page.html',
  styleUrls: ['./verify-new-code.page.scss'],
})
export class VerifyNewCodePage implements OnInit {

  a1: number ;
  b1: number ;
  c1: number ;
  d1: number ;
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
  email:any;

  constructor(public navCtrl: NavController,
    public router: Router,
    public popoverController: PopoverController,
    public restService: RestService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public navParams: NavParams

  ) { }




  ngOnInit() {
  
    this.email = localStorage.getItem("restWithEmail");

    // alert('in the popup');
    // alert(this.navParams.get('stringyOfSignup'));

    this.stringyOfSignup = this.navParams.get('stringyOfSignup')
    this.otp = this.navParams.get('otp')
    this.otpArr = this.navParams.get('otpArr')
    this.otpMsg = this.navParams.get('otpMsg')
    this.mobileNumber = this.navParams.get('mobileNumber')
 

  }

  async ok() {
    await this.popoverController.dismiss();
  }
  async goToHome() {

    this.otpCodeOfthisScreen = this.a1.toString() + this.b1.toString() + this.c1.toString() + this.d1.toString()

    console.log(this.otpCodeOfthisScreen);

    // if (this.otpCodeOfthisScreen == this.otp) {
      // this.present();
      this.ShowLoading = true
      console.log(this.stringyOfSignup);

      var data = JSON.stringify({
        "email": this.email,
         "requestType": "verify_code",
         "code": this.otpCodeOfthisScreen
      })
      
      this.restService.forgotPassword(data).subscribe(response => {

        this.response = JSON.parse(response['_body']);
        console.log(this.response)
        console.log(this.response.status);
        if (this.response.status == 'NotFound') {
          this.presentToast("Code does not match");
          this.ShowLoading =false;
          // this.dismiss();
        } else if (this.response.status == 'Found') {

          localStorage.setItem("oldpass",this.response.old_pass)
          // await this.popoverController.dismiss();
          this.popoverController.dismiss({
            //val
            displayoldPass: true,
            old_pass:this.response.old_pass,
            userID:this.response.user_id
          });
          var myData = JSON.stringify({
            displayoldPass: true,
            old_pass:this.response.old_pass,
            userID:this.response.user_id
          });
          
         this.router.navigate(['/change-password'],{
            queryParams: {
              value : myData
              },
            });
            //  this.router.navigate(['/change-password']);


          // this.router.navigate(['/']);
          // this.dismiss();
          this.ShowLoading=false;



        }
      }, err => {
        // this.dismiss();
        this.ShowLoading = false
      });
    // } else {
    // }







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
