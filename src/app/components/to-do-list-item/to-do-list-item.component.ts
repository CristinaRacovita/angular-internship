import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoListItem } from 'src/app/models/to-do-item.model';
import { ToDoListService } from 'src/app/services/to-do-list.service';

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss'],
})
export class ToDoListItemComponent implements OnInit {
  @Input() item: ToDoListItem = new ToDoListItem('', '', false);
  @Output() checkEvent = new EventEmitter<ToDoListItem>();

  constructor(private todoListService: ToDoListService) {

  }

  ngOnInit(): void {
    this.todoListService.getVehicles().subscribe((response) => this.item.name = response[0].nome);
  }

  public clickItem(): void {
    console.log("Click item");
    this.checkEvent.emit(this.item);
  }
}
