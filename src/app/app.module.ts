import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";

import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { VerifyMobileNumberPage } from './verify-mobile-number/verify-mobile-number.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ForgotPasswordPage } from './forgot-password/forgot-password.page';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { NgxImageCompressService } from 'ngx-image-compress';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { ChartsModule } from 'ng2-charts';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { PhotoviewerPageModule } from './photoviewer/photoviewer.module';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
 import { FlutterwaveModule } from "flutterwave-angular-v3"
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

@NgModule({
  declarations: [AppComponent, VerifyMobileNumberPage, ForgotPasswordPage],
  entryComponents: [VerifyMobileNumberPage, ForgotPasswordPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    PhotoviewerPageModule,
    FlutterwaveModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    Camera,
    GooglePlus,
    Geolocation,
    NativeGeocoder,
    NgxImageCompressService,
    PhotoViewer,
    OneSignal,
 
    ImagePicker,
    UniqueDeviceID,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
