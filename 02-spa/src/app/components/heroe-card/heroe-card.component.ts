import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/types/heroes.types';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: Heroe | undefined;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  seeHeroe() {
    this.heroe && this._router.navigate(['/heroe', this.heroe.id]);
  }
}
