import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherBookingListPage } from './other-booking-list.page';

describe('OtherBookingListPage', () => {
  let component: OtherBookingListPage;
  let fixture: ComponentFixture<OtherBookingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherBookingListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherBookingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
