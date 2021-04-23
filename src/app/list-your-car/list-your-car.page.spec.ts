import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListYourCarPage } from './list-your-car.page';

describe('ListYourCarPage', () => {
  let component: ListYourCarPage;
  let fixture: ComponentFixture<ListYourCarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListYourCarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListYourCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
