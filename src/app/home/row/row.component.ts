import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  @Input() image
  @Input() video
  @Input() reverse

  constructor() { }

  ngOnInit(): void {
  }

}
