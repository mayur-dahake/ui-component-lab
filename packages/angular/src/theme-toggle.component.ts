// @ts-nocheck
import { Component, OnInit } from "@angular/core";
import { initThemeToggle } from "mayvio-ui/scripts/components/theme-toggle.js";

/**
 * ThemeToggleComponent
 * Angular wrapper component for the Mayvio UI Theme Toggle button.
 */
@Component({
  selector: "mayvio-theme-toggle",
  template: `
    <button
      class="theme-toggle"
      id="theme-toggle-btn"
      type="button"
      role="switch"
      aria-checked="false"
      aria-label="Switch to dark theme"
    ></button>
  `
})
export class ThemeToggleComponent implements OnInit {
  ngOnInit() {
    initThemeToggle();
  }
}
