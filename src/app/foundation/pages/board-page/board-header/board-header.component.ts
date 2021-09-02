import { Component, OnInit } from '@angular/core';
import {BoardService} from "../../../../services/board.service";

@Component({
  selector: 'app-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.scss']
})
export class BoardHeaderComponent implements OnInit {

  constructor(public BoardService:BoardService) { }

  ngOnInit(): void {
  }

}
