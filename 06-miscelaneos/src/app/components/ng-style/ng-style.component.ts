import { Component, OnInit } from '@angular/core';

enum ButtonAction {
  PlUS,
  MINUS,
}

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{ 'font-size': tamano + 'px' }">
      Hola mundo... esto es una etiqueta
    </p>
    <p [style.fontSize.px]="tamano">Hola mundo... esto es una etiqueta</p>
    <button
      type="button"
      class="btn btn-primary mr-2"
      (click)="cambiarTamano(0)"
    >
      <i class="fa fa-plus"></i>
    </button>
    <button type="button" class="btn btn-primary" (click)="cambiarTamano(1)">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: [],
})
export class NgStyleComponent implements OnInit {
  tamano: number = 30;
  actions = ButtonAction;

  constructor() {}

  ngOnInit(): void {}

  cambiarTamano(action: ButtonAction) {
    if (action === this.actions.PlUS) {
      this.tamano++;
    } else {
      this.tamano--;
    }
  }
}
