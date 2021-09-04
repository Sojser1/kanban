import {Component, DoCheck, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {BoardService, Board} from "../../../services/board.service";
import {ActivatedRoute, Params} from "@angular/router";



@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit, DoCheck, OnChanges, OnDestroy {
  constructor(public BoardService:BoardService, private route:ActivatedRoute) { }


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

  updateBoard(list:any) {
    this.isLoading = true
    this.board.list = list
    console.log(this.board)
    this.isLoading = false
    // this.BoardService.updateBoard(this.board)
    //   .subscribe(res => {
    //     console.log(res)
    //     this.isLoading = false
    //   }, error => console.log(error))
  }


  ngOnInit(): void {
    this.fetchBoard()
  }

  ngOnDestroy(): void {
  }

  ngDoCheck(): void {
    console.log('do check')
  }

  ngOnChanges(s:any):void {
    console.log('changes')
  }



}

