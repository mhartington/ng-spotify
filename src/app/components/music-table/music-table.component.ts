import { Component, inject, signal } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { InlineArtistsComponent } from "../inline-artists/inline-artists.component";

@Component({
    selector: 'music-table',
    standalone: true,
    templateUrl: './music-table.component.html',
    styleUrl: './music-table.component.scss',
    imports: [InlineArtistsComponent]
})
export class MusicTableComponent {
  data = inject(DataService)
  songs = signal(this.data.getSongs())
}
