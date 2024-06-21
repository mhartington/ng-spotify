import { Component, computed, inject, input } from '@angular/core';
import { TransitionDirective } from '../../directives/transition.directive';
import { DataService, Playlist } from '../../services/data/data.service';
import { JsonPipe } from '@angular/common';
import { DotButtonComponent } from "../../components/dot-button/dot-button.component";
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { InlineArtistsComponent } from "../../components/inline-artists/inline-artists.component";
import { PlayButtonComponent } from "../../components/play-button/play-button.component";
import { LikeButtonComponent } from "../../components/like-button/like-button.component";
import { MusicTableComponent } from "../../components/music-table/music-table.component";

@Component({
    selector: 'app-playlist',
    standalone: true,
    templateUrl: './playlist.component.html',
    styleUrl: './playlist.component.scss',
    imports: [TransitionDirective, JsonPipe, DotButtonComponent, PageHeaderComponent, InlineArtistsComponent, PlayButtonComponent, LikeButtonComponent, MusicTableComponent]
})
export class PlaylistComponent {
  id = input.required<string>();
  data = inject(DataService)
  playlist = computed<Playlist>(() => this.data.getAllPlaylists().find((playlist) => playlist.id === this.id()) as Playlist)
}
