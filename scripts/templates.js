export const HTML_TEMPLATES = {
  "theme-toggle": `<!-- Theme Toggle Switch -->
<button class="theme-toggle" id="theme-toggle-btn" type="button" role="switch" aria-checked="false" aria-label="Switch to dark theme"></button>`,

  skeleton: `<!-- Skeleton Avatar & Text Layout -->
<div class="skeleton-layout skeleton-social active">
  <div class="social-card">
    <div class="skeleton avatar"></div>
    <div class="content">
      <div class="skeleton line w40"></div>
      <div class="skeleton line w20"></div>
    </div>
  </div>
  <div class="skeleton line"></div>
  <div class="skeleton line w80"></div>
  <div class="skeleton media"></div>
</div>`,

  toast: `<!-- Toast Container (place at body root) -->
<div id="toastContainer" aria-live="polite" aria-atomic="true"></div>

<!-- Success Toast Example -->
<div class="toast success" role="alert">
  <span class="toast-icon" aria-hidden="true">✓</span>
  <span class="toast-message">Data saved successfully</span>
  <button class="toast-close" aria-label="Dismiss notification">✕</button>
  <div class="toast-progress"></div>
</div>`,

  modal: `<!-- Modal Toggle Button -->
<button class="btn btn-primary" data-modal-target="#confirmModal">Open Modal</button>

<!-- Accessible Modal Overlay -->
<div class="modal-overlay" id="confirmModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="modal">
    <div class="modal-header">
      <h3 id="modal-title">Delete Item</h3>
      <button class="modal-close" aria-label="Close modal">✕</button>
    </div>
    <p class="modal-body">
      Are you sure you want to delete this item? This action cannot be undone.
    </p>
    <div class="modal-actions">
      <button class="btn btn-secondary" data-modal-dismiss>Cancel</button>
      <button class="btn btn-danger">Delete</button>
    </div>
  </div>
</div>`,

  tabs: `<!-- Tabs Component -->
<div class="tabs">
  <div role="tablist" aria-label="Project tabs">
    <button role="tab" id="tab-1" aria-controls="panel-1" aria-selected="true" tabindex="0">Tab 1</button>
    <button role="tab" id="tab-2" aria-controls="panel-2" aria-selected="false" tabindex="-1">Tab 2</button>
  </div>

  <div role="tabpanel" id="panel-1" aria-labelledby="tab-1" class="active">
    <h3>Tab 1 Panel</h3>
    <p>Content panel 1 goes here...</p>
  </div>

  <div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>
    <h3>Tab 2 Panel</h3>
    <p>Content panel 2 goes here...</p>
  </div>
</div>`,

  "command-palette": `<!-- Trigger Shortcut: Ctrl + K -->
<button class="btn btn-ghost" data-open-palette>Open Palette</button>

<!-- Command Palette Modal -->
<div class="command-palette" role="dialog" aria-modal="true" aria-label="Command palette">
  <div class="command-palette-panel">
    <div class="command-palette-header">
      <h3>Command Palette</h3>
      <button class="command-palette-close" aria-label="Close command palette">×</button>
    </div>
    <input class="command-palette-input" type="search" placeholder="Search commands…" aria-label="Search commands" />
    <div class="command-palette-list">
      <button class="command-palette-item" data-command="Go to Dashboard">
        <div>
          <h4>Go to Dashboard</h4>
          <p>Navigate to main workspace.</p>
        </div>
        <span>⌘+1</span>
      </button>
    </div>
  </div>
</div>`,

  sidebar: `<!-- Sidebar Navigation -->
<div class="sidebar">
  <nav class="sidebar-nav" aria-label="Main menu">
    <a href="#" class="sidebar-link active" title="Dashboard">
      <span class="sidebar-icon">📊</span>
      <span class="sidebar-label">Dashboard</span>
    </a>
    <a href="#" class="sidebar-link" title="Projects">
      <span class="sidebar-icon">📁</span>
      <span class="sidebar-label">Projects</span>
    </a>
  </nav>
</div>`,

  "notification-center": `<!-- Notification Trigger Button -->
<button class="control-btn" data-toggle-notifications aria-expanded="false">Show notifications</button>

<!-- Notification Panel -->
<div class="notification-panel">
  <div class="notification-item notification-item-success">
    <div class="notification-badge" aria-hidden="true"></div>
    <div class="notification-info">
      <h4>System Backup</h4>
      <p>Workspace backup complete.</p>
    </div>
    <button class="notification-dismiss" aria-label="Dismiss notification">✕</button>
  </div>
  <div class="notification-footer">
    <button data-clear-notifications>Clear all</button>
  </div>
</div>`,

  breadcrumb: `<!-- Navigation Breadcrumbs -->
<nav class="breadcrumb" aria-label="Breadcrumb">
  <a href="#">Home</a>
  <span class="breadcrumb-separator" aria-hidden="true">/</span>
  <a href="#">Projects</a>
  <span class="breadcrumb-separator" aria-hidden="true">/</span>
  <span aria-current="page">Dashboard</span>
</nav>`,

  accordion: `<!-- Accordion Component -->
<div class="accordion" data-multi-expand="false">
  <div class="accordion-item">
    <button class="accordion-trigger" aria-expanded="false" aria-controls="panel-1">
      Item Title 1
      <span class="accordion-icon" aria-hidden="true">▼</span>
    </button>
    <div class="accordion-content" id="panel-1">
      <div class="accordion-content-inner">
        <div class="accordion-body">Panel content goes here...</div>
      </div>
    </div>
  </div>
</div>`,

  dropdown: `<!-- Single Select Dropdown -->
<div class="dropdown" id="dropdownExample">
  <button class="dropdown-trigger" aria-haspopup="listbox" aria-expanded="false">
    <span class="dropdown-label placeholder">Select an option…</span>
    <span class="dropdown-chevron" aria-hidden="true">▼</span>
  </button>
  <div class="dropdown-menu" role="listbox">
    <div class="dropdown-search">
      <input type="text" placeholder="Search…" aria-label="Search options">
    </div>
    <ul class="dropdown-options">
      <li class="dropdown-option" data-value="val1" role="option">Option 1</li>
      <li class="dropdown-option" data-value="val2" role="option">Option 2</li>
    </ul>
  </div>
</div>`,

  tooltip: `<!-- Tooltip Trigger wrapper -->
<div class="tooltip-wrapper" data-position="top">
  <button class="tooltip-trigger" aria-describedby="tooltip-item">Hover Me</button>
  <span class="tooltip" id="tooltip-item" role="tooltip">Dynamic hint text</span>
</div>`,

  badge: `<!-- Badge Labels -->
<span class="badge success dot">Success</span>
<span class="badge error outline">Beta</span>`,

  avatar: `<!-- Profile Avatars -->
<span class="avatar md">
  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User avatar">
</span>
<span class="avatar md">MD</span>`,

  progress: `<!-- Determinate Progress -->
<div class="progress-demo">
  <div class="progress-header">
    <span class="progress-label">Upload progress</span>
    <span class="progress-value">60%</span>
  </div>
  <div class="progress-track">
    <div class="progress-fill" style="width: 60%"></div>
  </div>
  <input type="range" class="progress-slider" min="0" max="100" value="60" aria-label="Upload slider">
</div>`,

  alert: `<!-- Dismissible Alert Alert -->
<div class="alert success" role="alert">
  <span class="alert-icon" aria-hidden="true">✓</span>
  <div class="alert-content">
    <div class="alert-title">Success alert</div>
    <div class="alert-message">Action was completed successfully.</div>
  </div>
  <button class="alert-close" aria-label="Dismiss alert">✕</button>
</div>`
};
