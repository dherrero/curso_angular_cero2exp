import { Component } from '@angular/core';
import { citaI } from './body.utils';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  mostrarCita: boolean = true;

  cita: citaI = {
    autor: 'Linus Torvalds',
    mensaje: 'Talk is cheap. Show me the code.'
  }

  personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus']

  constructor() {
  }


}
