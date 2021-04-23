import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  constructor(public router:Router,public menuCtrl: MenuController) {
    
  }

 ngOnInit() {
   
 }
 toggleMenu(){
   this.menuCtrl.toggle();
 }

  goToBookingList(){
    this.router.navigate(['/other-booking-list']);
  }
  goToListedVehicle(){
    this.router.navigate(['/booking-list']);
  }
}
