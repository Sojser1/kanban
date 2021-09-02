import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todo: string = 'title cheto tam'
  constructor() { }

  ngOnInit(): void {
  }

}
