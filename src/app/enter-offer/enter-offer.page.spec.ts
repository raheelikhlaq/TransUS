import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnterOfferPage } from './enter-offer.page';

describe('EnterOfferPage', () => {
  let component: EnterOfferPage;
  let fixture: ComponentFixture<EnterOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterOfferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
