// @ts-nocheck
import React from "react";

/**
 * Avatar
 * React wrapper for Mayvio UI Avatar component.
 *
 * Props:
 * - src: image URL
 * - alt: image alternate text
 * - initials: initials to display if image is missing
 * - size: 'sm' | 'md' | 'lg'
 * - className: custom class names
 */
export function Avatar({ src, alt = "", initials, size = "md", className = "" }) {
  const classes = ["avatar", size, className].filter(Boolean).join(" ");

  return (
    <span className={classes}>
      {src ? <img src={src} alt={alt} /> : initials}
    </span>
  );
}

/**
 * AvatarGroup
 * Stacks multiple Avatar components together with a limit fallback.
 */
export function AvatarGroup({ limit, children, className = "" }) {
  const childrenArray = React.Children.toArray(children);
  const visibleAvatars = limit ? childrenArray.slice(0, limit) : childrenArray;
  const extraCount = limit && childrenArray.length > limit ? childrenArray.length - limit : 0;

  return (
    <div className={`avatar-group ${className}`}>
      {visibleAvatars}
      {extraCount > 0 && <span className="avatar sm more">+{extraCount}</span>}
    </div>
  );
}
