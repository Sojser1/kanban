import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Todo} from "../../../../../services/board.service";

@Component({
  selector: 'app-todo-popup',
  templateUrl: './todo-popup.component.html',
  styleUrls: ['./todo-popup.component.scss']
})
export class TodoPopupComponent implements OnInit {

  todo: Todo;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.todo = data.todo
  }

  ngOnInit(): void {
  }

}
