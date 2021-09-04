import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NewTodo} from "./new-todo/new-todo.component";
import {ColOption} from "../board-body.component";
import {BoardService} from "../../../../../services/board.service";

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

  constructor(public BoardService: BoardService) { }


  @Input() option!: ColOption
  @Input() list!: Todo[]

  @Output() listUpdated: EventEmitter<null> = new EventEmitter<null>()


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
    this.listUpdated.emit()
  }


  delTodo(id: number){
    const idx:number = this.list.findIndex(item =>{
      return item.id === id
    })

    this.list.splice(idx, 1)

    this.listUpdated.emit()
  }


  ngOnInit(): void {
  }

}
