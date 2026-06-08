# @mayvio-ui/angular

> **Official Angular wrapper components and directives for the Mayvio UI component library.**

`@mayvio-ui/angular` exposes custom selectors and attributes mapping to the Mayvio UI design system, built in partial Ivy compilation mode to support modern Angular applications.

---

## Installation

Install both the Angular package and the core styling assets:

```bash
npm install mayvio-ui @mayvio-ui/angular
```

---

## Configuration & Styles

### 1. Import Styles
Include the core stylesheet inside your global stylesheet (e.g. `src/styles.css` or `angular.json` styles array):

```css
@import "mayvio-ui/css";
```

### 2. Import Module
Register `MayvioUIModule` in your module declaration (e.g., `app.module.ts`) or imports metadata array:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MayvioUIModule } from '@mayvio-ui/angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MayvioUIModule // Register modular selectors
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

---

## Usage Example

Use the wrapper selectors inside your HTML templates:

```html
<!-- 1. Accordion -->
<mayvio-accordion [multiExpand]="false">
  <mayvio-accordion-item title="What is this?">
    <p>This is the Angular implementation of Mayvio UI.</p>
  </mayvio-accordion-item>
</mayvio-accordion>

<!-- 2. Date/Range Picker -->
<mayvio-date-picker [rangeMode]="true"></mayvio-date-picker>

<!-- 3. Dynamic Alerts -->
<mayvio-alert variant="success" [dismissible]="true">
  Configuration loaded successfully.
</mayvio-alert>

<!-- 4. Interactive Data Grid -->
<mayvio-data-grid [initialData]="rows"></mayvio-data-grid>
```

---

## 🎨 Available Angular Directives & Components (21)

All wrappers are registered and exported via `MayvioUIModule`:
- `<mayvio-theme-toggle>`
- `<mayvio-skeleton>`
- `MayvioToastService` provider & `<mayvio-toast>`
- `<mayvio-accordion>` & `<mayvio-accordion-item>`
- `<mayvio-tabs>` & `<mayvio-tab-panel>`
- `[mayvioTooltip]` directive
- `<mayvio-badge>`
- `<mayvio-avatar>` & `<mayvio-avatar-group>`
- `<mayvio-progress-bar>`
- `<mayvio-alert>`
- `<mayvio-command-palette>`
- `<mayvio-sidebar>` & `<mayvio-sidebar-link>`
- `<mayvio-notification-center>` & `<mayvio-notification-item>`
- `<mayvio-breadcrumb>`
- `<mayvio-code-snippet>`
- `<mayvio-data-grid>`
- `<mayvio-date-picker>`
- `<mayvio-dropdown>`
- `<mayvio-file-upload>`
- `[mayvioModalTarget]` directive
- `<mayvio-multi-select>`

---

## 📄 License
MIT
