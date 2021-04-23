import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListedCarPage } from './listed-car.page';

describe('ListedCarPage', () => {
  let component: ListedCarPage;
  let fixture: ComponentFixture<ListedCarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListedCarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListedCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
