// @ts-nocheck
import { Component, Input, Output, EventEmitter } from "@angular/core";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

/**
 * BreadcrumbComponent
 * Angular wrapper component representing the navigation breadcrumb trail.
 */
@Component({
  selector: "mayvio-breadcrumb",
  template: `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <ng-container
        *ngFor="let item of items; let idx = index; let isLast = last"
      >
        <span *ngIf="idx > 0" class="breadcrumb-separator" aria-hidden="true"
          >/</span
        >

        <span
          *ngIf="item.active || (item.active === undefined && isLast)"
          aria-current="page"
        >
          {{ item.label }}
        </span>

        <a
          *ngIf="!item.active && !(item.active === undefined && isLast)"
          [href]="item.href || '#'"
          (click)="onItemClick($event, item)"
        >
          {{ item.label }}
        </a>
      </ng-container>
    </nav>
  `
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbItem[] = [];
  @Output() navigate = new EventEmitter<BreadcrumbItem>();

  onItemClick(event: MouseEvent, item: BreadcrumbItem) {
    if (item.href === undefined || item.href === "#") {
      event.preventDefault();
    }
    this.navigate.emit(item);
  }
}
