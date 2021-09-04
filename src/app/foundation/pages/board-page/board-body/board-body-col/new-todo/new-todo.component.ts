import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export interface NewTodo {
  title: string
}

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  constructor() { }

  @Output() addNewTodo: EventEmitter<NewTodo> = new EventEmitter<NewTodo>()

  newTodo: NewTodo = {
    title: ''
}


  createTodo(title:string):void{
      if(!title.trim()){
        return //написать ошибку или валидатор
      }
      this.newTodo.title = title
      this.addNewTodo.emit(this.newTodo)
  }


  ngOnInit(): void {
  }

}
