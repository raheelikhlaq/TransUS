import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyNewCodePage } from './verify-new-code.page';

describe('VerifyNewCodePage', () => {
  let component: VerifyNewCodePage;
  let fixture: ComponentFixture<VerifyNewCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyNewCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyNewCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
