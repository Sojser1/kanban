import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-body-col',
  templateUrl: './board-body-col.component.html',
  styleUrls: ['./board-body-col.component.scss']
})
export class BoardBodyColComponent implements OnInit {

  @Input() color!: string

  constructor() { }

  ngOnInit(): void {
  }

}
