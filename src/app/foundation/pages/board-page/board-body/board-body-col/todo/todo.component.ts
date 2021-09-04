import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../../../../../services/board.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {


  @Input()todo!: Todo

  @Output() delTodo: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  deleteTodo(){
    this.delTodo.emit(this.todo.id)
  }

  ngOnInit(): void {
  }

}
