import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
    constructor(private http: HttpClient) {
        console.log('Spotify Service Listo');
    }

    getQuery(query: string) {
        const url = `https://api.spotify.com/v1/${query}`;
        const headers = new HttpHeaders({
            Authorization:
            'Bearer BQAvJl7V8sE4Gbl7d3sm3qQL-j95KM7tyiTxMTxg5Ni59OWlzQivla6vsEiTzUC9OiwMaxp4LwVzjopcPyM',
        });

        return this.http.get(url, { headers });
    }

    getNewReleases() {
        return this.getQuery('browse/new-releases?limit=21').pipe(
            map((data) => data['albums'].items)
        );
    }

    getArtistas(termino: string) {
        return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
            map((data) => data['artists'].items)
        );
    }

    getArtista(id: string) {
        return this.getQuery(`artists/${id}`);
    }

    getTopTrack(id: string) {
      return this.getQuery(`artists/${id}/top-tracks?country=MX`)
                 .pipe( map( data => data['tracks']));
  }
}
