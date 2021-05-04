import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'filters',
    loadChildren: () => import('./filters/filters.module').then( m => m.FiltersPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'car-detail',
    loadChildren: () => import('./car-detail/car-detail.module').then( m => m.CarDetailPageModule)
  },
  {
    path: 'further-detail',
    loadChildren: () => import('./further-detail/further-detail.module').then( m => m.FurtherDetailPageModule)
  },
  {
    path: 'list-your-bike',
    loadChildren: () => import('./list-your-bike/list-your-bike.module').then( m => m.ListYourBikePageModule)
  },
  {
    path: 'list-your-car',
    loadChildren: () => import('./list-your-car/list-your-car.module').then( m => m.ListYourCarPageModule)
  },
  {
    path: 'all-available-motor',
    loadChildren: () => import('./all-available-motor/all-available-motor.module').then( m => m.AllAvailableMotorPageModule)
  },
  {
    path: 'view-all-notifications',
    loadChildren: () => import('./view-all-notifications/view-all-notifications.module').then( m => m.ViewAllNotificationsPageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./favorite/favorite.module').then( m => m.FavoritePageModule)
  },
  {
    path: 'view-bike-detail',
    loadChildren: () => import('./view-bike-detail/view-bike-detail.module').then( m => m.ViewBikeDetailPageModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule)
  },
  {
    path: 'booking-list',
    loadChildren: () => import('./booking-list/booking-list.module').then( m => m.BookingListPageModule)
  },
  {
    path: 'car-booking',
    loadChildren: () => import('./car-booking/car-booking.module').then( m => m.CarBookingPageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./summary/summary.module').then( m => m.SummaryPageModule)
  },
  {
    path: 'listed-car',
    loadChildren: () => import('./listed-car/listed-car.module').then( m => m.ListedCarPageModule)
  },
  {
    path: 'listed-motor',
    loadChildren: () => import('./listed-motor/listed-motor.module').then( m => m.ListedMotorPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'contact-support',
    loadChildren: () => import('./contact-support/contact-support.module').then( m => m.ContactSupportPageModule)
  },
  {
    path: 'payment-detail',
    loadChildren: () => import('./payment-detail/payment-detail.module').then( m => m.PaymentDetailPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'chat-list',
    loadChildren: () => import('./chat-list/chat-list.module').then( m => m.ChatListPageModule)
  },
  {
    path: 'earning',
    loadChildren: () => import('./earning/earning.module').then( m => m.EarningPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'verify-mobile-number',
    loadChildren: () => import('./verify-mobile-number/verify-mobile-number.module').then( m => m.VerifyMobileNumberPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'other-booking-list',
    loadChildren: () => import('./other-booking-list/other-booking-list.module').then( m => m.OtherBookingListPageModule)
  },
  {
    path: 'car-list',
    loadChildren: () => import('./car-list/car-list.module').then( m => m.CarListPageModule)
  },
  {
    path: 'give-rating',
    loadChildren: () => import('./give-rating/give-rating.module').then( m => m.GiveRatingPageModule)
  },
  {
    path: 'chat-detail',
    loadChildren: () => import('./chat-detail/chat-detail.module').then( m => m.ChatDetailPageModule)
  },
  {
    path: 'action-booking',
    loadChildren: () => import('./action-booking/action-booking.module').then( m => m.ActionBookingPageModule)
  },
  {
    path: 'edit-list-your-car',
    loadChildren: () => import('./edit-list-your-car/edit-list-your-car.module').then( m => m.EditListYourCarPageModule)
  },
  {
    path: 'edit-motor',
    loadChildren: () => import('./edit-motor/edit-motor.module').then( m => m.EditMotorPageModule)
  },
  {
    path: 'enter-offer',
    loadChildren: () => import('./enter-offer/enter-offer.module').then( m => m.EnterOfferPageModule)
  },
  {
    path: 'accept-offer',
    loadChildren: () => import('./accept-offer/accept-offer.module').then( m => m.AcceptOfferPageModule)
  },
  {
    path: 'photoviewer',
    loadChildren: () => import('./photoviewer/photoviewer.module').then( m => m.PhotoviewerPageModule)
  },
  // {
  //   path: 'flutter-waves',
  //   loadChildren: () => import('./flutter-waves/flutter-waves.module').then( m => m.FlutterWavesPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
