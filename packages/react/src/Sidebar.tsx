// @ts-nocheck
import React from "react";

/**
 * Sidebar
 * React wrapper for Mayvio UI Sidebar Navigation.
 *
 * Props:
 * - collapsed: boolean to collapse the sidebar width
 * - children: SidebarLink components
 * - className: custom class names
 */
export function Sidebar({ collapsed = false, children, className = "" }) {
  return (
    <div className={`sidebar ${collapsed ? "is-collapsed" : ""} ${className}`}>
      <nav className="sidebar-nav" aria-label="Sidebar menu">
        {children}
      </nav>
    </div>
  );
}

/**
 * SidebarLink
 * Anchor link items representing sidebar route items.
 */
export function SidebarLink({ active = false, icon, label, href = "#", onClick, className = "" }) {
  return (
    <a
      href={href}
      className={`sidebar-link ${active ? "active" : ""} ${className}`}
      onClick={onClick}
      title={label}
    >
      {icon && <span className="sidebar-icon">{icon}</span>}
      <span className="sidebar-label">{label}</span>
    </a>
  );
}
