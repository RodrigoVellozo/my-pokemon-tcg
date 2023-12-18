import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpGridComponent } from './exp-grid.component';

describe('ExpGridComponent', () => {
  let component: ExpGridComponent;
  let fixture: ComponentFixture<ExpGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
