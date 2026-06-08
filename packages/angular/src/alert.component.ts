// @ts-nocheck
import { Component, Input, Output, EventEmitter } from "@angular/core";

/**
 * AlertComponent
 * Angular wrapper component representing dismissible or static feedback blocks.
 */
@Component({
  selector: "mayvio-alert",
  template: `
    <div
      *ngIf="visible"
      class="alert {{ variant }}"
      role="alert"
      [style.animation]="animation"
    >
      <span class="alert-icon" aria-hidden="true">{{ icon }}</span>
      <div class="alert-content">
        <div *ngIf="title" class="alert-title">{{ title }}</div>
        <div class="alert-message">
          <ng-content></ng-content>
        </div>
      </div>
      <button
        *ngIf="dismissible"
        class="alert-close"
        aria-label="Dismiss alert"
        (click)="dismiss()"
      >
        ✕
      </button>
    </div>
  `
})
export class AlertComponent {
  @Input() variant: "success" | "error" | "warning" | "info" = "info";
  @Input() title = "";
  @Input() dismissible = false;
  @Output() close = new EventEmitter<void>();

  visible = true;
  animation?: string;

  get icon() {
    return {
      success: "✓",
      error: "✕",
      warning: "⚠",
      info: "ℹ"
    }[this.variant] || "ℹ";
  }

  dismiss() {
    this.animation = "alertIn 0.2s ease reverse forwards";
    setTimeout(() => {
      this.visible = false;
      this.close.emit();
    }, 200);
  }
}
