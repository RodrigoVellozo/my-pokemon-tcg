import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckManagementFormComponent } from './deck-management-form.component';

describe('DeckManagementFormComponent', () => {
  let component: DeckManagementFormComponent;
  let fixture: ComponentFixture<DeckManagementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckManagementFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeckManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
