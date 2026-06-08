// @ts-nocheck
import React from "react";

/**
 * ProgressBar
 * React wrapper for Mayvio UI Progress Bar component.
 *
 * Props:
 * - value: number (0-100) representing current progress
 * - label: text descriptor
 * - indeterminate: whether the loading is indeterminate (animated loop)
 * - className: custom class names
 * - showValue: show percentage or text indicator
 * - onChange: optional function to render as an interactive range slider
 */
export function ProgressBar({
  value = 0,
  label = "",
  indeterminate = false,
  className = "",
  showValue = true,
  onChange
}) {
  const isInteractive = typeof onChange === "function";

  const handleSliderChange = (e) => {
    if (isInteractive) {
      onChange(parseInt(e.target.value, 10));
    }
  };

  return (
    <div className={`progress-demo ${className}`}>
      <div className="progress-header">
        {label && <span className="progress-label">{label}</span>}
        {showValue && (
          <span className="progress-value">
            {indeterminate ? "Loading…" : `${value}%`}
          </span>
        )}
      </div>

      <div className={`progress-track ${indeterminate ? "indeterminate" : ""}`}>
        <div
          className="progress-fill"
          style={{ width: indeterminate ? undefined : `${value}%` }}
        />
      </div>

      {isInteractive && !indeterminate && (
        <input
          type="range"
          className="progress-slider"
          min="0"
          max="100"
          value={value}
          onChange={handleSliderChange}
          aria-label={label || "Progress value"}
        />
      )}
    </div>
  );
}
