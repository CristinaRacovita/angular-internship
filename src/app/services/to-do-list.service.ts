import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoItemDto } from '../models/to-do-item.dto';
import { ToDoListItem } from '../models/to-do-item.model';

@Injectable()
export class ToDoListService {
  private url = 'http://localhost:4200/';
  private api = 'https://random.justyy.workers.dev/api/random'
  public constructor(private http: HttpClient) {}

  public getAllItems(): ToDoListItem[] {
    return [
      new ToDoListItem('Have fun', new Date().toString(), false),
      new ToDoListItem('Angular workshop', new Date().toString(), true),
      new ToDoListItem('Fussball', new Date().toString(), false),
    ];
  }

  public getAllItemsAPI(): Observable<ToDoItemDto[]> {
    return this.http.get<ToDoItemDto[]>(this.url+'TaskController/all');
  }

  public getRadomString(): Observable<string> {
    return this.http.get<string>(this.api);
  }

  public getVehicles(): Observable<any> {
    return this.http.get<any>('https://parallelum.com.br/fipe/api/v1/carros/marcas');
  }
}
