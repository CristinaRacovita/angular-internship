import { Component, OnInit } from '@angular/core';
import { ToDoItemDto } from 'src/app/models/to-do-item.dto';
import { ToDoListItem } from 'src/app/models/to-do-item.model';
import { ToDoListService } from 'src/app/services/to-do-list.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  public title: string = 'To do list';
  public items: ToDoListItem[] = [];
  //   new ToDoListItem('Have fun', new Date().toString(), false),
  //   new ToDoListItem('Angular workshop', new Date().toString(), true),
  //   new ToDoListItem('Fussball', new Date().toString(), false)
  // ]
  public toDoItem = new ToDoListItem('Have fun', new Date().toString(), false);
  public isChecked = true;

  public constructor(private todoListService: ToDoListService){
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('On Init');
    this.items = this.todoListService.getAllItems();
    this.todoListService.getAllItemsAPI().subscribe((items: ToDoItemDto[]) => console.log(items));
  }

  ngAfterViewInit(): void {
    console.log('After View Init');
  }

  public deleteItem(item: ToDoListItem): void{
    console.log('Delete ', item.name);
  }

  public click(): void{
    console.log('Click parent');
  }

  public isItemChecked(item: ToDoListItem): boolean {
    return item.isChecked;
  }

  ngOnDestroy(): void {
    console.log('On Destroy');
  }

}
