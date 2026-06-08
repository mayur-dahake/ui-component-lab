// @ts-nocheck
import React, { useState, useRef } from "react";

/**
 * Tabs
 * React wrapper for Mayvio UI Tabs component.
 */
export function Tabs({ children, defaultIndex = 0, className = "" }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const childrenArray = React.Children.toArray(children);
  const tabList = childrenArray.find((child) => child.type === TabList);
  const tabPanels = childrenArray.filter((child) => child.type === TabPanel);

  return (
    <div className={`tabs ${className}`}>
      {tabList && React.cloneElement(tabList, { activeIndex, setActiveIndex })}
      {tabPanels.map((panel, index) =>
        React.cloneElement(panel, {
          isActive: index === activeIndex,
          id: `panel-${index}`,
          labelledBy: `tab-${index}`
        })
      )}
    </div>
  );
}

/**
 * TabList
 * Orchestrates accessibility and keyboard arrow navigation.
 */
export function TabList({ children, activeIndex, setActiveIndex, className = "" }) {
  const tabsRef = useRef([]);

  const handleKeyDown = (e, index) => {
    const tabsCount = React.Children.count(children);
    let nextIndex = index;

    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % tabsCount;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabsCount) % tabsCount;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = tabsCount - 1;
    } else {
      return;
    }

    e.preventDefault();
    setActiveIndex(nextIndex);
    tabsRef.current[nextIndex]?.focus();
  };

  return (
    <div role="tablist" className={className} aria-label="Tab navigation">
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;
        return React.cloneElement(child, {
          isActive: index === activeIndex,
          onClick: () => setActiveIndex(index),
          onKeyDown: (e) => handleKeyDown(e, index),
          id: `tab-${index}`,
          controls: `panel-${index}`,
          ref: (el) => (tabsRef.current[index] = el)
        });
      })}
    </div>
  );
}

/**
 * Tab
 * Button representing each tab header option.
 */
export const Tab = React.forwardRef(
  ({ children, isActive = false, onClick, onKeyDown, id, controls, className = "" }, ref) => {
    return (
      <button
        role="tab"
        ref={ref}
        id={id}
        aria-selected={isActive}
        aria-controls={controls}
        tabIndex={isActive ? 0 : -1}
        onClick={onClick}
        onKeyDown={onKeyDown}
        className={`${className} ${isActive ? "active" : ""}`}
        type="button"
      >
        {children}
      </button>
    );
  }
);

Tab.displayName = "Tab";

/**
 * TabPanel
 * Container containing the contents associated with a Tab.
 */
export function TabPanel({ children, isActive = false, id, labelledBy, className = "" }) {
  return (
    <div
      role="tabpanel"
      id={id}
      aria-labelledby={labelledBy}
      className={`tab-panel ${isActive ? "active" : ""} ${className}`}
      hidden={!isActive}
    >
      {children}
    </div>
  );
}
