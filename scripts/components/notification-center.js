export function initNotificationCenter() {
  const card = document.querySelector('.notification-center-card');
  if (!card) return;

  const toggle = card.querySelector('[data-toggle-notifications]');
  const panel = card.querySelector('.notification-panel');
  const dismissButtons = card.querySelectorAll('.notification-dismiss');
  const clearAll = card.querySelector('[data-clear-notifications]');

  const updateState = () => {
    const isOpen = panel.classList.contains('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  };

  toggle.addEventListener('click', () => {
    panel.classList.toggle('is-open');
    updateState();
  });

  dismissButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.notification-item');
      item?.remove();
    });
  });

  clearAll?.addEventListener('click', () => {
    const items = card.querySelectorAll('.notification-item');
    items.forEach((item) => item.remove());
  });

  updateState();
}
