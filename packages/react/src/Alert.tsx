// @ts-nocheck
import React, { useState } from "react";

/**
 * Alert
 * React wrapper for Mayvio UI Alert component.
 *
 * Props:
 * - variant: 'success' | 'error' | 'warning' | 'info'
 * - title: bold title text
 * - dismissible: whether the alert displays a close button
 * - onClose: callback event when closed
 * - children: main alert body content
 * - className: custom class names
 */
export function Alert({
  variant = "info",
  title,
  children,
  dismissible = false,
  onClose,
  className = ""
}) {
  const [visible, setVisible] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  const handleDismiss = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 200); // Match core transition delay
  };

  if (!visible) return null;

  const icon = {
    success: "✓",
    error: "✕",
    warning: "⚠",
    info: "ℹ"
  }[variant] || "ℹ";

  const animationStyle = animateOut
    ? { animation: "alertIn 0.2s ease reverse forwards" }
    : undefined;

  return (
    <div className={`alert ${variant} ${className}`} role="alert" style={animationStyle}>
      <span className="alert-icon" aria-hidden="true">{icon}</span>
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        <div className="alert-message">{children}</div>
      </div>
      {dismissible && (
        <button className="alert-close" aria-label="Dismiss alert" onClick={handleDismiss}>
          ✕
        </button>
      )}
    </div>
  );
}
