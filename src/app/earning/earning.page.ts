import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ToastController } from '@ionic/angular';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, ThemeService } from 'ng2-charts';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-earning',
  templateUrl: './earning.page.html',
  styleUrls: ['./earning.page.scss'],
})
export class EarningPage implements OnInit {
 /* animation: {
           onComplete: function () {
               var chartInstance = this.chart,
               ctx = chartInstance.ctx;
               ctx.textAlign = 'center';
               ctx.textBaseline = 'bottom';
               this.data.datasets.forEach(function (dataset, i) {
                   var meta = chartInstance.controller.getDatasetMeta(i);
                   meta.data.forEach(function (bar, index) {
                       var data = dataset.data[index];
                       if (data > 0) {
                         ctx.fillText(data, bar._model.x, bar._model.y - 5);
                      }
                   });
               });
           }
       } */
    
  public barChartOptions: ChartOptions = {
    
    responsive: true,
    
    scales: {
      yAxes: [
        {
          display: false,
        
        }
      ]
    } ,
   // legend: { display: false },
  animation: {
  onComplete: function () {
      var chartInstance = this.chart,
          ctx = chartInstance.ctx;

      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';

      this.data.datasets.forEach(function (dataset, i) {
          var meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
              var data = dataset.data[index];
              ctx.fillText(data, bar._model.x, bar._model.y - 5);
          });
      });
  },
  onProgress: function () {
      var chartInstance = this.chart,
          ctx = chartInstance.ctx;

      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';

      this.data.datasets.forEach(function (dataset, i) {
          var meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
              var data = dataset.data[index];
              ctx.fillText(data, bar._model.x, bar._model.y - 5);
          });
      });
  }
}
  };
  public barChartLabels: Label[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0, 0, 0], label: 'Series A' }
  ];
  public chartColors: Array<any> = [
    { // first color
      backgroundColor: '#E2AC3C',
      borderColor: '#E2AC3C',
      pointBackgroundColor: '#E2AC3C',
      pointBorderColor: '#E2AC3C',
      pointHoverBackgroundColor: '#E2AC3C',
      pointHoverBorderColor: '#E2AC3C'
    }];
  userID: any;
  response: any;
  currencies_id: any;
  total_earning: number = 0;
  total_tax: number = 0;
  total_refund:number = 0;
  total_trip_cost: number = 0;
  currency_symbol: any;
  wallet_amount: any;
  earning_details: any;
  sundayEarning: number = 0;
  mondayEarning: number = 0;
  tuesdayEarning: number = 0;
  wednesdayEarning: number = 0;
  thursdayEarning: number = 0;
  fridayEarning: number = 0;
  saturdayEarning: number = 0;
  loading: HTMLIonLoadingElement;
  constructor(public loadingController:LoadingController,public toastController:ToastController,private storage: Storage,public restService:RestService,private themeService: ThemeService,public menuCtrl:MenuController) { }

  ngOnInit() {
    this.storage.get('currency_symbol').then((currency_symbol) => {
      this.currency_symbol = currency_symbol;
 });
    this.storage.get('user_details').then((user_details) => {
      console.log(user_details);
      this.userID = user_details.users_id;
      this.currencies_id = user_details.currencies_id;
      this.earning_stats();
    });
  }
  earning_stats(){
    var stringy = JSON.stringify({
      "requestType" : "owner_earning",
      "usersID":this.userID,
      "currencyID": this.currencies_id
    });
    console.log(stringy);
    this.restService.transactions(stringy).subscribe(response => {
     this.response =  JSON.parse(response['_body']);
      console.log(this.response);
      if(this.response.status == 'NotFound'){
        
     }else if(this.response.status == 'Found'){
      this.total_earning  = this.response.total_earning;
      this.total_tax      = this.response.total_tax;
      this.total_trip_cost= this.response.total_trip_cost;
      this.total_refund = this.response.total_refund;
      this.wallet_amount  = this.response.wallet_amount;


      this.earning_details  = this.response.earning_details;
      for(var i=0;i<this.earning_details.length;i++){
          if(this.earning_details[i].day_name == 'Sunday'){
              this.sundayEarning = this.sundayEarning + Number(this.earning_details[i].earning);
          }else if(this.earning_details[i].day_name == 'Monday'){
            this.mondayEarning = this.mondayEarning + Number(this.earning_details[i].earning);
          }else if(this.earning_details[i].day_name == 'Tuesday'){
            this.tuesdayEarning = this.tuesdayEarning + Number(this.earning_details[i].earning);
          }else if(this.earning_details[i].day_name == 'Wednesday'){
            this.wednesdayEarning = this.wednesdayEarning + Number(this.earning_details[i].earning);
          }else if(this.earning_details[i].day_name == 'Thursday'){
            this.thursdayEarning = this.thursdayEarning + Number(this.earning_details[i].earning);
          }else if(this.earning_details[i].day_name == 'Friday'){
            this.fridayEarning = this.fridayEarning + Number(this.earning_details[i].earning);
          }else if(this.earning_details[i].day_name == 'Saturday'){
            this.saturdayEarning = this.saturdayEarning + Number(this.earning_details[i].earning);
          }
          
          this.barChartData= [
            { data: [this.sundayEarning, this.mondayEarning, this.tuesdayEarning, this.wednesdayEarning, this.thursdayEarning, this.fridayEarning, this.saturdayEarning], label: 'Earning('+this.currency_symbol+')' }
          ];
      }
      console.log(this.sundayEarning);
     }
     
    },err => {
    
    });
  }
  withdrawRequest(){
       this.present();
       var stringy = JSON.stringify({
         "usersID":this.userID,
         "currencyID":this.currencies_id, 
         "requestType" : "get_all_requests"
       });
       console.log(stringy);
      this.restService.withdrawal(stringy).subscribe(response => {
        this.response =  JSON.parse(response['_body']);
        console.log(this.response.status);
        if(this.response.status == 'NotFound'){
           this.presentToast('Oops!something went wrong.');
        }else if(this.response.status == 'Found'){
          this.presentToast('Withdraw request submitted successfully!');
          
        }
        this.dismiss();
       },err => {
         this.dismiss();
       });
    
   }
  toggleMenu(){
    this.menuCtrl.toggle();
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position:'top'
    });
    toast.present();
  }
  async present() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await this.loading.present();
  }

  async dismiss() {
      await this.loading.dismiss();
  }
}
