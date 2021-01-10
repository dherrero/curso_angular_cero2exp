import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) {

  }

  ngOnInit(): void {
    this.spotifyService.getNewReleases();
  }

}
