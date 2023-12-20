import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDeckComponent } from './create-deck/create-deck.component';
import { UpdateDeckComponent } from './update-deck/update-deck.component';
import { IgxButtonModule, IgxChipsModule, IgxIconModule, IgxInputGroupModule, IgxSnackbarModule, IgxTabsModule, IgxToastModule } from 'igniteui-angular';
import { ErrorMessageContentComponent } from 'src/app/ui/components/error-message-content/error-message-content.component';
import { SearchComponent } from 'src/app/ui/components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from 'src/app/ui/components/loading/loading.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { DeckShellComponent } from './deck-shell/deck-shell.component';
import { RouterModule } from '@angular/router';

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

    ErrorMessageContentComponent,
    SearchComponent,
    LoadingComponent,

    CdkDropList,
    CdkDrag,

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
