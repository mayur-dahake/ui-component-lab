// @ts-nocheck
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  OnChanges,
  SimpleChanges,
  HostListener
} from "@angular/core";

export interface MayvioCommand {
  command: string;
  title: string;
  description?: string;
  shortcut?: string;
}

/**
 * CommandPaletteComponent
 * Angular wrapper component representing the Command Palette overlay.
 */
@Component({
  selector: "mayvio-command-palette",
  template: `
    <div
      *ngIf="isOpen"
      class="command-palette is-open"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      (click)="handleBackdropClick($event)"
    >
      <div class="command-palette-panel">
        <div class="command-palette-header">
          <h3>Command Palette</h3>
          <button
            class="command-palette-close"
            aria-label="Close command palette"
            (click)="close.emit()"
          >
            ×
          </button>
        </div>

        <input
          #inputEl
          class="command-palette-input"
          type="search"
          [placeholder]="placeholder"
          aria-label="Search commands"
          [value]="query"
          (input)="onSearch($event)"
          (keydown)="handleKeyDown($event)"
        />

        <div class="command-palette-list" role="listbox">
          <button
            *ngFor="let cmd of filteredCommands; let idx = index"
            class="command-palette-item"
            [class.focused]="idx === focusedIndex"
            [attr.data-command]="cmd.command"
            role="option"
            [attr.aria-selected]="idx === focusedIndex"
            (click)="selectCommand(cmd)"
            type="button"
          >
            <div>
              <h4>{{ cmd.title || cmd.command }}</h4>
              <p *ngIf="cmd.description">{{ cmd.description }}</p>
            </div>
            <span *ngIf="cmd.shortcut">{{ cmd.shortcut }}</span>
          </button>

          <div
            *ngIf="filteredCommands.length === 0"
            style="padding: 1.25rem; color: var(--text-muted); font-size: 0.9rem;"
          >
            No results found
          </div>
        </div>

        <p class="command-palette-note">
          Tip: press Ctrl + K or Cmd + K to open quickly.
        </p>
      </div>
    </div>
  `
})
export class CommandPaletteComponent implements OnChanges {
  @Input() isOpen = false;
  @Input() commands: MayvioCommand[] = [];
  @Input() placeholder = "Search commands…";

  @Output() close = new EventEmitter<void>();
  @Output() commandSelect = new EventEmitter<MayvioCommand>();

  @ViewChild("inputEl") inputElement!: ElementRef;

  query = "";
  focusedIndex = -1;
  filteredCommands: MayvioCommand[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes["isOpen"]) {
      if (this.isOpen) {
        this.query = "";
        this.focusedIndex = -1;
        this.filteredCommands = [...this.commands];
        document.body.style.overflow = "hidden";
        setTimeout(() => this.inputElement?.nativeElement?.focus(), 50);
      } else {
        document.body.style.overflow = "";
      }
    }
  }

  @HostListener("window:keydown", ["$event"])
  handleGlobalKeydown(event: KeyboardEvent) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      if (this.isOpen) {
        this.close.emit();
      } else {
        this.isOpen = true;
        this.close.emit();
      }
    }
    if (event.key === "Escape" && this.isOpen) {
      this.close.emit();
    }
  }

  onSearch(event: Event) {
    this.query = (event.target as HTMLInputElement).value;
    const norm = this.query.trim().toLowerCase();
    this.filteredCommands = this.commands.filter(
      (cmd) =>
        (cmd.title || cmd.command || "").toLowerCase().includes(norm) ||
        (cmd.description || "").toLowerCase().includes(norm)
    );
    this.focusedIndex = -1;
  }

  handleKeyDown(event: KeyboardEvent) {
    if (this.filteredCommands.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      this.focusedIndex = (this.focusedIndex + 1) % this.filteredCommands.length;
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      this.focusedIndex =
        (this.focusedIndex - 1 + this.filteredCommands.length) %
        this.filteredCommands.length;
    } else if (event.key === "Enter") {
      event.preventDefault();
      const idx = this.focusedIndex >= 0 ? this.focusedIndex : 0;
      this.selectCommand(this.filteredCommands[idx]);
    }
  }

  selectCommand(cmd: MayvioCommand) {
    this.commandSelect.emit(cmd);
    this.close.emit();
  }

  handleBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains("command-palette")) {
      this.close.emit();
    }
  }
}
