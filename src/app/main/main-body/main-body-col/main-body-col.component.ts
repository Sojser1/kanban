import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-body-col',
  templateUrl: './main-body-col.component.html',
  styleUrls: ['./main-body-col.component.scss']
})
export class MainBodyColComponent implements OnInit {

  @Input() color!: string

  constructor() { }

  ngOnInit(): void {
  }

}
