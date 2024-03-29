import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { IgxAvatarModule, IgxBadgeModule, IgxButtonGroupModule, IgxButtonModule, IgxCardModule, IgxChipsModule, IgxDialogModule, IgxDragDropModule, IgxExcelExporterService, IgxFocusModule, IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxLayoutModule, IgxListModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxProgressBarModule, IgxRippleModule, IgxSelectModule, IgxSliderModule, IgxSnackbarModule, IgxSwitchModule, IgxToastModule, IgxToggleModule } from 'igniteui-angular';
import { IgxCategoryChartModule, IgxSparklineCoreModule, IgxSparklineModule } from 'igniteui-angular-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckModule } from './components/deck/deck.module';
import { InMemoryDataService } from './core/services/in-memory-data.service';
import { HomeComponent } from './home/home.component';
import { ErrorMessageContentComponent } from './shared/ui/error-message-content/error-message-content.component';
import { LoadingComponent } from './shared/ui/loading/loading.component';
import { SearchComponent } from './shared/ui/search/search.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HammerModule,
    AppRoutingModule,
    HttpClientModule,

    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),

    StoreModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({}),

    DeckModule,
    SearchComponent,
    LoadingComponent,
    ErrorMessageContentComponent,

    IgxLayoutModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    IgxGridModule,
    IgxProgressBarModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxBadgeModule,
    IgxSwitchModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxSparklineModule,
    IgxSparklineCoreModule,
    IgxCategoryChartModule,
    IgxButtonGroupModule,
    IgxDialogModule,
    IgxFocusModule,
    IgxSelectModule,
    IgxSliderModule,
    IgxToggleModule,
    IgxCardModule,
    IgxDragDropModule,
    IgxChipsModule,
    IgxListModule,
    
    IgxToastModule,
    IgxSnackbarModule
  ],
  providers: [IgxExcelExporterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
