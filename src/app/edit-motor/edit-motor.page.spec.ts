import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditMotorPage } from './edit-motor.page';

describe('EditMotorPage', () => {
  let component: EditMotorPage;
  let fixture: ComponentFixture<EditMotorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMotorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditMotorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
