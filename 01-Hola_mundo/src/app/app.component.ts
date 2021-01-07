import { Component } from '@angular/core';
import { PersonI } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: PersonI = {
    firstName: 'Daniel',
    secondName: 'Herrero'
  }
}
