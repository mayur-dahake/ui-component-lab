export function initSidebar() {
  const card = document.querySelector('.sidebar-card');
  if (!card) return;

  const sidebar = card.querySelector('.sidebar');
  const toggle = card.querySelector('[data-toggle-sidebar]');
  const links = card.querySelectorAll('.sidebar-link');

  const setCollapsed = (collapsed) => {
    sidebar.classList.toggle('is-collapsed', collapsed);
    toggle.textContent = collapsed ? 'Expand sidebar' : 'Collapse sidebar';
  };

  toggle.addEventListener('click', () => {
    const collapsed = !sidebar.classList.contains('is-collapsed');
    setCollapsed(collapsed);
  });

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      links.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });
}
