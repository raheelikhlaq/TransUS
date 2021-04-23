import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
declare var google;
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  response: any;
  autocomplete: { input: string; };
  autocompleteItems: any[];
  detinationCompleteItems : any[];
  location: any;
  placeid: any;
  GoogleAutocomplete: any;
  options: GeolocationOptions;
  geoOptions: NativeGeocoderOptions;
  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any = {};
  userAddress: any = '';
  latitude: number;
  longitude: number;
  latitudeString: string;
  longitudeString: string;
  get_country: any;
  btnApply :boolean = true;
  address: string ='';
  pAdress: string;
  errorMsg: string;
  @ViewChild('mapElement') mapNativeElement: ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  directionForm: FormGroup;
  source:any;
  destination:any;
  showSourceError: boolean;
  showDestinationError: boolean;
  back: any;
  constructor(private storage: Storage,
    private fb: FormBuilder,
    public activatedRoute:ActivatedRoute,
    private tc: ToastController,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public zone: NgZone,
    private router: Router,) { 
      this.activatedRoute.queryParams.subscribe((res)=>{
        
        this.response = JSON.parse(res.value);
        console.log(this.response);
        this.back = this.response.location;
      
    });
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
    this.detinationCompleteItems = [];
  }

  ngOnInit() {
    //this.loadMap();
  }
  goToHome(){
    this.router.navigate([this.back]);
  }
  backToList(){
    this.showSourceError = false;
    this.showDestinationError = false;
    if(this.source == '' || this.source == undefined ){
        this.showSourceError = true;
        return false;
    }else if(this.destination == '' || this.destination == undefined){
        this.showDestinationError = true;
        return false;
    }
    this.getpickuplatlog(this.source);
    this.getdropofflatlog(this.destination);
    this.storage.set('pickup', this.source);
    this.storage.set('dropoff', this.destination);
    
    this.router.navigate([this.back]);
    
  }
  ngAfterViewInit(): void {
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    this.directionsDisplay.setMap(map);
  }
  calculateAndDisplayRoute() {
    this.showSourceError = false;
    this.showDestinationError = false;
    if(this.source == '' || this.source == undefined ){
        this.showSourceError = true;
        return false;
    }else if(this.destination == '' || this.destination == undefined){
        this.showDestinationError = true;
        return false;
    }
    const that = this;
    this.directionsService.route({
      origin: this.source,
      destination: this.destination,
      travelMode: 'DRIVING'
    }, (response, status) => {
      console.log(response);
      if (status === 'OK') {
        that.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  UpdateSearchResults() {
    if (this.source == '') {
      this.autocompleteItems = [];
      return;
    }
    //componentRestrictions: {country: 'AE'}
    this.GoogleAutocomplete.getPlacePredictions({ input: this.source },
      (predictions, status) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            console.log(prediction);
            this.autocompleteItems.push(prediction);

          });
        });
      });
  }
  SelectSearchResult(address) {
    this.source = address;//May be delete
    console.log(this.source);
    this.autocompleteItems = []
  }
  UpdateDestinationResults(){
    if (this.destination == '') {
      this.detinationCompleteItems = [];
      return;
    }
    //componentRestrictions: {country: 'AE'}
    this.GoogleAutocomplete.getPlacePredictions({ input: this.destination },
      (predictions, status) => {
        this.detinationCompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            console.log(prediction);
            this.detinationCompleteItems.push(prediction);

          });
        });
      });
  }
  SelectDestinationResult(address) {
    this.destination = address;//May be delete
    console.log(this.destination);
    this.detinationCompleteItems = []
    
  }
  getpickuplatlog(address) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.forwardGeocode(address)
      .then((result: NativeGeocoderResult[]) => {
       
        console.log(result[0].latitude,result[0].longitude);
        this.storage.set('pickuplong', result[0].longitude);
        this.storage.set('pickuplat', result[0].latitude);
      }).catch((error: any) => {
        this.errorMsg = JSON.stringify(error);
        console.log(this.errorMsg);
        
      });
  }
  getdropofflatlog(address) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.forwardGeocode(address)
      .then((result: NativeGeocoderResult[]) => {
       
        console.log(result[0].latitude,result[0].longitude);
        this.storage.set('dropofflong', result[0].longitude);
        this.storage.set('dropofflat', result[0].latitude);
      }).catch((error: any) => {
        this.errorMsg = JSON.stringify(error);
        console.log(this.errorMsg);
        
      });
  }
    
    
 /* loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
    
          this.latitude = resp.coords.latitude;
          this.longitude = resp.coords.longitude;
          console.log('dosri condition',this.latitude,this.longitude);
          this.changemap(this.latitude,this.longitude);
        
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  currentLoadUserMap(){
    this.geolocation.getCurrentPosition().then((resp) => {
    this.latitude = resp.coords.latitude;
    this.longitude = resp.coords.longitude;
    this.getLocationAdddress();
  }).catch((error) => {
    console.log('Error getting location', error);
  });
}
getLocationAdddress() {
  let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
  };
  this.nativeGeocoder.reverseGeocode(this.latitude, this.longitude, options)
    .then((result: NativeGeocoderResult[]) => {
      console.log(JSON.stringify(result));
      this.address = result[0].subLocality + ' ' + result[0].subAdministrativeArea;
     // this.modalCtrl.dismiss({update: true});
      }).catch((error: any) => {
          console.log(error);
       //   this.modalCtrl.dismiss({update: true});
   });
}
  changemap(lat,long){
    console.log('change map',lat,long);
   // this.service.userLocation.latitude = lat;
//this.service.userLocation.longitude = long;

    let latLng = new google.maps.LatLng(lat, long);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.getAddressFromCoords(lat, long);

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.autocompleteItems = [];
   // this.storage.set('userLocation', this.service.userLocation);
   // console.log(this.service.userLocation);
    this.map.addListener('dragend', () => {

      this.latitude = this.map.center.lat();
      this.longitude = this.map.center.lng();
      //console.log(this.latitude,this.longitude);
     
     this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      
    });
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log("get Address From Coords " + lattitude + " " + longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        console.log('add:---'+result[0]);
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if (value.length > 0)
            responseAddress.push(value);

        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value + ", ";
        }
        this.address = this.address.slice(0, -2);
        console.log('address1'+this.address);
        this.pAdress = this.address;
        this.lastwordString(this.address);
       
        
      
        
      })
      .catch((error: any) => {
        this.address = "Address Not Available!";
        console.log('address2'+this.address);
      });

      
  }
  lastwordString(string){
    console.log(string.split(" ").splice(-1));
    this.get_country= string.split(" ").splice(-1);
    if(this.get_country[0] == "AE"){
      this.btnApply = false;
    }else{
      this.btnApply = true;
      this.presentToast();
    }
  }
  
  UpdateSearchResults() {
    if (this.userAddress == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.userAddress ,componentRestrictions: {country: 'AE'}},
      (predictions, status) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            console.log(prediction);
            this.autocompleteItems.push(prediction);
          });
        });
      });
  }
  SelectSearchResult(address) {
      this.userAddress = address;//May be delete
      this.btnApply = false;
     // this.service.userLocation.address = address;
      this.pAdress = address;
      this.getCoordsFromAddress(address);
     // this.storage.set('userLocation', this.service.userLocation);
  }

  getCoordsFromAddress(address) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.forwardGeocode(address)
      .then((result: NativeGeocoderResult[]) => {
       
        this.changemap(result[0].latitude,result[0].longitude);
        //this.modalCtrl.dismiss({update: true});
      }).catch((error: any) => {
        this.errorMsg = JSON.stringify(error);
        console.log(this.errorMsg);
        this.userAddress = "";
       // this.service.userLocation.latitude = '';
        //this.service.userLocation.longitude = '';
        //this.modalCtrl.dismiss({update: true});
      });
  }
  ClearAutocomplete() {
    this.autocompleteItems = []
  }
  async presentToast() {
    const toast = await this.tc.create({
      message: 'We Cannot deliver in this area.',
      duration: 2000,
      position: 'top',
      buttons: [
         {
          text: 'cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }*/
}
