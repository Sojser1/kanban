import { Component, OnInit } from '@angular/core';
import {BoardService, Board} from "../../../services/board.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {

  board: Board = {
    title: '',
    list: {
      stCol: [],
      ndCol: [],
      rdCol: [],
      thCol: [],
    },
    adminsId: [],
    usersId: []
  }

  constructor(public BoardService:BoardService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
      this.BoardService.getBoard(params.id)
      .subscribe(res => {
        this.board = res.board
      }, error => console.log(error))
    })
  }

}
