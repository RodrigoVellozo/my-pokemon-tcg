import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckShellComponent } from './deck-shell.component';

describe('DeckShellComponent', () => {
  let component: DeckShellComponent;
  let fixture: ComponentFixture<DeckShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeckShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
