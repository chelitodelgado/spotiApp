import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

    info: any = {};
    topTracks: any[] = [];
    loading: boolean;

    constructor(
        private router: ActivatedRoute,
        private spotify: SpotifyService
    ) {
        this.router.params.subscribe( params => {
            this.getArtista( params['id']);
            this.getTopTrack( params['id']);
        });
    }

    getArtista( id: string ) {
        this.loading = true;
        setTimeout( () => {
            this.spotify.getArtista( id )
            .subscribe( artista => {
                console.log(artista);
                this.info = artista;
                this.loading = false;
            });
        },1000);
    }

    getTopTrack( id: string ){
        this.spotify.getTopTrack( id )
        .subscribe( topTracks => {
          console.log(topTracks);
          this.topTracks = topTracks;
        });
    }
}
