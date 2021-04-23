import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
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
  constructor(public toastController: ToastController,public restService:RestService,private storage: Storage,public router:Router,public menuCtrl: MenuController) { }
  
  ngOnInit() {
    this.storage.get('user_details').then((user_details) => {
      console.log(user_details);
      this.userID = user_details.users_id;
     });
  }
  submitForm(){
    this.oldPasswordError = false;
    this.newPasswordError = false;
    this.confirmPasswordError = false;
    this.notSameError = false;
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
        this.presentToast('Oops!something went wrong.');
     }else if(this.response.status == 'success'){
       this.presentToast('Password Updated Successfully');
       this.oldPassword = '';
       this.newPassword = '';
       this.ConfirmPassword = ''; 
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

}
