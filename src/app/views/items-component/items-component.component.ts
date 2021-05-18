import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-items-component',
  templateUrl: './items-component.component.html',
  styleUrls: ['./items-component.component.css']
})
export class ItemsComponentComponent implements OnInit {

  @Input() data = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
