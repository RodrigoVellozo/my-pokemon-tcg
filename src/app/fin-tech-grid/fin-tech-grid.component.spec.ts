import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FinTechGridComponent } from './fin-tech-grid.component';
import { IgxGridModule, IgxButtonModule, IgxSwitchModule, IgxSliderModule, IgxCheckboxModule, IgxDialogModule } from 'igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';

describe('FinTechGridComponent', () => {
  let component: FinTechGridComponent;
  let fixture: ComponentFixture<FinTechGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FinTechGridComponent ],
      imports: [ FormsModule, BrowserAnimationsModule,
        IgxGridModule, IgxDialogModule, IgxCategoryChartModule,
        IgxButtonModule, IgxSwitchModule, IgxSliderModule, IgxCheckboxModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinTechGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
