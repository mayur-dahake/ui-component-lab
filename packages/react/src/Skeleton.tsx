// @ts-nocheck
import React from "react";

/**
 * Skeleton
 * React wrapper for Mayvio UI Skeleton Loader component.
 *
 * Props:
 * - variant: 'line' | 'avatar' | 'block' | 'rect'
 * - animation: 'shimmer' | 'wave' | 'pulse'
 * - width: CSS width value (e.g. '100%', '40px')
 * - height: CSS height value
 * - className: custom class names
 * - style: custom style object
 */
export function Skeleton({
  variant = "line",
  animation = "shimmer",
  width,
  height,
  className = "",
  style = {}
}) {
  const classes = [
    "skeleton",
    variant === "avatar" ? "avatar" : "",
    variant === "line" ? "line" : "",
    (variant === "block" || variant === "rect") ? "block" : "",
    animation,
    className
  ]
    .filter(Boolean)
    .join(" ");

  const combinedStyle = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
    ...style
  };

  return <div className={classes} style={combinedStyle} />;
}
