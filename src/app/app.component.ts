import { Component, OnInit } from '@angular/core';

import { MenuController, Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { SubjectEventsService } from './subject-events.service';
import { RestService } from './rest.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  login: boolean = false;
  public withLogin = [
    {
      title: 'Browse',
      url: '/',
      icon: 'assets/img/search.svg'
    }, {
      title: 'Messages',
      url: '/chat-list',
      icon: 'assets/img/messages.svg'
    }, {
      title: 'Contact Support',
      url: '/contact-support',
      icon: 'assets/img/support.svg'
    },
    {
      title: 'Notification',
      url: '/view-all-notifications',
      icon: 'assets/img/bell.svg'
    }, {
      title: 'Favorities',
      url: '/favorite',
      icon: 'assets/img/menu_heart.svg'
    }, {
      title: 'Booking',
      url: '/bookings',
      icon: 'assets/img/booking.svg'
    }, {
      title: 'Listed cars',
      url: '/listed-car',
      icon: 'assets/img/menu_check.svg'
    },
    // {
    //   title: 'Listed motors',
    //   url: '/listed-motor',
    //   icon: 'assets/img/menu_check.svg'
    // },
    {
      title: 'Ratings & Reviews',
      url: '/rating',
      icon: 'assets/img/Star.svg'
    }, {
      title: 'Earnings',
      url: '/earning',
      icon: 'assets/img/Earning.svg'
    }, {
      title: 'Setting',
      url: '/setting',
      icon: 'assets/img/setting.svg'
    }, {
      title: 'Logout',
      url: '/logout',
      icon: 'assets/img/login.svg'
    }

  ];
  public withoutLogin = [
    {
      title: 'Browse',
      url: '/',
      icon: 'assets/img/search.svg'
    }, {
      title: 'Contact Support',
      url: '/contact-support',
      icon: 'assets/img/support.svg'
    },
    {
      title: 'Login or Signup',
      url: '/login',
      icon: 'assets/img/login.svg'
    }

  ];
  user_name: any;
  profile_image: any;
  country: any;
  baseUrl: string = 'https://app.transusdrives.com/';
  Notification:any=[];
  constructor(
    public navCtrl: NavController,
    // private events: Events,
    public router: Router,
    private storage: Storage,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController,
    public restService:RestService,
    public subjectEvents: SubjectEventsService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.overlaysWebView(false)
      this.statusBar.backgroundColorByHexString('000000');
      
      this.statusBar.styleLightContent();
      this.getProfileData();
      /*this.events.subscribe('sidebar', sidebar => {
        console.log('sidebar');
        this.login =true;
        }) */
      this.subjectEvents.getObservable().subscribe((data) => {
        console.log('Data received', data);
        this.getProfileData();
        this.login = true;
      });
      this.storage.set('base_urls', this.baseUrl);
    });
  }

  ngOnInit() {

    /* const path = window.location.pathname.split('folder/')[1];
     if (path !== undefined) {
       this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
     } */
  }
  userData:any;
  noty_length:any;
  getProfileData() {

    this.storage.get('user_details').then((user_details) => {
      if (user_details) {
        this.userData = user_details;
        console.log(user_details);
        if (user_details) {
          this.storage.get('profile_img_url').then((profile_img_url) => {
            this.storage.get('base_urls').then((base_url) => {
              this.profile_image = base_url + '' + profile_img_url;
              // localStorage.setItem("email", this.userData.email);
            });
          });
          var stringfy = JSON.stringify({
            "requestType": 'get_all',
            "usersID": this.userData.users_id,
            "limit": "",
            "offset": "",
            'readFilter':"Unread"
          });
          console.log(stringfy);
          this.restService.notifications(stringfy).subscribe(response => {
         //   console.log(JSON.parse(response['_body']),"from app component page");
            this.Notification =  JSON.parse(response['_body']);
            console.log(this.Notification);
            this.noty_length  = this.Notification.notifications.length;
            console.log(this.noty_length)
          })
        } else {
          this.profile_image = "assets/img/usericon.svg";
        }
        this.user_name = user_details.user_name;
        this.storage.get('country_name').then((country_name) => {
          console.log('country_name: ' + country_name);
          if (country_name) {
            this.country = country_name;
          } else {
            this.country = '-';
          }
        });

        this.login = true;
      } else {
        this.login = false;
      }
    });
  }
  goToPage(param) {

    if (param == '/logout') {
      this.storage.set('user_details', null);
      this.storage.set('profile_img_url', null);
      //    this.storage.set('base_urls', null);
      this.navCtrl.navigateRoot('/');
      this.login = false;
    } else {
      this.router.navigate([param]);
    }
  }
  goToProfile() {
    this.router.navigate(['/profile']);
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
