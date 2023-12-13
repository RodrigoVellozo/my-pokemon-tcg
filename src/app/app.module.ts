import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxLayoutModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxRippleModule, IgxGridModule, IgxProgressBarModule, IgxIconModule, IgxAvatarModule, IgxBadgeModule, IgxSwitchModule, IgxInputGroupModule, IgxButtonModule, IgxExcelExporterService, IgxButtonGroupModule, IgxDialogModule, IgxFocusModule, IgxSelectModule, IgxSliderModule, IgxToggleModule } from 'igniteui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AwesomeGridComponent } from './awesome-grid/awesome-grid.component';
import { IgxSparklineModule, IgxSparklineCoreModule, IgxCategoryChartModule } from 'igniteui-angular-charts';
import { FinTechGridComponent } from './fin-tech-grid/fin-tech-grid.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AwesomeGridComponent,
    FinTechGridComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HammerModule,
    AppRoutingModule,
    HttpClientModule,

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
    IgxToggleModule
  ],
  providers: [IgxExcelExporterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
