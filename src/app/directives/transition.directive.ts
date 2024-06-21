import {
  Directive,
  ElementRef,
  Renderer2,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';

@Directive({
  selector: '[transition]',
  standalone: true,
})
export class TransitionDirective {
  transitionName = input.required<string>();

  scope = crypto.getRandomValues(new Uint32Array(1))[0].toString();

  styleSheet = new CSSStyleSheet();

  cssTemplate = computed(() => {
    return `
        @layer ${this.transitionName()}-transition {
          [data-transition-scope="${this.scope}"] {
            view-transition-name: ${this.transitionName()}
          }
        }
`;
  });
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  constructor() {
    effect(() => {
      this.styleSheet.replaceSync(this.cssTemplate());
      document.adoptedStyleSheets.push(this.styleSheet);
    });
    effect(() => {
      this.renderer.setAttribute(
        this.el.nativeElement,
        'data-transition-scope',
        this.scope,
      );
    });
  }
}
