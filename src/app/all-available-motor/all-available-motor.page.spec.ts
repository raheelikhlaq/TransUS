import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllAvailableMotorPage } from './all-available-motor.page';

describe('AllAvailableMotorPage', () => {
  let component: AllAvailableMotorPage;
  let fixture: ComponentFixture<AllAvailableMotorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAvailableMotorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllAvailableMotorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
