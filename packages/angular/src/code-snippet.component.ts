// @ts-nocheck
import { Component, Input, OnInit, OnChanges, SimpleChanges } from "@angular/core";

/**
 * CodeSnippetComponent
 * Angular wrapper component representing the Code Snippet viewer and clipboard actions.
 */
@Component({
  selector: "mayvio-code-snippet",
  template: `
    <div *ngIf="availableTabs.length > 0" class="snippet-section">
      <div class="snippet-tabs" role="tablist">
        <button
          *ngFor="let tab of availableTabs"
          class="snippet-tab"
          [class.active]="tab === activeTab"
          role="tab"
          [attr.aria-selected]="tab === activeTab"
          (click)="activeTab = tab"
          type="button"
        >
          {{ tab.toUpperCase() }}
        </button>
      </div>

      <div class="code-block">
        <button
          class="copy-btn"
          [class.copied]="copied"
          (click)="copyCode()"
          type="button"
          [attr.aria-label]="copied ? 'Copied code' : 'Copy code'"
        >
          <ng-container *ngIf="copied">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Copied!
          </ng-container>
          <ng-container *ngIf="!copied">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path
                d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
              />
            </svg>
            Copy
          </ng-container>
        </button>
        <pre><code>{{ snippets[activeTab] }}</code></pre>
      </div>
    </div>
  `
})
export class CodeSnippetComponent implements OnInit, OnChanges {
  @Input() snippets: Record<string, string> = {};

  availableTabs: string[] = [];
  activeTab = "";
  copied = false;

  ngOnInit() {
    this.updateTabs();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["snippets"]) {
      this.updateTabs();
    }
  }

  private updateTabs() {
    if (this.snippets) {
      this.availableTabs = Object.keys(this.snippets).filter(
        (k) => this.snippets[k]
      );
      if (
        this.availableTabs.length > 0 &&
        !this.availableTabs.includes(this.activeTab)
      ) {
        this.activeTab = this.availableTabs[0];
      }
    } else {
      this.availableTabs = [];
      this.activeTab = "";
    }
  }

  copyCode() {
    const code = this.snippets[this.activeTab] || "";
    navigator.clipboard.writeText(code).then(() => {
      this.copied = true;
      setTimeout(() => (this.copied = false), 2000);
    });
  }
}
