import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageContentComponent } from './error-message-content.component';

describe('ErrorMessageContentComponent', () => {
  let component: ErrorMessageContentComponent;
  let fixture: ComponentFixture<ErrorMessageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorMessageContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorMessageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
