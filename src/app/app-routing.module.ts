import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { AwesomeGridComponent } from './awesome-grid/awesome-grid.component';
import { FinTechGridComponent } from './fin-tech-grid/fin-tech-grid.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'decks', component: AwesomeGridComponent, data: { text: 'Decks' } },
  { path: 'awesome-grid', component: AwesomeGridComponent, data: { text: 'Awesome Grid' } },
  { path: 'fin-tech-grid', component: FinTechGridComponent, data: { text: 'FinTech Grid' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
