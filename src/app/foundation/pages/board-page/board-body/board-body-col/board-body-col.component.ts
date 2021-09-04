import {Component, Input, OnInit} from '@angular/core';
import {NewTodo} from "./new-todo/new-todo.component";
import {ColOption} from "../board-body.component";

interface Todo {
  id: number,
  title: string,
  dateCreate: number,
  dateExpire: number,
  whoCreate: number,
  whoVerified: number,
  whoTook: number
}

@Component({
  selector: 'app-board-body-col',
  templateUrl: './board-body-col.component.html',
  styleUrls: ['./board-body-col.component.scss']
})
export class BoardBodyColComponent implements OnInit {

  @Input() option!: ColOption
  @Input() list!: Todo[]


  isActiveAdd: boolean = false

  createNewTodo(newTodo: NewTodo){
    this.isActiveAdd = false
    const todo: Todo = {
      id: Date.now(),
      title: newTodo.title,
      dateCreate: Date.now(),
      dateExpire: 0,
      whoCreate: 0,
      whoVerified: 0,
      whoTook: 0
    }

    this.updateList(todo)

      }

  updateList(todo: Todo){
    this.list.push(todo)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
