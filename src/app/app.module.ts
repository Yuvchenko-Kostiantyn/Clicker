import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamePageComponent } from './name-page/name-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GameComponent } from './game/game.component';
import { FormsModule } from '@angular/forms';
import { LeftComponent } from './game/left/left.component';
import { RightComponent } from './game/right/right.component';
import { RecordsTableComponent } from './records-table/records-table.component';
import { TableComponent } from './records-table/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NamePageComponent,
    NotFoundComponent,
    GameComponent,
    LeftComponent,
    RightComponent,
    RecordsTableComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
