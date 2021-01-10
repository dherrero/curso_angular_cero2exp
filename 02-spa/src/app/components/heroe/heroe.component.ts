import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/types/heroes.types';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  public heroe: Heroe | undefined;

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.setHeroe(params['id']);
    })
  }

  async setHeroe(id: number): Promise<void> {
    this.heroe = await this._heroesService.getHeroe(id);
  }

}
