import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyMobileNumberPage } from './verify-mobile-number.page';

describe('VerifyMobileNumberPage', () => {
  let component: VerifyMobileNumberPage;
  let fixture: ComponentFixture<VerifyMobileNumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyMobileNumberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyMobileNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
