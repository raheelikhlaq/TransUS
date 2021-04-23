import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FurtherDetailPage } from './further-detail.page';

describe('FurtherDetailPage', () => {
  let component: FurtherDetailPage;
  let fixture: ComponentFixture<FurtherDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurtherDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FurtherDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
