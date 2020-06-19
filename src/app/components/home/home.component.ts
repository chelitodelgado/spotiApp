import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensjaError:string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;

    setTimeout(() => {
      this.loading = false;
      this.spotify.getNewReleases().subscribe((data: any) => {
        this.nuevasCanciones = data;
      }, (errorServicio) => {
        this.error = true;
        console.log(errorServicio.error.error.message);
        this.mensjaError = errorServicio.error.error.message;
      });
    }, 1500);
  }
}
