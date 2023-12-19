import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CreateDeckComponent } from './components/create-deck/create-deck.component';
import { UpdateDeckComponent } from './components/update-deck/update-deck.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { DeckManagementFormComponent } from './components/deck-management-form/deck-management-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  
  { path: 'create-deck', component: CreateDeckComponent, data: { text: 'Create a deck' } },
  { path: 'management-form', component: DeckManagementFormComponent, data: { text: 'testLoading' } },
  { path: 'update-deck/:id', component: UpdateDeckComponent},
  
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
