import { Component, DestroyRef, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { IgxIconModule, IgxInputGroupModule } from 'igniteui-angular';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    IgxIconModule,
    IgxInputGroupModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  readonly searchForm = new FormControl();

  initialString: string ='';
  @Output() searchEvent = new EventEmitter<string>();

  constructor(private readonly _destroyRef: DestroyRef) {}

  ngOnInit(): void {
    this.searchForm.setValue(this.initialString);
    this.listenToSearch();
  }

  private emitSearchEvent(search: string): void {
    this.searchEvent.emit(search);
  }

  private listenToSearch(): void {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(600), 
        distinctUntilChanged(),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe({
        next: (search: any) => {
          this.emitSearchEvent(search);
        },
      });
  }
}

