// @ts-nocheck
import React, { useState } from "react";

/**
 * Accordion
 * React wrapper for Mayvio UI Accordion component.
 *
 * Props:
 * - multiExpand: whether multiple panels can be expanded at once
 * - children: AccordionItem components
 * - className: custom class names
 */
export function Accordion({ children, multiExpand = false, className = "" }) {
  const [openIndices, setOpenIndices] = useState([]);

  const handleToggle = (index) => {
    if (multiExpand) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter((i) => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      setOpenIndices(openIndices.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className={`accordion ${className}`}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;
        return React.cloneElement(child, {
          isOpen: openIndices.includes(index),
          onToggle: () => handleToggle(index)
        });
      })}
    </div>
  );
}

/**
 * AccordionItem
 * Individual collapsible item inside Accordion.
 */
export function AccordionItem({ title, isOpen = false, onToggle, children, className = "" }) {
  return (
    <div className={`accordion-item ${isOpen ? "open" : ""} ${className}`}>
      <button
        className="accordion-trigger"
        aria-expanded={isOpen}
        onClick={onToggle}
        type="button"
      >
        {title}
        <span className="accordion-icon" aria-hidden="true">▼</span>
      </button>
      <div className="accordion-content">
        <div className="accordion-content-inner">
          <div className="accordion-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
