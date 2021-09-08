import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {BoardService} from "../../../../../services/board.service";

@Component({
  selector: 'app-board-popup',
  templateUrl: './board-popup.component.html',
  styleUrls: ['./board-popup.component.scss']
})
export class BoardPopupComponent implements OnInit {
  isEditTitle: boolean = false

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public BoardService: BoardService) {
  }

  deleteBoard(){
    console.log('Board deleted')
  }


  changeBoardTitle(newTitle: string){
    this.BoardService.board.title = newTitle
    this.isEditTitle = false
    this.BoardService.updateBoard()
      .subscribe(res => {
      }, e => console.log(e))
  }

  ngOnInit(): void {
  }

}
