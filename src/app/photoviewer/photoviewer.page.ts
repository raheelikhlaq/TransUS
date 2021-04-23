import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-photoviewer',
  templateUrl: './photoviewer.page.html',
  styleUrls: ['./photoviewer.page.scss'],
})
export class PhotoviewerPage implements OnInit {

  veh_imgs: any = ''
  base_urls: any = ''

  indexOfSLide: any = 1




  constructor(public modalCtrl: ModalController,
    public storage: Storage,
    public navParams: NavParams,
    public location:Location) { }

  ngOnInit() {
    this.storage.get('base_urls').then((base_urls) => {
      this.base_urls = base_urls;
      this.veh_imgs = this.navParams.data.veh_imgs

      console.log('base_urls', this.base_urls);
      console.log('imagesssssssssssssss', this.navParams);

    })

  }

  ionViewWillEnter() {


  }

  closeModel() {

    this.modalCtrl.dismiss()

   // this.location.back()

  }


  @ViewChild('slides', { static: false }) slides: IonSlides;

  slideChanged(e: any) {
    this.slides.getActiveIndex().then((index: number) => {
      console.log('index -----------', index);

      this.indexOfSLide = index + 1

    })
  }

}
