import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotoviewerPage } from './photoviewer.page';

describe('PhotoviewerPage', () => {
  let component: PhotoviewerPage;
  let fixture: ComponentFixture<PhotoviewerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoviewerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoviewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
