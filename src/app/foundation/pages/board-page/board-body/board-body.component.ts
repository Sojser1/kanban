import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Todo} from "../../../../services/board.service";
import {NewTodo} from "./new-todo/new-todo.component";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {TodoPopupComponent} from "../popups/todo-popup/todo-popup.component";
import {MatDialog} from "@angular/material/dialog";

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
    private dialogRef: MatDialog,
  ){
  }


  @Input() list!: { toDo: Todo[], inWork: Todo[], finished: Todo[], verified: Todo[] }

  @Output() updateList: EventEmitter<null> = new EventEmitter<null>()

  isActiveAdd: boolean = false
  todos: Todo[] = []
  inWork: Todo[] = []
  finished: Todo[] = []
  verified: Todo[] = []


  deleteTodo(id:number){
    const idx:number = this.todos.findIndex(item =>{
      return item.id === id
    })

    this.todos.splice(idx, 1)

    this.updateList.emit()
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
    this.todos.push(this.createNewTodoObject(todo))
    this.updateList.emit()
  }

  drop(event: CdkDragDrop<Todo[]>, list: Todo[]){
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }else{
      moveItemInArray(list, event.previousIndex, event.currentIndex)
    }
    this.updateList.emit()
  }

  openDialog(todo: Todo){
    this.dialogRef.open(TodoPopupComponent, {
      data: {
        todo
      }
    })
  }





  ngOnInit(): void {
    this.todos = this.list.toDo
    this.inWork = this.list.inWork
    this.finished = this.list.finished
    this.verified = this.list.verified
  }

}
