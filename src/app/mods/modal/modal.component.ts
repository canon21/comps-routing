import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() closeModal = new EventEmitter();

  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement);
   }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() : void {
    //document.body.removeChild(this.el.nativeElement);
    this.el.nativeElement.remove();
  }
  
  onCloseClick(){
    this.closeModal.emit();
  }
}
