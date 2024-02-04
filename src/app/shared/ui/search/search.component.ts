import { Component, DestroyRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

import { BrowserModule } from '@angular/platform-browser';
import { IgxIconModule, IgxInputGroupModule } from 'igniteui-angular';

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
export class SearchComponent implements OnInit {

  readonly searchForm = new FormControl();

  initialString: string ='';
  @Output() searchEvent = new EventEmitter<string>();

  @Input() placeholder: string = '';

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

