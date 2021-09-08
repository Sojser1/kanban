import {Component, OnInit} from '@angular/core';
import {BoardService, Todo} from "../../../../services/board.service";
import {NewTodo} from "./new-todo/new-todo.component";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

export interface ColOption {
  title: string,
  color: string,
  isActiveBtn: boolean
}

export interface OptionColumn {
  toDo: ColOption,
  inWork: ColOption,
  verified: ColOption,
  finished: ColOption,
}


@Component({
  selector: 'app-board-body',
  templateUrl: './board-body.component.html',
  styleUrls: ['./board-body.component.scss']
})
export class BoardBodyComponent implements OnInit {
   option: OptionColumn = {
    toDo: {
      title: 'to do',
      color: '#ea7749',
      isActiveBtn: true
    },
    inWork: {
      title: 'on work',
      color: '#f0cc56',
      isActiveBtn: false
    },
    finished: {
      title: 'finished',
      color: '#4390ba',
      isActiveBtn: false
    },
    verified: {
      title: 'verified',
      color: '#5cc474',
      isActiveBtn: false
    }

  }

  constructor(
    public BoardService: BoardService
  ){
  }

  isActiveAdd: boolean = false
  todos!: Todo[]
  inWork!: Todo[]
  finished!: Todo[]
  verified!: Todo[]


  deleteTodo(id:number){
    const idx:number = this.todos.findIndex(item =>{
      return item.id === id
    })

    this.todos.splice(idx, 1)

    this.updateBoard()

  }

  createNewTodoObject(newTodo: NewTodo): Todo {
    this.isActiveAdd = false
    return {
      id: Date.now(),
      title: newTodo.title,
      dateCreate: Date.now(),
      dateExpire: 0,
      whoCreate: 0,
      whoVerified: 0,
      whoTook: 0
    }
  }

  addNewTodo(todo:NewTodo){
    if(this.todos){
      this.todos.push(this.createNewTodoObject(todo))
    }
    this.updateBoard()
  }

  updateBoard(){
    this.BoardService.obsBoard.next(this.BoardService.board)
  }

  drop(event: CdkDragDrop<Todo[]>, list: Todo[]){
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }else{
      moveItemInArray(list, event.previousIndex, event.currentIndex)
    }
    this.updateBoard()
  }




  ngOnInit(): void {
    this.todos = this.BoardService.board.list.toDo
    this.inWork = this.BoardService.board.list.inWork
    this.finished = this.BoardService.board.list.finished
    this.verified = this.BoardService.board.list.verified

    this.BoardService.obsBoard.subscribe(()=>{
      this.BoardService.updateBoard().subscribe(()=>{})
    })
  }

}
