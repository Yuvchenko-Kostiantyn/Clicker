import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { NamePageComponent } from './name-page/name-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecordsTableComponent } from './records-table/records-table.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: NamePageComponent},
  {path: 'game', component: GameComponent},
  {path: 'score', component: RecordsTableComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
