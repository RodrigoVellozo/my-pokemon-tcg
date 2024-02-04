import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDeckComponent } from './create-deck/create-deck.component';
import { UpdateDeckComponent } from './update-deck/update-deck.component';
import { IgxButtonModule, IgxChipsModule, IgxIconModule, IgxInputGroupModule, IgxSnackbarModule, IgxTabsModule, IgxToastModule } from 'igniteui-angular';
import { ErrorMessageContentComponent } from 'src/app/shared/ui/error-message-content/error-message-content.component';
import { SearchComponent } from 'src/app/shared/ui/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from 'src/app/shared/ui/loading/loading.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { DeckShellComponent } from './deck-shell/deck-shell.component';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DECK_FEATURE_KEY, deckReducer } from './+state/deck.reducer';
import { DeckEffects } from './+state/deck.effects';

@NgModule({
  declarations: [
    CreateDeckComponent, 
    UpdateDeckComponent, 
    DeckShellComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    StoreModule.forFeature(DECK_FEATURE_KEY, deckReducer),
    EffectsModule.forFeature([DeckEffects]),

    ErrorMessageContentComponent,
    SearchComponent,
    LoadingComponent,
    
    CdkDropList,
    CdkDrag,
    InfiniteScrollModule,

    IgxIconModule,
    IgxToastModule,
    IgxChipsModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxToastModule,
    IgxSnackbarModule,
    IgxTabsModule

  ],
  exports: [CreateDeckComponent, UpdateDeckComponent],
})
export class DeckModule {}
