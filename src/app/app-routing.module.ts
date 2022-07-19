import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { NewPageComponent } from './components/new-page/new-page.component';
import { ToDoListItem } from './models/to-do-item.model';

const routes: Routes = [
  {path: 'hero', component: NewPageComponent},
  {path: '', component: FirstPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
