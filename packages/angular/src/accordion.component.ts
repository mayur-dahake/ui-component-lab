// @ts-nocheck
import { Component, Input, ContentChildren, QueryList, AfterContentInit } from "@angular/core";

/**
 * AccordionItemComponent
 * Individual accordion panels holding header details and projected bodies.
 */
@Component({
  selector: "mayvio-accordion-item",
  template: `
    <div class="accordion-item" [class.open]="isOpen">
      <button class="accordion-trigger" [attr.aria-expanded]="isOpen" (click)="toggle()" type="button">
        {{ title }}
        <span class="accordion-icon" aria-hidden="true">▼</span>
      </button>
      <div class="accordion-content">
        <div class="accordion-content-inner">
          <div class="accordion-body">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AccordionItemComponent {
  @Input() title = "";
  @Input() isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}

/**
 * AccordionComponent
 * Container organizing multiple AccordionItem components.
 */
@Component({
  selector: "mayvio-accordion",
  template: `
    <div class="accordion">
      <ng-content></ng-content>
    </div>
  `
})
export class AccordionComponent implements AfterContentInit {
  @Input() multiExpand = false;
  @ContentChildren(AccordionItemComponent) items!: QueryList<AccordionItemComponent>;

  ngAfterContentInit() {
    this.items.forEach((item) => {
      const originalToggle = item.toggle.bind(item);
      item.toggle = () => {
        const nextState = !item.isOpen;
        if (!this.multiExpand && nextState) {
          this.items.forEach((other) => {
            if (other !== item) other.isOpen = false;
          });
        }
        item.isOpen = nextState;
      };
    });
  }
}
