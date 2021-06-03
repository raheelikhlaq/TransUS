import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {
  public chatData: Array<any>;
  getResponse: any;
  base_url: any;
  private callInterval: any;

  chatListLength: any;
  apiResponse: any;
  userId: any;
  loader: boolean = false;
  constructor(public menuCtrl: MenuController, public router: Router, public restService: RestService, private storage: Storage) {

  }

  ngOnInit() {


  }
  ionViewWillEnter() {
    this.storage.get('base_urls').then((base_urls) => {
      this.base_url = base_urls;
      this.storage.get('user_details').then((user_details) => {
        this.userId = user_details.users_id;
        this.getChatList();
        // this.callInterval = setInterval(() => {
        //   this.callApi();

        // }, 2000
        // );
      });
    });
  }
  ionViewWillLeave() {
    clearInterval(this.callInterval);
    console.log('clear');
  }
  getChatList() {
    this.loader = true;
    var stringy = JSON.stringify({
      requestType: 'getChatList',
      usersID: this.userId
    });
    this.restService.update_messages(stringy).subscribe(response => {
      this.getResponse = JSON.parse(response['_body']);
      if (this.getResponse.status == "NoListFound") {
        console.log(this.getResponse);
      } else {
        this.chatData = this.getResponse.chat_list_details;

      }
      this.loader = false;


      //this.router.navigate(['/matches']);
    });
  }
  callApi() {
    var stringy = JSON.stringify({
      requestType: 'getChatList',
      usersID: this.userId
    });
    this.restService.update_messages(stringy).subscribe(response => {
      this.apiResponse = JSON.parse(response['_body']);
      if (this.apiResponse.status == "NoListFound") {
        console.log(this.getResponse);
        this.chatData = [];
      } else {
        this.chatListLength = this.apiResponse.chat_length;
        console.log(this.chatListLength, this.chatData.length);
        // if(this.chatListLength != this.chatData.length){
        this.chatData = this.apiResponse.chat_list_details;
        // }
        //this.router.navigate(['/matches']);
      }
    });
  }
  Detail(user_id, profile_img, user_name) {
    clearInterval(this.callInterval);
    console.log(profile_img, user_name);

    var myData = JSON.stringify({
      userID: this.userId,
      otherUserId: user_id,
      user_name: user_name,
      profile_img: profile_img

    });
    console.log(myData);
    this.router.navigate(['/chat-detail'], {
      queryParams: {
        value: myData
      }
    });

  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }

}