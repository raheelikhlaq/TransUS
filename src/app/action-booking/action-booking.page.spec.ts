import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActionBookingPage } from './action-booking.page';

describe('ActionBookingPage', () => {
  let component: ActionBookingPage;
  let fixture: ComponentFixture<ActionBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
