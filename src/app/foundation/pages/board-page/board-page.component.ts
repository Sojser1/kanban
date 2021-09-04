import {Component, DoCheck, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {BoardService, Board} from "../../../services/board.service";
import {ActivatedRoute, Params} from "@angular/router";
import {BehaviorSubject} from "rxjs";



@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {
  constructor(public BoardService:BoardService, private route:ActivatedRoute) {
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

  subject: BehaviorSubject<Board | null> = new BehaviorSubject<Board | null>(this.board)


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

  lookingBoard(list:any) {
    // this.BoardService.observeBoard(list)
  }

  updateList(){
    this.BoardService.updateBoard(this.board)
      .subscribe(res => {
        console.log('updated')
      })
  }

  ngOnInit(): void {
    this.fetchBoard()

 }

}

