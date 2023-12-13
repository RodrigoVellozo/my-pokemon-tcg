import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxAvatarModule,
  IgxBadgeModule,
  IgxGridModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxProgressBarModule,
  IgxSwitchModule
} from 'igniteui-angular';
import { IgxSparklineCoreModule, IgxSparklineModule } from 'igniteui-angular-charts';
import { AwesomeGridComponent } from './awesome-grid.component';

describe('AwesomeGridComponent', () => {
  let component: AwesomeGridComponent;
  let fixture: ComponentFixture<AwesomeGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AwesomeGridComponent],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        IgxGridModule,
        IgxProgressBarModule,
        IgxAvatarModule,
        IgxBadgeModule,
        IgxIconModule,
        IgxSwitchModule,
        IgxInputGroupModule,
        IgxSparklineModule,
        IgxSparklineCoreModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
