import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
//custom directive.
export class TimesDirective {

  //ViewContainerRef -> oggetto su cui viene applicata la direttiva.
  //templateRef -> oggetto "interno".
  constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<any>) {
    console.log(viewContainer);
    console.log(template);
  }

  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; ++i) {
      /*{} -> context. Dati passati dall'esterno. Esempio
      {
        index: i
      }

      chi usa questa direttiva può assegnarsi la variabile index.
      */
      this.viewContainer.createEmbeddedView(this.template, {});  
    }
  }

}
