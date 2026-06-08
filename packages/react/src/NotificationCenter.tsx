// @ts-nocheck
import React from "react";

/**
 * NotificationCenter
 * React wrapper for Mayvio UI Notification Center component.
 *
 * Props:
 * - isOpen: boolean representing panel visibility
 * - onToggle: callback to open/close panel
 * - onClearAll: callback to clear notifications
 * - children: NotificationItem components
 * - className: custom class names
 */
export function NotificationCenter({
  isOpen = false,
  onToggle,
  onClearAll,
  children,
  className = ""
}) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={`notification-center-card ${className}`}>
      {onToggle && (
        <button
          className="control-btn"
          onClick={onToggle}
          aria-expanded={isOpen}
          data-toggle-notifications
          type="button"
        >
          {isOpen ? "Hide notifications" : "Show notifications"}
        </button>
      )}

      <div className={`notification-panel ${isOpen ? "is-open" : ""}`}>
        {children}
        {childrenArray.length > 0 && onClearAll && (
          <div className="notification-footer">
            <button data-clear-notifications onClick={onClearAll} type="button">
              Clear all
            </button>
          </div>
        )}
        {childrenArray.length === 0 && (
          <div style={{ padding: "20px", textAlign: "center", color: "var(--text-muted)", fontSize: "0.85rem" }}>
            No notifications
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * NotificationItem
 * Single notification card template.
 */
export function NotificationItem({
  type = "info",
  title,
  description,
  onDismiss,
  className = ""
}) {
  return (
    <div className={`notification-item notification-item-${type} ${className}`}>
      <div className="notification-badge" aria-hidden="true" />
      <div className="notification-info">
        <h4>{title}</h4>
        {description && <p>{description}</p>}
      </div>
      {onDismiss && (
        <button
          className="notification-dismiss"
          aria-label="Dismiss notification"
          onClick={onDismiss}
          type="button"
        >
          ✕
        </button>
      )}
    </div>
  );
}
