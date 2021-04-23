import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-available-motor',
  templateUrl: './all-available-motor.page.html',
  styleUrls: ['./all-available-motor.page.scss'],
})
export class AllAvailableMotorPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  GotoList(){
    this.router.navigate(['/']);
  }
}
