import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
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
import { CreateDeckComponent } from './components/create-deck/create-deck.component';
import { UpdateDeckComponent } from './components/update-deck/update-deck.component';
import { InMemoryDataService } from './core/services/in-memory-data.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateDeckComponent,
    UpdateDeckComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HammerModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

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
    CdkDropList,
    CdkDrag,
    IgxToastModule,
    IgxSnackbarModule
  ],
  providers: [IgxExcelExporterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
