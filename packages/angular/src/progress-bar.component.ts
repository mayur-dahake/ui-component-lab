// @ts-nocheck
import { Component, Input, Output, EventEmitter } from "@angular/core";

/**
 * ProgressBarComponent
 * Angular wrapper component representing the Mayvio UI Progress Bar.
 */
@Component({
  selector: "mayvio-progress-bar",
  template: `
    <div class="progress-demo">
      <div class="progress-header">
        <span *ngIf="label" class="progress-label">{{ label }}</span>
        <span *ngIf="showValue" class="progress-value">
          {{ indeterminate ? "Loading…" : value + "%" }}
        </span>
      </div>

      <div class="progress-track" [class.indeterminate]="indeterminate">
        <div
          class="progress-fill"
          [style.width]="indeterminate ? null : value + '%'"
        ></div>
      </div>

      <input
        *ngIf="interactive && !indeterminate"
        type="range"
        class="progress-slider"
        min="0"
        max="100"
        [value]="value"
        (input)="onSliderChange($event)"
        [attr.aria-label]="label || 'Progress value'"
      />
    </div>
  `
})
export class ProgressBarComponent {
  @Input() value = 0;
  @Input() label = "";
  @Input() indeterminate = false;
  @Input() showValue = true;
  @Input() interactive = false;
  @Output() valueChange = new EventEmitter<number>();

  onSliderChange(event: Event) {
    const val = parseInt((event.target as HTMLInputElement).value, 10);
    this.value = val;
    this.valueChange.emit(val);
  }
}
