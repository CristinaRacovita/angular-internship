import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ToDoItemDto } from './models/to-do-item.dto';
import { ToDoListItem } from './models/to-do-item.model';
import { ToDoListService } from './services/to-do-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
