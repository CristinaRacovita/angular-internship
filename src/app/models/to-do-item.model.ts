export class ToDoListItem{
  public name: string;
  public date: string;
  public isChecked: boolean;

  public constructor(name: string, date: string, isChecked: boolean){
    this.date = date;
    this.name = name;
    this.isChecked = isChecked;
  }
}
