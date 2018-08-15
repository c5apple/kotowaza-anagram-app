import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdsenseModule } from 'ng2-adsense';

import { MyAdsenseComponent } from './my-adsense.component';

describe('MyAdsenseComponent', () => {
  let component: MyAdsenseComponent;
  let fixture: ComponentFixture<MyAdsenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyAdsenseComponent],
      imports: [
        AdsenseModule.forRoot({
          adClient: 'ca-pub-4398400415874126',
          adSlot: 2790307344
        })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdsenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
