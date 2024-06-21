import { Component, input } from '@angular/core';

@Component({
  selector: 'inline-artists',
  standalone: true,
  imports: [],
  templateUrl: './inline-artists.component.html',
  styleUrl: './inline-artists.component.scss'
})
export class InlineArtistsComponent {
  artists = input.required<string[]>();
}
