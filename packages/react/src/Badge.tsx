// @ts-nocheck
import React from "react";

/**
 * Badge
 * React wrapper for Mayvio UI Badge component.
 *
 * Props:
 * - variant: 'success' | 'error' | 'warning' | 'info'
 * - dot: whether to show a status dot
 * - outline: whether to show the outline variant
 * - children: text content
 * - className: custom class names
 */
export function Badge({ variant = "info", dot = false, outline = false, children, className = "" }) {
  const classes = [
    "badge",
    variant,
    dot ? "dot" : "",
    outline ? "outline" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}
