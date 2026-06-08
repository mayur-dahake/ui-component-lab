// @ts-nocheck
import { Component, Input, Output, EventEmitter, ContentChildren, QueryList } from "@angular/core";

/**
 * NotificationItemComponent
 * Angular wrapper component representing single notification alerts.
 */
@Component({
  selector: "mayvio-notification-item",
  template: `
    <div class="notification-item notification-item-{{ type }}">
      <div class="notification-badge" aria-hidden="true"></div>
      <div class="notification-info">
        <h4>{{ title }}</h4>
        <p *ngIf="description">{{ description }}</p>
      </div>
      <button
        class="notification-dismiss"
        aria-label="Dismiss notification"
        (click)="dismiss.emit()"
      >
        ✕
      </button>
    </div>
  `
})
export class NotificationItemComponent {
  @Input() type: "success" | "error" | "warning" | "info" = "info";
  @Input() title = "";
  @Input() description = "";
  @Output() dismiss = new EventEmitter<void>();
}

/**
 * NotificationCenterComponent
 * Angular wrapper component orchestrating the notification overlay lists.
 */
@Component({
  selector: "mayvio-notification-center",
  template: `
    <div class="notification-center-card">
      <button
        class="control-btn"
        (click)="toggle.emit()"
        [attr.aria-expanded]="isOpen"
        data-toggle-notifications
        type="button"
      >
        {{ isOpen ? "Hide notifications" : "Show notifications" }}
      </button>

      <div class="notification-panel" [class.is-open]="isOpen">
        <ng-content></ng-content>

        <div *ngIf="hasItems" class="notification-footer">
          <button data-clear-notifications (click)="clearAll.emit()">
            Clear all
          </button>
        </div>
      </div>
    </div>
  `
})
export class NotificationCenterComponent {
  @Input() isOpen = false;
  @Output() toggle = new EventEmitter<void>();
  @Output() clearAll = new EventEmitter<void>();

  @ContentChildren(NotificationItemComponent)
  items!: QueryList<NotificationItemComponent>;

  get hasItems() {
    return this.items && this.items.length > 0;
  }
}
