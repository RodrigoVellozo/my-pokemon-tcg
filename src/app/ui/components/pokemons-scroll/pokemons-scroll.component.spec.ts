import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsScrollComponent } from './pokemons-scroll.component';

describe('PokemonsScrollComponent', () => {
  let component: PokemonsScrollComponent;
  let fixture: ComponentFixture<PokemonsScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonsScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonsScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
