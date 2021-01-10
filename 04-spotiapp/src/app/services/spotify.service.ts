import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token: string = 'BQCV4oUKsSG73q0NwnVso2Xjf9Vfx8p0_KAJTNtUJ75t18eQUtSJp6-6_cOTM0DQbiFDM5m-9hcoz-1Rhdw';

  constructor(private httpClient: HttpClient) {

  }

  getNewReleases() {

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });

    this.httpClient.get('https://api.spotify.com/v1/browse/new-releases', { headers }).subscribe(
      (res: any) => {
        console.log(res);
      }
    )

  }

}
