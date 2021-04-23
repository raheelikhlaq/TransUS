import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlutterWavesPage } from './flutter-waves.page';

describe('FlutterWavesPage', () => {
  let component: FlutterWavesPage;
  let fixture: ComponentFixture<FlutterWavesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlutterWavesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlutterWavesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
