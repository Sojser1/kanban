import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColOption} from "../board-body.component";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {


  @Input()todo!:any
  @Input()option!: ColOption

  @Output() openPopup: EventEmitter<number> = new EventEmitter<number>()

  isFullTaskColor:boolean = false

  fullColorTaskMark: Object = {
    red: 'новая хуйня',
    green: '',
    blue: '',
    white: '2',
    yellow: '3',
}

  constructor() { }

  openDialog(){
    this.openPopup.emit(this.todo.id)
  }

  ngOnInit(): void {
  }

}
