// @ts-nocheck
import React from "react";
import { createToast } from "mayvio-ui/scripts/components/toast.js";

// Re-export the programmatic toast creator
export { createToast as showToast };

/**
 * Toast
 * React wrapper for a static or inline Mayvio UI Toast Notification.
 *
 * Props:
 * - variant: 'success' | 'error' | 'warning' | 'info'
 * - message: text content of the toast
 * - dismissible: whether to show the close button
 * - onClose: callback event when close button is clicked
 */
export function Toast({ variant = "info", message, onClose, dismissible = true }) {
  const icon = {
    success: "✓",
    error: "✕",
    warning: "⚠",
    info: "ℹ"
  }[variant] || "ℹ";

  return (
    <div className={`toast ${variant}`} role="alert">
      <span className="toast-icon" aria-hidden="true">{icon}</span>
      <span className="toast-message">{message}</span>
      {dismissible && (
        <button className="toast-close" aria-label="Dismiss notification" onClick={onClose}>
          ✕
        </button>
      )}
      <div className="toast-progress" />
    </div>
  );
}
