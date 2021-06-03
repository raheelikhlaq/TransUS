import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, NavController, PopoverController, ToastController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
import { ForgotPasswordPage } from '../forgot-password/forgot-password.page';
import { SubjectEventsService } from '../subject-events.service';
import { VerifyNewCodePage } from '../verify-new-code/verify-new-code.page';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  userID: any;
  response: any;
  oldPassword:any;
  newPassword:any;
  ConfirmPassword:any;
  oldPasswordError: boolean;
  newPasswordError: boolean;
  confirmPasswordError: boolean;
  notSameError: boolean;
  displayOLD:boolean = false;
  email:any;
  baseUrl:any;
  ShowLoading:boolean = false
  constructor(public toastController: ToastController,
    public restService:RestService,private storage: Storage,
    public router:Router,public menuCtrl: MenuController,
    public activatedRoute:ActivatedRoute,
    public subjectEvents: SubjectEventsService,
    public navCtrl:NavController, public popoverController:PopoverController) { }
  
  ngOnInit() {
    this.storage.get('user_details').then((user_details) => {
      if(user_details){
        console.log(user_details);
        this.userID = user_details.users_id;
      }
 
     });
     this.activatedRoute.queryParams.subscribe((res) => {
       if(res){
      this.response = JSON.parse(res.value);
      console.log(this.response);
      console.log(this.response.displayoldPass)
      console.log(this.response.old_pass)
      this.displayOLD = this.response.displayoldPass;
      this.oldPassword = this.response.old_pass;
      this.userID = this.response.userID
    }
     })
    this.email =  localStorage.getItem("restWithEmail");
  }
  submitForm(){
    this.oldPasswordError = false;
    this.newPasswordError = false;
    this.confirmPasswordError = false;
    this.notSameError = false;
    this.ShowLoading = true;
    console.log('error');
    if(this.oldPassword == '' || this.oldPassword == undefined){
      console.log('error');
      this.oldPasswordError = true;
      return false;
    }else if(this.newPassword == '' || this.newPassword == undefined){
      this.newPasswordError = true;
      return false;
    }else if(this.ConfirmPassword == '' || this.ConfirmPassword == undefined){
      this.confirmPasswordError = true;
      return false;
    }else if(this.newPassword != this.ConfirmPassword){
      this.notSameError = true;
      return false;
    }
    var stringy = JSON.stringify({
      "requestType" : "change_password",
      "usersID":this.userID,
      "oldPassword": this.oldPassword,
      "confirmPassword": this.ConfirmPassword
    });
    console.log(stringy);

    this.restService.forgotPassword(stringy).subscribe(response => {
     this.response =  JSON.parse(response['_body']);
      console.log(this.response);
      if(this.response.status == 'error'){
        this.presentToast(this.response.msg);
        this.ShowLoading = false

     }else if(this.response.status == 'success'){
       this.presentToast('Password Updated Successfully').then(res=>{
      
        if(this.displayOLD == false){
          setTimeout(() => {
            this.oldPassword = '';
            this.newPassword = '';
            this.ConfirmPassword = ''; 
            this.ShowLoading = false
            this.navCtrl.navigateRoot('/setting');
          }, 2000);
        }
        else {
          this.submitFormLogin();
        }
      
       
       })
    
     }
     
    },err => {
    
    });
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position:'top'
    });
    toast.present();
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  } 

  async forgotPassword() {
    const popover = await this.popoverController.create({
      component: ForgotPasswordPage,
      componentProps: {
        //"data": extra_info
      },
      translucent: true
    });
    popover.onWillDismiss().then(data => {

      console.log(data);
      if(data.data){
        this.verifyCodeNewPass();
      }
      

    })
    return await popover.present();
  }


  getRes:any;
  async verifyCodeNewPass() {
    const popover = await this.popoverController.create({
      component: VerifyNewCodePage,
      componentProps: {
        //"data": extra_info
      },
      translucent: true
    });
    popover.onWillDismiss().then(data => {

      console.log(data);
      this.getRes = data;
      console.log(this.getRes.data.userID)
      console.log(this.getRes.data.old_pass)
      console.log(this.getRes.data.displayoldPass)
      this.ShowLoading  = false;
      this.displayOLD = this.getRes.data.displayoldPass;
      this.oldPassword = this.getRes.data.old_pass;
      this.userID =this.getRes.data.userID;


    })
    return await popover.present();
  }

  
 
 submitFormLogin() {
    // this.validation = true;
   
      var stringy = JSON.stringify({
        "requestType": "login",
        "loginWith": "Email",
        "email": this.email,
        "password": this.ConfirmPassword
      });
      console.log(stringy);
      // this.present();
      this.ShowLoading = true;
      this.restService.authenticate(stringy).subscribe(response => {
        this.response = JSON.parse(response['_body']);
        console.log(this.response);
        if (this.response.status == 'NotFound') {
          this.presentToast('Invalid email or password');
          this.ShowLoading = false;
        } else if (this.response.status == 'Found') {
          this.presentToast('Login successfully!');
          this.storage.set('user_details', this.response.user_details);
          this.storage.set('profile_img_url', this.response.profile_img_url);
          this.storage.set('country_name', this.response.country_name);
          this.storage.set('base_urls', this.baseUrl);
          this.storage.set('currency_symbol', this.response.user_details.symbol);
          this.subjectEvents.publishSomeData({
            sidebar: 'sidebar'
          });
          this.navCtrl.navigateRoot('/');
        }
        // this.dismiss();
        this.ShowLoading = false;
      }, err => {
        this.presentToast('Oops!somthing went wrong.');
        // this.dismiss();
        this.ShowLoading = false;
      });
   
  }
}
