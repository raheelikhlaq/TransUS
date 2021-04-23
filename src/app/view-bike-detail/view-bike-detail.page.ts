import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-view-bike-detail',
  templateUrl: './view-bike-detail.page.html',
  styleUrls: ['./view-bike-detail.page.scss'],
})
export class ViewBikeDetailPage implements OnInit {
  response: any;
  motor_detail: any;
  base_urls: any;
  userID: any;
  user_name: any;
  profileImage: string;

  constructor(private storage: Storage,public activatedRoute:ActivatedRoute,public router:Router,public menuCtrl: MenuController) { 
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.response = JSON.parse(res.value);
      console.log(this.response);
      this.motor_detail =  this.response.motor_detail;
  });
}

  ngOnInit() {
    this.storage.get('profile_img_url').then((profile_img_url) => {
    this.storage.get('base_urls').then((base_urls) => {
      this.base_urls = base_urls;
        this.profileImage = profile_img_url;
        console.log(this.profileImage);
       });
    });
  }
  
  enquiryCharges(){
    this.storage.get('user_details').then((user_details) => {
      this.userID = user_details.users_id;
      this.user_name = user_details.user_name;
      if(user_details){
        var myData = JSON.stringify({
          userID: this.motor_detail.users_id,
          otherUserId:this.userID,
          user_name:this.user_name,
          profile_img:this.profileImage,
          motor_detail:this.motor_detail
        });
       console.log(myData);
        this.router.navigate(['/chat-detail'],{
          queryParams: {
            value : myData
            }
          }); 
        
      }else{
        this.router.navigate(['/login']);
      }
    });
    
  }
  goToHome(){
    this.router.navigate(['/']);
  }
}
