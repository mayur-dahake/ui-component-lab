// @ts-nocheck
import { Component, Input, ContentChildren, QueryList, AfterContentInit } from "@angular/core";

/**
 * AvatarComponent
 * Angular wrapper component representing image or initials avatars.
 */
@Component({
  selector: "mayvio-avatar",
  template: `
    <span *ngIf="!hidden" class="avatar {{ size }}">
      <img *ngIf=" src" [src]="src" [attr.alt]="alt" />
      <ng-container *ngIf="!src">{{ initials }}</ng-container>
    </span>
  `
})
export class AvatarComponent {
  @Input() src = "";
  @Input() alt = "";
  @Input() initials = "";
  @Input() size: "sm" | "md" | "lg" = "md";
  hidden = false;
}

/**
 * AvatarGroupComponent
 * Groups and overlays multiple AvatarComponents with limit rules.
 */
@Component({
  selector: "mayvio-avatar-group",
  template: `
    <div class="avatar-group">
      <ng-content></ng-content>
      <span *ngIf="extraCount > 0" class="avatar sm more">+{{ extraCount }}</span>
    </div>
  `
})
export class AvatarGroupComponent implements AfterContentInit {
  @Input() limit?: number;
  @ContentChildren(AvatarComponent) avatars!: QueryList<AvatarComponent>;
  extraCount = 0;

  ngAfterContentInit() {
    if (this.limit && this.avatars.length > this.limit) {
      this.extraCount = this.avatars.length - this.limit;
      this.avatars.toArray().forEach((avatar, idx) => {
        if (idx >= this.limit) {
          avatar.hidden = true;
        }
      });
    }
  }
}
