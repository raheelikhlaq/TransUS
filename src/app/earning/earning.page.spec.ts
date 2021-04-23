import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EarningPage } from './earning.page';

describe('EarningPage', () => {
  let component: EarningPage;
  let fixture: ComponentFixture<EarningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EarningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
