import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonSlides, LoadingController, MenuController, PopoverController, ToastController } from '@ionic/angular';
import { CameraimageService } from '../cameraimage.service';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
import { NgxImageCompressService } from 'ngx-image-compress';
import { Location } from '@angular/common';
@Component({
  selector: 'app-list-your-bike',
  templateUrl: './list-your-bike.page.html',
  styleUrls: ['./list-your-bike.page.scss'],
})
export class ListYourBikePage implements OnInit {
  @ViewChild('startSlides') startSlides: IonSlides;
  @ViewChild('endSlides') endSlides: IonSlides;
  option1 = {
    slidesPerView: 8
  };
  document_one: string;
  document_two: string;
  document_three: string;
  availability: boolean = false;
  vehicleNumberPlateError: boolean;
  driverLicenseError: boolean;
  insuranceDocumentError: boolean;
  userID: any;
  Email: any;
  response: any;
  avail: number;
  loading: HTMLIonLoadingElement;
  constructor(public loadingController: LoadingController, public popoverController: PopoverController, private storage: Storage, public toastController: ToastController, public router: Router, public restService: RestService, public alertCtrl: AlertController,
    public imageService: CameraimageService, public menuCtrl: MenuController, private imageCompress: NgxImageCompressService, public location: Location) {
  }

  ngOnInit() {
    this.storage.get('user_details').then((user_details) => {
      console.log(user_details);
      this.userID = user_details.users_id;
      this.Email = user_details.email;

    });

  }
  submitForm() {

    if (this.validateForm() == true) {
      if (this.availability) {
        this.avail = 1;
      } else {
        this.avail = 0;
      }
      var d_one = this.document_one.split(',')[1];
      var d_two = this.document_two.split(',')[1];
      var d_three = this.document_three.split(',')[1];
      //alert('true');
      var stringy = JSON.stringify({
        "requestType": "list_motor",
        "licensePlateNoImg": d_one,
        "driverLicenseNoImg": d_two,
        "insuranceImg": d_three,
        "availability": this.avail,
        "usersID": this.userID,
        "email": this.Email
      });
      console.log(stringy);
      this.present();
      this.restService.saveListVehicles(stringy).subscribe(response => {
        this.response = JSON.parse(response['_body']);
        console.log(this.response.status);
        if (this.response.status == 'error') {
          this.presentToast('Oops!something went wrong.');
        } else if (this.response.status == 'success') {
          this.presentToast('Motor Added successfully!');
          this.router.navigate(['/listed-motor']);
          this.dismiss();
        }
       
      }, err => {

      });
    }
  }
  validateForm() {
    // this.document_one = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
    // this.document_two = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
    // this.document_three = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

    this.vehicleNumberPlateError = false;
    this.driverLicenseError = false;
    this.insuranceDocumentError = false;
    if (this.document_one == '' || this.document_one == undefined) {
      this.vehicleNumberPlateError = true;
      return false;
    } else if (this.document_two == '' || this.document_two == undefined) {
      this.driverLicenseError = true;
      return false;
    } else if (this.document_three == '' || this.document_three == undefined) {
      this.insuranceDocumentError = true;
      return false;
    } else {
      return true;
    }
  }
  async uploadDocument(param) {
    let alert = await this.alertCtrl.create({
      message: 'Upload Profile Photo?',
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
            this.getImageFromGallery(param);
          }
        }
      ]
    });
    alert.present();
  }
  takeImageFromCamera(param) {

    this.imageService.selectImageInCamera().then((imageData) => {
      var base64 = `data:image/png;base64,${imageData}`;
      this.imageCompress.compressFile(base64, 0, 50, 50).then(
        result => {
          if (param == 1) {
            this.document_one = result;
          } else if (param == 2) {
            this.document_two = result;
          } else if (param == 3) {
            this.document_three = result;
          }
        }
      );
    }).catch(err => console.error(err));
  }
  getImageFromGallery(param) {
    this.imageService.selectImageInGallery().then((imageData) => {
      var base64 = `data:image/png;base64,${imageData}`;
      this.imageCompress.compressFile(base64, 0, 50, 50).then(
        result => {
          if (param == 1) {
            this.document_one = result;
          } else if (param == 2) {
            this.document_two = result;
          } else if (param == 3) {
            this.document_three = result;
          }
        }
      );
    }).catch(err => console.error(err));
  }
  goToHome() {

    this.location.back();
    //this.router.navigate(['/']);
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
