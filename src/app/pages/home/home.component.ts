import { Component, inject, signal } from '@angular/core';
import { TransitionDirective } from '../../directives/transition.directive';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data/data.service';
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { GreetingTitleComponent } from "../../components/greeting-title/greeting-title.component";
import { PlaylistItemCardComponent } from "../../components/playlist-item-card/playlist-item-card.component";
import { PlaylistCardComponent } from "../../components/playlist-card/playlist-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [TransitionDirective, RouterLink, PageHeaderComponent, GreetingTitleComponent, PlaylistItemCardComponent, PlaylistCardComponent]
})
export class HomeComponent {
  data = inject(DataService);
  playlists = signal(this.data.getPlaylists());
  morePlaylists = signal(this.data.getMorePlaylist());
}
