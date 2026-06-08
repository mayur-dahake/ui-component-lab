// @ts-nocheck
import { Component, Input, Output, EventEmitter } from "@angular/core";

/**
 * ToastComponent
 * Angular wrapper component representing static or inline toast designs.
 */
@Component({
  selector: "mayvio-toast",
  template: `
    <div class="toast {{ variant }}" role="alert">
      <span class="toast-icon" aria-hidden="true">{{ icon }}</span>
      <span class="toast-message">{{ message }}</span>
      <button
        *ngIf="dismissible"
        class="toast-close"
        aria-label="Dismiss notification"
        (click)="close.emit()"
      >
        ✕
      </button>
      <div class="toast-progress"></div>
    </div>
  `
})
export class ToastComponent {
  @Input() variant: "success" | "error" | "warning" | "info" = "info";
  @Input() message = "";
  @Input() dismissible = true;
  @Output() close = new EventEmitter<void>();

  get icon() {
    return {
      success: "✓",
      error: "✕",
      warning: "⚠",
      info: "ℹ"
    }[this.variant] || "ℹ";
  }
}
