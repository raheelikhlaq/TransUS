import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, ToastController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-contact-support',
  templateUrl: './contact-support.page.html',
  styleUrls: ['./contact-support.page.scss'],
})
export class ContactSupportPage implements OnInit {
  loading: HTMLIonLoadingElement;
  validation: boolean = false;
  Email: any;
  Subject: any;
  Description: any;
  DescriptionError: boolean;
  SubjectError: boolean;
  EmailError: boolean;
  response: any;
  userID: any = '';
  constructor(public loadingController: LoadingController, public activatedRoute: ActivatedRoute, private storage: Storage, public toastController: ToastController, public router: Router, public restService: RestService, public alertCtrl: AlertController,
    public menuCtrl: MenuController) {

  }

  ngOnInit() {
    this.storage.get('user_details').then((user_details) => {
      console.log(user_details);
      this.userID = user_details.users_id;
      if (this.userID) {

      } else {
        this.userID = '';
      }
    });
  }

  validateForm() {

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (this.validation) {
      if (re.test(this.Email)) {



        this.EmailError = false;
        this.SubjectError = false;
        this.DescriptionError = false;

        if (this.Email == '' || this.Email == undefined) {
          this.EmailError = true;
          return false;
        } else if (this.Subject == '' || this.Subject == undefined) {
          this.SubjectError = true;
          return false;
        } else if (this.Description == '' || this.Description == undefined) {
          this.DescriptionError = true;
          return false;
        } else {
          return true;
        }

      } else {
        this.presentToast('Invalid Email')
      }

    } else {
      this.presentToast('Invalid Email')
    }
  }
  submitForm() {
    this.validation = true;

    // console.log(this.document_four);
    if (this.validateForm() == true) {
      //alert('true');

      var stringy = JSON.stringify({
        "requestType": 'send_request',
        "email": this.Email,
        "usersID": this.userID,
        "subject": this.Subject,
        "description": this.Description
      });

      console.log(stringy);
      this.present();
      this.restService.customer_support(stringy).subscribe(response => {
        this.response = JSON.parse(response['_body']);
        console.log(this.response.status);
        if (this.response.status == 'error') {
          this.presentToast('Oops!something went wrong.');
        } else if (this.response.status == 'success') {
          this.presentToast('We received your query. We will try to get back to you as soon as possible. Thanks');

          this.router.navigate(['/']);


        }
        this.dismiss();
      }, err => {
        this.dismiss();
      });
    }
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
  carDetail() {
    this.router.navigate(['/car-detail']);
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
