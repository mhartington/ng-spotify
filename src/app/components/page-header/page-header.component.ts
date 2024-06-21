import { Component, inject } from '@angular/core';
import { TransitionDirective } from '../../directives/transition.directive';
import { Location } from '@angular/common';

@Component({
  selector: 'page-header',
  standalone: true,
  imports: [TransitionDirective],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  location = inject(Location);
  goBack() {
    if (!this.location.isCurrentPathEqualTo('/')) {
      this.location.back();
    } else return;
  }
}
