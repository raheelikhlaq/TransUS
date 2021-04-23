import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListedMotorPage } from './listed-motor.page';

describe('ListedMotorPage', () => {
  let component: ListedMotorPage;
  let fixture: ComponentFixture<ListedMotorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListedMotorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListedMotorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
