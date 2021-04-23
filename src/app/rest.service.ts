import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class RestService {
  //domain = "https://app.transusdrives.com/webservices/";
  domain = "https://app.transusdrives.com/webservices/";

  

  constructor(public http: Http) {
    console.log('Hello RestProvider Provider');


  }

  //get credit 
  authenticate(data) {
    return this.http.post(this.domain + 'auth_user', data);
  }
  //forgot password
  forgotPassword(data) {
    return this.http.post(this.domain + 'forgot_password', data);
  }
  //edit Profile
  editProfile(data) {
    return this.http.post(this.domain + 'edit_profile', data);
  }
  //edit Profile
  getUserDetails(data) {
    return this.http.post(this.domain + 'get_user_details', data);
  }
  //get_ddl_data
  getDdlData(data) {
    return this.http.post(this.domain + 'get_ddl_data', data);
  }
  //save list vehicles
  saveListVehicles(data) {
    return this.http.post(this.domain + 'list_vehicles', data);
  }
  // list vehicles
  list_vehicles(data) {
    return this.http.post(this.domain + 'list_vehicles', data);
  }
  // bookings
  bookings(data) {
    return this.http.post(this.domain + 'bookings', data);
  }
  booking_action(data) {
    return this.http.post(this.domain + 'booking_actions', data);
  }
  // filter dropdowns and search
  filters(data) {
    return this.http.post(this.domain + 'filters', data);
  }
  // favourite_settings
  favourite_settings(data) {
    return this.http.post(this.domain + 'favourite_settings', data);
  }
  //customer_support
  customer_support(data) {
    return this.http.post(this.domain + 'customer_support', data);
  }
  //update_messages
  update_messages(data) {
    return this.http.post(this.domain + 'update_messages', data);
  }
  //add review 
  reviews(data) {
    return this.http.post(this.domain + 'reviews', data);
  }
  //notifications
  notifications(data) {
    return this.http.post(this.domain + 'notifications', data);
  }
  //homeData
  homeData(data) {
    return this.http.post(this.domain + 'get_ddl_data', data);
  }
  //transactions
  transactions(data) {
    return this.http.post(this.domain + 'transactions', data);
  }
  //deleteImage
  deleteImage(data) {
    return this.http.post(this.domain + 'delete_images', data);
  }
  //inquire_charges
  inquire_charges(data) {
    return this.http.post(this.domain + 'inquire_charges', data);
  }
  //withdrawal
  withdrawal(data) {
    return this.http.post(this.domain + 'withdrawal', data);
  }

  auth_userAPI(data) {
    return this.http.post(this.domain + 'auth_user', data);
  }


  imgesForIos(data) {
    return this.http.post(this.domain + 'list_vehicles', data);
  }

  CoreSettingOneSignal(data) {
    return this.http.post(this.domain + 'system_details', data);
  }

  upDateOnesignal(data) {
    return this.http.post(this.domain + 'onesignal_update', data);
  }

  allVehicles(data){
    // https://app.transusdrives.com/webservices/list_approved_veh
    return this.http.post(this.domain + 'list_approved_veh', data);
  }

  filterSearching(data){
    // https://app.transusdrives.com/webservices/list_approved_veh
    return this.http.post(this.domain + 'list_approved_veh', data);      
  }
  payementAPi(data){
    // https://app.transusdrives.com/webservices/transus_payments
    return this.http.post(this.domain + 'transus_payments', data);  
  }

  paidbooking(data){
    // https://app.transusdrives.com/webservices/flutter_payments
    return this.http.post(this.domain + 'flutter_payments', data);  
  }
}

