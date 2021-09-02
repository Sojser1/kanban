import { Component, OnInit } from '@angular/core';
import {BoardService} from "../../../../services/board.service";

@Component({
  selector: 'app-board-body',
  templateUrl: './board-body.component.html',
  styleUrls: ['./board-body.component.scss']
})
export class BoardBodyComponent implements OnInit {

  title: string[] = ['on work', 'in progress', 'finished', 'verified']

  constructor() { }
  ngOnInit(): void {
  }

}
