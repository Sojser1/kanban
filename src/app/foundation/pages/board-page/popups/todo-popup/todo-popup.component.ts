import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {BoardService, Todo} from "../../../../../services/board.service";

@Component({
  selector: 'app-todo-popup',
  templateUrl: './todo-popup.component.html',
  styleUrls: ['./todo-popup.component.scss']
})
export class TodoPopupComponent implements OnInit, OnDestroy {

  todo: Todo;
  textareaValue: any = '';
  datePickerValue:any = ''

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public BoardService: BoardService,
              ) {
    this.todo = data.todo
    this.textareaValue =  this.todo.title
  }


  saveSettings(){
    this.todo.title = this.textareaValue
    if(this.datePickerValue){
      this.todo.dateExpire = new Date(this.datePickerValue).valueOf()
    }
    this.BoardService.obsBoard.next(this.BoardService.board)
  }

  deleteTodo(){
    this.BoardService.deleteTodo(this.todo.id)
  }


  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

}
