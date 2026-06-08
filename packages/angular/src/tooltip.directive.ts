// @ts-nocheck
import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from "@angular/core";

/**
 * TooltipDirective
 * Angular directive to apply CSS-based Tooltips directly onto elements.
 * Usage: `<button [mayvioTooltip]="'Settings'" position="right">Icon</button>`
 */
@Directive({
  selector: "[mayvioTooltip]"
})
export class TooltipDirective implements OnInit, OnChanges {
  @Input("mayvioTooltip") content = "";
  @Input() position: "top" | "bottom" | "left" | "right" = "top";

  private tooltipEl!: HTMLSpanElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const host = this.el.nativeElement;
    this.renderer.addClass(host, "tooltip-wrapper");
    this.renderer.setAttribute(host, "data-position", this.position);

    this.tooltipEl = this.renderer.createElement("span");
    this.renderer.addClass(this.tooltipEl, "tooltip");
    this.renderer.setAttribute(this.tooltipEl, "role", "tooltip");
    this.tooltipEl.textContent = this.content;
    this.renderer.appendChild(host, this.tooltipEl);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["content"] && this.tooltipEl) {
      this.tooltipEl.textContent = this.content;
    }
    if (changes["position"] && this.el) {
      this.renderer.setAttribute(this.el.nativeElement, "data-position", this.position);
    }
  }
}
