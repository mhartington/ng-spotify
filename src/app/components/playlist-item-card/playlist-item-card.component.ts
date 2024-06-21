import { Component, input } from '@angular/core';
import type { Playlist } from '../../services/data/data.service';
import { RouterLink } from '@angular/router';
import { TransitionDirective } from '../../directives/transition.directive';
import { PlayButtonComponent } from "../play-button/play-button.component";

@Component({
    selector: 'playlist-item-card',
    standalone: true,
    templateUrl: './playlist-item-card.component.html',
    styleUrl: './playlist-item-card.component.scss',
    imports: [RouterLink, TransitionDirective, PlayButtonComponent]
})
export class PlaylistItemCardComponent {
  playlist = input.required<Playlist>()
}
