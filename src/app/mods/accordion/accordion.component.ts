import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() items = [];
  openedItemIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(indexClicked: number) {
    if (indexClicked === this.openedItemIndex) {
      this.openedItemIndex = -1;
    }
    else {
      this.openedItemIndex = indexClicked;
    }
  }
}
