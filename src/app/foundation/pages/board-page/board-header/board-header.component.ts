import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.scss']
})
export class BoardHeaderComponent implements OnInit {
  @Input() title!:string
  @Input() users!:number[]
  constructor() { }

  ngOnInit(): void {
  }

}
