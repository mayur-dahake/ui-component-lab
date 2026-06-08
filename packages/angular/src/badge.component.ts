// @ts-nocheck
import { Component, Input } from "@angular/core";

/**
 * BadgeComponent
 * Angular wrapper component for Mayvio UI Badges.
 */
@Component({
  selector: "mayvio-badge",
  template: `
    <span [ngClass]="classes">
      <ng-content></ng-content>
    </span>
  `
})
export class BadgeComponent {
  @Input() variant: "success" | "error" | "warning" | "info" = "info";
  @Input() dot = false;
  @Input() outline = false;

  get classes() {
    return {
      "badge": true,
      "success": this.variant === "success",
      "error": this.variant === "error",
      "warning": this.variant === "warning",
      "info": this.variant === "info",
      "dot": this.dot,
      "outline": this.outline
    };
  }
}
