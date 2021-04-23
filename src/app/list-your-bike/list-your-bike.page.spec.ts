import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListYourBikePage } from './list-your-bike.page';

describe('ListYourBikePage', () => {
  let component: ListYourBikePage;
  let fixture: ComponentFixture<ListYourBikePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListYourBikePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListYourBikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
