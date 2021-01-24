import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective {
  @Input('appResaltado')
  nuevoColor: string | undefined;

  constructor(private el: ElementRef) {
    console.log('mi directiva');
  }

  @HostListener('mouseenter') goIn() {
    this.resaltar(this.nuevoColor || 'green');
  }

  @HostListener('mouseleave') goOut() {
    this.resaltar('');
  }

  private resaltar(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
