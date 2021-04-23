import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {

  pet: string = "puppies";
  userID: any;
  response: any;
  others_reviews: any;
  owns_reviews: any;
  profileImage: string;
  review_for_you_stats: any;
  each_row: any;
  rating_star_one: any;
  count_stars_one: any;
  rating_star_two: any;
  count_stars_two: any;
  rating_star_three: any;
  count_stars_three: any;
  count_stars_four: any;
  rating_star_four: any;
  rating_star_five: any;
  count_stars_five: any;
  count_total_ratings: any=0;
  avg_total_rating: any=0;
  critical_ratings_others: any;
  fillUpOne: number=0;
  fillUpTwo: number=0;
  fillUpThree: number=0;
  fillUpFour: number=0;
  fillUpFive: number=0;
  favResponse: any;
  viewResponse: any;
  sliderStartBoolean: any;
  constructor(public restService:RestService,private storage: Storage,public router:Router,public menuCtrl: MenuController) {
    this.pet = 'byYou';
    //console.log(Number((6.688689).toFixed(1)));
  }

 ngOnInit() {
  this.storage.get('user_details').then((user_details) => {
    console.log(user_details);
    this.userID = user_details.users_id;
    this.giveRating();
    
  });
  
 }
 toggleMenu(){
   this.menuCtrl.toggle();
 }

  BookNow(){
    this.router.navigate(['/car-booking']);
  }

  giveRating(){
    var stringy = JSON.stringify({
      "requestType" : "get_reviews",
      "usersID":this.userID
    });
    console.log(stringy);
   this.restService.reviews(stringy).subscribe(response => {
     this.response        =  JSON.parse(response['_body']);
     this.others_reviews  = this.response.others_reviews;
     this.owns_reviews    = this.response.owns_reviews;
     this.critical_ratings_others    = this.response.critical_ratings_others;
     if(this.response.review_for_you_stats){
          this.each_row        = this.response.review_for_you_stats.each_row;
          
          this.count_total_ratings = this.response.review_for_you_stats.count_total_ratings;
          this.avg_total_rating = this.response.review_for_you_stats.average;
          this.avg_total_rating =  (this.avg_total_rating).toFixed(1);
    
          this.rating_star_one = this.each_row[0].ratting_stars;
          this.count_stars_one = this.each_row[0].count_stars;

          this.fillUpOne = (this.each_row[0].count_stars*100)/this.count_total_ratings;
          this.fillUpOne = Number((this.fillUpOne/10).toFixed(1));
        




          this.rating_star_two = this.each_row[1].ratting_stars;
          this.count_stars_two = this.each_row[1].count_stars;

          this.fillUpTwo = (this.each_row[1].count_stars*100)/this.count_total_ratings;
          this.fillUpTwo = Number((this.fillUpTwo/10).toFixed(1));

          this.rating_star_three = this.each_row[2].ratting_stars;
          this.count_stars_three = this.each_row[2].count_stars;

          this.fillUpThree = (this.each_row[2].count_stars*100)/this.count_total_ratings;
          this.fillUpThree = Number((this.fillUpThree/10).toFixed(1));

          this.rating_star_four = this.each_row[3].ratting_stars;
          this.count_stars_four = this.each_row[3].count_stars;
          
          this.fillUpFour = (this.each_row[3].count_stars*100)/this.count_total_ratings;
          this.fillUpFour = Number((this.fillUpFour/10).toFixed(1));

          this.rating_star_five = this.each_row[4].ratting_stars;
          this.count_stars_five = this.each_row[4].count_stars;

          this.fillUpFive = (this.each_row[4].count_stars*100)/this.count_total_ratings;
          this.fillUpFive = Number((this.fillUpFive/10).toFixed(1));

     }


      console.log(this.others_reviews);
      this.storage.get('profile_img_url').then((profile_img_url) => {
        this.storage.get('base_urls').then((base_url) => {
          this.profileImage = base_url+''+profile_img_url;
          console.log(this.profileImage);
        });
      });
    },err => {
    
    });
  }
  favourite(request:any,ratingsID:any,i){
    
    if(this.userID){
    console.log(ratingsID);
    var stringy = JSON.stringify({
      "requestType": request,
      "ratingsID" : ratingsID,
      "usersID" : this.userID
     });
     console.log(stringy);
    this.restService.reviews(stringy).subscribe(response => {
      this.favResponse =  JSON.parse(response['_body']);
      console.log(this.favResponse.status);
      if(this.favResponse.status == 'error'){
        
      }else if(this.favResponse.status == 'success'){
        if(request == 'like_review'){
          var count = document.querySelector('.like_count_'+ratingsID).textContent;
          var newCount = parseInt(count)+1;
          document.querySelector('.like_count_'+ratingsID).textContent = newCount.toString();
          this.others_reviews[i].is_liked = 1;
          this.others_reviews = this.others_reviews;
        }else if(request == 'unlike_review'){
          var count = document.querySelector('.like_count_'+ratingsID).textContent;
          var newCount = parseInt(count)-1;
          document.querySelector('.like_count_'+ratingsID).textContent = newCount.toString();
          this.others_reviews[i].is_liked = 0;
          this.others_reviews = this.others_reviews;
        }
       
      }
     
     },err => {
     
     });
    }else{
      this.router.navigate(['/login']);
    }
  }
  View(request:any,ratingsID:any,feedback:number){
    if(this.userID){
    console.log(feedback);
    var stringy = JSON.stringify({
      "requestType": request,
      "ratingsID" : ratingsID,
      "usersID" : this.userID
     });
     console.log(stringy);
    this.restService.reviews(stringy).subscribe(response => {
      this.viewResponse =  JSON.parse(response['_body']);
      console.log(this.viewResponse.status);
      if(this.viewResponse.status == 'error'){
        
      }else if(this.viewResponse.status == 'success'){
        if(request == 'view_review'){ 
          document.querySelector('.feedback_'+ratingsID).textContent = this.others_reviews[feedback].feedback;
          var count = document.querySelector('.view_count_'+ratingsID).textContent;
          var newCount = parseInt(count)+1;
          document.querySelector('.view_count_'+ratingsID).textContent = newCount.toString();
        }
       
      }
     
     },err => {
     
     });
    }else{
      this.router.navigate(['/login']);
    }
  }
  Reviews(title){
    if(title == 'Helpful'){
      this.others_reviews =  this.response.others_reviews;
    }else if(title == 'Recent'){
      this.others_reviews =  this.response.others_reviews;
    }else if(title == 'Critical'){
      console.log(this.response.critical_ratings_others);
      this.others_reviews =  this.response.critical_ratings_others;
     // alert(title);
    }
  }
  selectIndex(i){
    this.sliderStartBoolean = i;
  }
}
