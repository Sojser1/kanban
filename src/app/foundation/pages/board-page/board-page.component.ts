import { Component, OnInit } from '@angular/core';
import {BoardService} from "../../../services/board.service";

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {

  constructor(public BoardService:BoardService) { }

  ngOnInit(): void {
  }

}
