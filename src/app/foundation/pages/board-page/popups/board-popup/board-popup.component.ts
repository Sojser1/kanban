import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Board, BoardService} from "../../../../../services/board.service";

@Component({
  selector: 'app-board-popup',
  templateUrl: './board-popup.component.html',
  styleUrls: ['./board-popup.component.scss']
})
export class BoardPopupComponent implements OnInit {
  board: Board
  isEditTitle: boolean = false

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public BoardService: BoardService) {
    this.board = data.board
  }

  deleteBoard(){
    console.log('Board deleted')
    console.log(this.board._id)
  }

  closePopup(){

  }

  changeBoardTitle(newTitle: string){
    this.board.title = newTitle
    this.isEditTitle = false
    this.BoardService.updateBoard(this.board)
      .subscribe(res => {
      }, e => console.log(e))
  }

  ngOnInit(): void {
  }

}
