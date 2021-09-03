import { Component, OnInit } from '@angular/core';
import {BoardService} from "../../../../services/board.service";

@Component({
  selector: 'app-board-body',
  templateUrl: './board-body.component.html',
  styleUrls: ['./board-body.component.scss']
})
export class BoardBodyComponent implements OnInit {

  title: string[] = ['to do', 'on work', 'finished', 'verified']
  color: string[] = ['#ea7749', '#f0cc56','#4390ba', '#5cc474']

  constructor() { }
  ngOnInit(): void {
  }

}
