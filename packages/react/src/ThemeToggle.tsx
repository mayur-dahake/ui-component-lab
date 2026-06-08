// @ts-nocheck
import React, { useEffect } from "react";
import { initThemeToggle } from "mayvio-ui/scripts/components/theme-toggle.js";

/**
 * ThemeToggle
 * React integration wrapper for the Mayvio UI Theme Toggle button.
 */
export function ThemeToggle() {
  useEffect(() => {
    initThemeToggle();
  }, []);

  return (
    <button
      className="theme-toggle"
      id="theme-toggle-btn"
      type="button"
      role="switch"
      aria-checked="false"
      aria-label="Switch to dark theme"
    />
  );
}
