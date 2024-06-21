import { Component, input } from '@angular/core';
import { PlayButtonComponent } from '../play-button/play-button.component';
import { PureInlineArtistsComponent } from '../pure-inline-artists/pure-inline-artists.component';
import { Playlist } from '../../services/data/data.service';
import { TransitionDirective } from '../../directives/transition.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'playlist-card',
  standalone: true,
  templateUrl: './playlist-card.component.html',
  styleUrl: './playlist-card.component.scss',
  imports: [PlayButtonComponent, PureInlineArtistsComponent, TransitionDirective, RouterLink],
})
export class PlaylistCardComponent {
  playlist = input.required<Playlist>();
}
