import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListItemComponent } from './components/to-do-list-item/to-do-list-item.component';
import { ToDoListService } from './services/to-do-list.service';
import { HttpClientModule } from '@angular/common/http';
import { NewPageComponent } from './components/new-page/new-page.component';
import { FirstPageComponent } from './components/first-page/first-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListItemComponent,
    NewPageComponent,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ToDoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
