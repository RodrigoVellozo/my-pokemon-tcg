import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AwesomeGridComponent } from './awesome-grid/awesome-grid.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { CreateDeckComponent } from './components/create-deck/create-deck.component';
import { UpdateDeckComponent } from './components/update-deck/update-deck.component';
import { ExpGridComponent } from './components/exp-grid/exp-grid.component';
import { ExpKanbanComponent } from './components/exp-kanban/exp-kanban.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  
  { path: 'create-deck', component: CreateDeckComponent, data: { text: 'Create a deck' } },
  { path: 'update-deck/:id', component: UpdateDeckComponent, data: { text: 'Update a deck' } },

  // TODO - remover rotas de teste
  { path: 'grid', component: ExpGridComponent, data: { text: 'grid <remover>' } },
  { path: 'kanban', component: ExpKanbanComponent, data: { text: 'kanban <remover>' } },

  
  { path: 'awesome-grid', component: AwesomeGridComponent, data: { text: '<remover>' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
