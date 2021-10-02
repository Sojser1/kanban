import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {ColOption} from "../board-body.component";
import {TodoPopupComponent} from "../../popups/todo-popup/todo-popup.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {


  @Input() todo!: any
  @Input() option!: ColOption

  @Output() openPopup: EventEmitter<number> = new EventEmitter<number>()


  constructor(private dialogRef: MatDialog,
  ) {
  }

  openDialog(): void {
    this.dialogRef.open(TodoPopupComponent, {
      data: {
        todo: this.todo,
      },
      panelClass: 'todo-popup',
    })
  }

  deadline(): string {
    if (this.todo.dateExpire < Date.now()) {
      return '0д.'
    }
    const date = (this.todo.dateExpire - Date.now()) / 1000 / 60 / 60
    const hours = Math.floor(date % 24)

    if (date > 24) {
      const days = Math.floor(date / 24)
      return `${days}д.`
    }
    return `${hours}ч.`
  }

  classToTimeBlock(): string {
    if (this.todo.dateExpire < Date.now()) {
      return 'red'
    }
    if ((this.todo.dateExpire - this.todo.dateCreate) / 100 * 50 < Date.now()) {
      return 'green'
    } else if ((this.todo.dateExpire - this.todo.dateCreate) / 100 * 50 > Date.now()) {
      return 'yellow'
    } else {
      return 'red'
    }
  }

  hasExpireDate(): boolean {
    return this.todo.dateExpire == 0
  }


  ngOnInit(): void {

  }

}
