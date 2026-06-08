// @ts-nocheck
import React from "react";

/**
 * Tooltip
 * React wrapper for Mayvio UI CSS-based Tooltip component.
 *
 * Props:
 * - content: text/label content of the tooltip
 * - position: 'top' | 'bottom' | 'left' | 'right'
 * - children: the element to trigger tooltip on hover/focus
 * - className: custom class names
 */
export function Tooltip({ content, position = "top", children, className = "" }) {
  return (
    <div className={`tooltip-wrapper ${className}`} data-position={position}>
      {children}
      <span className="tooltip" role="tooltip">{content}</span>
    </div>
  );
}
