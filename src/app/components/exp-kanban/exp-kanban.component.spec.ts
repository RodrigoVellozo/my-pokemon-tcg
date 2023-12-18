import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpKanbanComponent } from './exp-kanban.component';

describe('ExpKanbanComponent', () => {
  let component: ExpKanbanComponent;
  let fixture: ComponentFixture<ExpKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpKanbanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
