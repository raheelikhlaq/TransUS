import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditListYourCarPage } from './edit-list-your-car.page';

describe('EditListYourCarPage', () => {
  let component: EditListYourCarPage;
  let fixture: ComponentFixture<EditListYourCarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditListYourCarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditListYourCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
