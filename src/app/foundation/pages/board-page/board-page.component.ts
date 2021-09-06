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

  board: Board = {
    id: 0,
    title: '',
    list: {
      toDo: [],
      inWork: [],
      finished: [],
      verified: [],
    },
    adminsId: [],
    usersId: []
  }


  fetchBoard() {
    this.isLoading = true
    this.route.params.subscribe((params:Params) =>{
      this.BoardService.getBoard(params.id)
        .subscribe(res => {
          this.board = res.board
          this.isLoading = false
        }, error => console.log(error))
    })
  }

  updateList(){
    this.BoardService.updateBoard(this.board)
      .subscribe(res => {
      }, error => console.log(error))

  }



  ngOnInit(): void {
    this.fetchBoard()

 }

}

