import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Todo} from "../../../../services/board.service";

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


  @Input() list!: { toDo: Todo[], inWork: Todo[], finished: Todo[], verified: Todo[] }

  @Output() updateList: EventEmitter<null> = new EventEmitter<null>()


  listUpdated() {
    this.updateList.emit()
  }


  constructor() {
  }


  ngOnInit(): void {
  }

}
