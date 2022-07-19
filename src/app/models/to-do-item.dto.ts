export class ToDoItemDto{
  public Name: string;
  public CreatedOn: Date;
  public IsCompleted: boolean;

  public constructor(name: string, date: Date, isChecked: boolean){
    this.CreatedOn = date;
    this.Name = name;
    this.IsCompleted = isChecked;
  }
}
