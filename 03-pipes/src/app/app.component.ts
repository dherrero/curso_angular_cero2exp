import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan America';
  nombre2: string = 'daniel herrero';
  array: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  sueldo: number = 1234;
  heroe: any = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'c/ some street',
      ciudad: 'Some City'
    }
  };
  promesa: Promise<string> = new Promise<string>(resolve => setTimeout(() => resolve('hola promesa'), 2000));
  fecha: Date = new Date();
  idioma: string = 'es';
  videoUrl: string = 'https://www.youtube.com/embed/TOUsH1A8YL0';
  activar: boolean = true;

  cambiarIdioma(lang: string) {
    this.idioma = lang;
  }
  switchActivar() {
    this.activar = !this.activar;
  }
}
