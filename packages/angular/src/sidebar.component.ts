// @ts-nocheck
import { Component, Input } from "@angular/core";

/**
 * SidebarLinkComponent
 * Angular wrapper component representing navigation links in the Sidebar menu.
 */
@Component({
  selector: "mayvio-sidebar-link",
  template: `
    <a
      [href]="href"
      class="sidebar-link"
      [class.active]="active"
      [attr.title]="label"
    >
      <span *ngIf="icon" class="sidebar-icon">{{ icon }}</span>
      <span class="sidebar-label">{{ label }}</span>
    </a>
  `
})
export class SidebarLinkComponent {
  @Input() active = false;
  @Input() icon = "";
  @Input() label = "";
  @Input() href = "#";
}

/**
 * SidebarComponent
 * Angular wrapper component representing the Navigation Sidebar panel.
 */
@Component({
  selector: "mayvio-sidebar",
  template: `
    <div class="sidebar" [class.is-collapsed]="collapsed">
      <nav class="sidebar-nav" aria-label="Sidebar menu">
        <ng-content></ng-content>
      </nav>
    </div>
  `
})
export class SidebarComponent {
  @Input() collapsed = false;
}
