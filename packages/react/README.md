# @mayvio-ui/react

> **Official React wrapper components for the Mayvio UI component library.**

`@mayvio-ui/react` offers standard React bindings for the Mayvio UI design system, allowing you to use accessible, responsive, and theme-supported components in your React applications with ease.

---

## Installation

Install both the React wrapper library and the core styling package:

```bash
npm install mayvio-ui @mayvio-ui/react
```

---

## Setup & Styles

Import the Mayvio UI stylesheets at the root of your application (e.g. `src/index.js`, `src/App.js` or `src/main.tsx`):

```javascript
import "mayvio-ui/css";
```

---

## Usage Example

Import components directly in your React views. State management, keyboard bindings, and ARIA attributes are handled out of the box:

```jsx
import React, { useState } from "react";
import { Accordion, AccordionItem, DatePicker, Button, Modal } from "@mayvio-ui/react";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-6">
      <h1>Welcome to Mayvio UI</h1>

      {/* Collapsible Accordion */}
      <Accordion multiExpand={false}>
        <AccordionItem title="Overview">
          <p>This is a React wrapper built on top of vanilla core styles.</p>
        </AccordionItem>
        <AccordionItem title="Configuration">
          <p>Simple hooks allow programmatic control.</p>
        </AccordionItem>
      </Accordion>

      {/* Date Picker */}
      <DatePicker rangeMode={true} onChange={(range) => console.log(range)} />

      {/* Action Button & Dialog Overlay */}
      <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
        Open Modal
      </button>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="System Check">
        <p>Your wrappers are fully synchronized.</p>
      </Modal>
    </div>
  );
}
```

---

## 🎨 Available React Components (21)

Every component has a dedicated React wrapper component:
- **ThemeToggle**
- **Skeleton**
- **Toast** (with programmatic `showToast`)
- **Accordion** & **AccordionItem**
- **Tabs**, **TabList**, **Tab**, & **TabPanel**
- **Tooltip**
- **Badge**
- **Avatar** & **AvatarGroup**
- **ProgressBar**
- **Alert**
- **CommandPalette**
- **Sidebar** & **SidebarLink**
- **NotificationCenter** & **NotificationItem**
- **Breadcrumb**
- **CodeSnippet**
- **DataGrid**
- **DatePicker**
- **Dropdown**
- **FileUpload**
- **Modal**
- **MultiSelect**

---

## 📄 License
MIT
