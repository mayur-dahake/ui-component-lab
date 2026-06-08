// @ts-nocheck
import { Component, Input, ContentChildren, QueryList, AfterContentInit } from "@angular/core";

/**
 * TabPanelComponent
 * Individual tab panels containing contents projected via template elements.
 */
@Component({
  selector: "mayvio-tab-panel",
  template: `
    <div
      role="tabpanel"
      [id]="id"
      [attr.aria-labelledby]="labelledBy"
      class="tab-panel"
      [class.active]="isActive"
      [hidden]="!isActive"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class TabPanelComponent {
  @Input() title = "";
  @Input() isActive = false;
  id = "";
  labelledBy = "";
}

/**
 * TabsComponent
 * Header controllers generating tabs links and key bindings.
 */
@Component({
  selector: "mayvio-tabs",
  template: `
    <div class="tabs">
      <div role="tablist" aria-label="Tab navigation">
        <button
          *ngFor="let panel of panels; let idx = index"
          role="tab"
          [id]="'tab-' + idx"
          [attr.aria-selected]="panel.isActive"
          [attr.aria-controls]="'panel-' + idx"
          [tabIndex]="panel.isActive ? 0 : -1"
          [class.active]="panel.isActive"
          (click)="selectTab(idx)"
          (keydown)="handleKeyDown($event, idx)"
          type="button"
        >
          {{ panel.title }}
        </button>
      </div>

      <ng-content></ng-content>
    </div>
  `
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabPanelComponent) panels!: QueryList<TabPanelComponent>;

  ngAfterContentInit() {
    this.panels.forEach((panel, idx) => {
      panel.id = `panel-${idx}`;
      panel.labelledBy = `tab-${idx}`;
    });

    const hasActive = this.panels.some((p) => p.isActive);
    if (!hasActive && this.panels.length > 0) {
      this.selectTab(0);
    }
  }

  selectTab(index: number) {
    this.panels.forEach((panel, idx) => {
      panel.isActive = idx === index;
    });
  }

  handleKeyDown(event: KeyboardEvent, index: number) {
    const list = this.panels.toArray();
    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % list.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + list.length) % list.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = list.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    this.selectTab(nextIndex);

    setTimeout(() => {
      const btn = document.getElementById(`tab-${nextIndex}`);
      btn?.focus();
    }, 0);
  }
}
