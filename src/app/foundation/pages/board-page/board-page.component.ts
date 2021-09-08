import {Component, OnInit} from '@angular/core';
import {BoardService, Board} from "../../../services/board.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {
  constructor(
    public BoardService:BoardService,
    private route:ActivatedRoute,
    ) {
  }


  hasError: boolean = false
  isLoading: boolean = false

  board!: Board


  fetchBoard() {
    this.isLoading = true
    this.route.params.subscribe((params:Params) =>{
      this.BoardService.getBoard(params.id)
        .subscribe(res => {
          this.BoardService.board = res.board
          this.isLoading = false
        }, error => console.log(error))
    })
  }



  ngOnInit(): void {
    this.board = this.BoardService.board
    this.fetchBoard()

 }

}

