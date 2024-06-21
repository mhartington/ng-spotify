import { Component, input } from '@angular/core';

@Component({
  selector: 'pure-inline-artists',
  standalone: true,
  imports: [],
  templateUrl: './pure-inline-artists.component.html',
  styleUrl: './pure-inline-artists.component.scss'
})
export class PureInlineArtistsComponent {
  artists = input.required<string[]>()
}
