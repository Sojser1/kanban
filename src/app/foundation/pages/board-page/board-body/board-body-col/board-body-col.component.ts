import {Component, Input, OnInit} from '@angular/core';
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

  @Input() color!: string
  @Input() title!: string

  constructor() { }

  ngOnInit(): void {
  }

}
