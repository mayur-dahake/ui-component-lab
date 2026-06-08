# Mayvio UI — Core Component Library

> **Modern, accessible, and responsive UI components built with HTML, CSS, and vanilla JavaScript.**

Mayvio UI is a zero-dependency component library designed to help developers build premium web interfaces faster. It comes with built-in accessibility (WAI-ARIA compliance), support for dark/light themes, and mobile-first responsiveness.

---

## Installation

Install the package via NPM:

```bash
npm install mayvio-ui
```

---

## Quick Start

### 1. Import Styles
Include the global design system tokens, typography, utilities, and component styles in your stylesheet or bundle:

```javascript
import "mayvio-ui/css";
```

Or import individual component styles if you want a minimal footprint:
```css
@import "mayvio-ui/styles/components/button.css";
@import "mayvio-ui/styles/components/date-picker.css";
```

### 2. Import and Initialize Components
For interactive components, import their initializer scripts and invoke them.

```javascript
import { initAccordion, initDatePicker } from "mayvio-ui";

// Initialize all accordions and date pickers on the page
document.addEventListener("DOMContentLoaded", () => {
  initAccordion();
  initDatePicker();
});
```

---

## 🎨 Supported Components (21)

Mayvio UI features standard web components categorized into phases:
- **Foundational:** Theme Toggle, Skeleton Loader, Accordion, Tabs, Toast Notification, Modal Dialog.
- **Productivity:** Dropdown Select, Multi-Select, Tooltip, Badge, Avatar, Progress Bar, Alert.
- **Application Layouts:** Command Palette (`Ctrl + K`), Collapsible Sidebar, Notification Center, Breadcrumb Trail.
- **Enterprise Features:** Interactive Data Grid (sorting, filtering, pagination), File Upload Zone, Date/Range Picker.

---

## 💻 Code Example: Accordion Markup

```html
<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-trigger" aria-expanded="false" aria-controls="acc-panel">
      What is Mayvio UI?
      <span class="accordion-icon">▼</span>
    </button>
    <div class="accordion-content" id="acc-panel">
      <div class="accordion-content-inner">
        <div class="accordion-body">
          A zero-dependency, accessible, and responsive component library.
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## ♿ Accessibility First
All components adhere strictly to WAI-ARIA authoring patterns, including:
- Keyboard navigation (arrows, tab indexes, focus trapping).
- Semantic roles (`dialog`, `listbox`, `tablist`, `option`, etc.).
- Active state announcement via `aria-expanded` and `aria-selected` attributes.

---

## 📄 License
MIT
