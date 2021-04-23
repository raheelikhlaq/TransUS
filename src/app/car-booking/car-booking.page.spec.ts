import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarBookingPage } from './car-booking.page';

describe('CarBookingPage', () => {
  let component: CarBookingPage;
  let fixture: ComponentFixture<CarBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
