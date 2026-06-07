export function initCommandPalette() {
  const palette = document.querySelector('.command-palette');
  const openButton = document.querySelector('[data-open-palette]');
  const closeButton = palette?.querySelector('.command-palette-close');
  const input = palette?.querySelector('.command-palette-input');
  const items = [...(palette?.querySelectorAll('.command-palette-item') || [])];

  if (!palette || !openButton || !closeButton || !input || !items.length) return;

  const setOpen = (open) => {
    palette.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      input.value = '';
      filterItems('');
      input.focus();
    }
  };

  const filterItems = (query) => {
    const normalized = query.trim().toLowerCase();
    items.forEach((item) => {
      const label = item.dataset.command?.toLowerCase() || item.textContent.toLowerCase();
      item.classList.toggle('hidden', normalized && !label.includes(normalized));
    });
  };

  openButton.addEventListener('click', () => setOpen(true));
  closeButton.addEventListener('click', () => setOpen(false));

  palette.addEventListener('click', (event) => {
    if (event.target === palette) setOpen(false);
  });

  input.addEventListener('input', (event) => filterItems(event.target.value));

  items.forEach((item) => {
    item.addEventListener('click', () => setOpen(false));
  });

  window.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      setOpen(true);
      return;
    }

    if (event.key === 'Escape' && palette.classList.contains('is-open')) {
      setOpen(false);
    }
  });
}
