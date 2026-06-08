// @ts-nocheck
import React from "react";

/**
 * Breadcrumb
 * React wrapper for Mayvio UI Breadcrumb component.
 *
 * Props:
 * - items: array of { label: string, href?: string, active?: boolean, onClick?: function }
 * - className: custom class names
 */
export function Breadcrumb({ items = [], className = "" }) {
  return (
    <nav className={`breadcrumb ${className}`} aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isCurrent = item.active !== undefined ? item.active : isLast;

        return (
          <React.Fragment key={item.label}>
            {index > 0 && (
              <span className="breadcrumb-separator" aria-hidden="true">/</span>
            )}
            {isCurrent ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <a href={item.href || "#"} onClick={item.onClick}>
                {item.label}
              </a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
