import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
import { IonContent, PopoverController } from '@ionic/angular';
import { EnterOfferPage } from '../enter-offer/enter-offer.page';
import { Location } from '@angular/common';
@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
})
export class ChatDetailPage implements OnInit {
  response: any;
  @ViewChild('IonContent',{static:true}) content: IonContent
  paramData: any;
  msgList: any;
  userName: any;
  user_input: string = "";
  User: number = 0;
  toUser: number = 0;
  start_typing: any;
  loader: boolean;
  userData: any;
  sender_id: any;
  base_url: any;
  sender_name: any;
  profileImg: string;
  receiver_id: number;
  getMessages: any;
  currentTime: string;
  getResponse: any;
  unreadMessages: any;
  private autoSaveInterval: any;
  
  chatLength: any;
  userId: any;
  btnSendPrice: boolean=false;
  constructor(public popoverController:PopoverController,
    public restService:RestService,
    private storage: Storage,
    public router:Router,
    public activatedRoute:ActivatedRoute,
    public location:Location) {
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.storage.get('base_urls').then((base_urls) => {
        this.base_url = base_urls;
      this.userData = JSON.parse(res.value);
      console.log(res);
      this.sender_id = this.userData.userID;
    
      this.receiver_id = this.userData.otherUserId;
      this.toUser = this.sender_id;
      this.User = this.receiver_id;
      this.profileImg = this.base_url+''+this.userData.profile_img;
      this.sender_name = this.userData.user_name;
      console.log(this.sender_name);
      if(this.userData.motor_detail){
        console.log(this.userData.motor_detail);
        this.btnSendPrice = true;
      }
      });
    });
   }

  ngOnInit() {
    //this.sendOffer();
   
  }

  ionViewWillEnter(){
    this.storage.get('base_urls').then((base_urls) => {
      this.base_url = base_urls;
      this.storage.get('user_details').then((user_details) => {
        console.log(user_details);
       /* if(user_details){
          this.storage.get('profile_img_url').then((profile_img_url) => {
             this.profileImg = this.base_url+''+profile_img_url;
          });
        }*/
      //  this.sender_name = user_details.user_name;
        this.userId = user_details.users_id;
        this.autoSaveInterval= setInterval( ()=>{
          this.senderSends();
          
           },2000
         );
        this.getMesges();
      });
    });
   
   
  }
  ionViewWillLeave(){
    clearInterval(this.autoSaveInterval);
    console.log('clear');
  }
  async sendOffer(){
    const popover = await this.popoverController.create({
      component: EnterOfferPage,
      componentProps: {
          "data": this.userData.motor_detail
        }, 
        translucent: true
      });
      popover.onWillDismiss().then(data => {
       
      // console.log('dismiss');
      
      }) 
      return await popover.present();
  }
  getMesges(){
    var stringy = JSON.stringify({
      requestType : 'getMessages',
      usersID : this.receiver_id,
      otherUserId : this.sender_id
    });
    this.restService.update_messages(stringy).subscribe(response => {
      this.getMessages = JSON.parse(response['_body']);
      this.msgList     = this.getMessages.chat_messages;
      console.log(this.getMessages);
      this.scrollDown()
      //this.router.navigate(['/matches']);
    }); 
  }

  sendMsg() {
    var now = new Date()
    //var date = now.toLocaleDateString();
    console.log(now);
    var time = now.toLocaleTimeString();
    //+' '+time.split(' ')[1]
    this.currentTime = time.split(':')[0]+':'+time.split(':')[1];
    
    if (this.user_input !== '') {
      this.msgList.push({
        userId: this.toUser,
        time:  this.currentTime,
        message: this.user_input
      })
      

      var stringy = JSON.stringify({
        requestType : 'sendMessage',
        usersID : this.sender_id,
        otherUserId : this.receiver_id,
        chatMsg : this.user_input,
        time_send: this.currentTime
      });
      this.user_input = ""; 
      this.restService.update_messages(stringy).subscribe(response => {
        this.getResponse = JSON.parse(response['_body']);
        console.log(this.getMessages);
        if(this.getResponse.status){
          /*this.msgList.push({
            userId: this.toUser,
            time:  this.currentTime,
            message: this.user_input
          })
          this.user_input = ""; */ 
        this.scrollDown()
        }else{
          this.msgList.splice(this.msgList.length-1 , 1);
        }
        //this.router.navigate(['/matches']);
      }); 
     
      
     /* setTimeout(() => {
        this.senderSends()
      }, 500); */

    }
  }
  senderSends() {
    //this.loader = true;
    var stringy = JSON.stringify({
      requestType : 'unreadMessages',
      usersID : this.sender_id,
      otherUserId : this.receiver_id,
      chatMsg : this.user_input
    });
    this.restService.update_messages(stringy).subscribe(response => {
      this.getResponse = JSON.parse(response['_body']);
      this.unreadMessages  = this.getResponse.unread_messages;
      this.chatLength = this.getResponse.chat_length;
      console.log(this.msgList.length+'--'+this.chatLength);
      if(this.msgList.length >0){
        if(this.chatLength !=this.msgList.length){
          for(var i =0; i<this.unreadMessages.length; i++){
            console.log(i);
            this.msgList.push({
              userId: this.unreadMessages[i].userId,
              time: this.unreadMessages[i].time,
              message: this.unreadMessages[i].message
            });
          } 
          this.scrollDown()
        }
      }
    
      //this.loader = false;
     
    }); 
  
  //  this.scrollDown()
  }
  scrollDown() {
   // document.querySelector('.chat_8').scrollIntoView();
    setTimeout(() => {
     // this.content.scrollToBottom(50)
      this.content.scrollToBottom(50);
    }, 170);
  }

  userTyping(event: any) {
    console.log(event);
    this.start_typing = event.target.value;
   // this.scrollDown()
  }
  back(){
    clearInterval(this.autoSaveInterval);
    //this.router.navigate(['/chat-list']);

    this.location.back()
  }
}
