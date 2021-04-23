import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactSupportPage } from './contact-support.page';

describe('ContactSupportPage', () => {
  let component: ContactSupportPage;
  let fixture: ComponentFixture<ContactSupportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSupportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
