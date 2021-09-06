import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {BoardPopupComponent} from "../popups/board-popup/board-popup.component";
import {Board} from "../../../../services/board.service";

@Component({
  selector: 'app-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.scss']
})
export class BoardHeaderComponent implements OnInit {
  @Input() board!: Board

  constructor(private dialogRef: MatDialog) { }

  openSettingPopup(){
    this.dialogRef.open(BoardPopupComponent,{
      data:{
        board: this.board,
      },
      panelClass: 'board-popup',

    })
  }

  ngOnInit(): void {

  }

}
