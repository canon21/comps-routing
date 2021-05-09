import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {

  //Passaggio dei dati dal padre al figlio.
  @Input() header = true; //default true.
  @Input() lines = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
