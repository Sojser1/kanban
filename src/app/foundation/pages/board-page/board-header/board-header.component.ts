import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {BoardPopupComponent} from "../popups/board-popup/board-popup.component";
import {Board, BoardService} from "../../../../services/board.service";

@Component({
  selector: 'app-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.scss']
})
export class BoardHeaderComponent implements OnInit {

  constructor(
    private dialogRef: MatDialog,
    public BoardService: BoardService
    ) { }

  openSettingPopup(){
    this.dialogRef.open(BoardPopupComponent,{
      data:{
        board: this.BoardService.board,
      },
      panelClass: 'board-popup',
    })
  }

  ngOnInit(): void {

  }

}
