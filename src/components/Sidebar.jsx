import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { icon: 'dashboard', label: 'Dashboard', to: '/' },
  { icon: 'grid_view', label: 'Room Map', to: '/room-map' },
  { icon: 'calendar_month', label: 'Reservations', to: '/reservations' },
  { icon: 'sync_alt', label: 'Check-in/Out', to: '/check-in-out' },
  { icon: 'cleaning_services', label: 'Housekeeping', to: '/housekeeping' },
  { icon: 'group', label: 'Guest CRM', to: '/guest-crm' },
  { icon: 'settings', label: 'Settings', to: '/settings' },
];

export default function Sidebar() {
  const location = useLocation();

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <aside className="bg-surface dark:bg-on-background fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-outline-variant py-md px-sm dark:border-outline">
      <div className="px-md pb-lg pt-sm">
        <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">
          LuxeManage PMS
        </h1>
        <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant mt-1">
          Grand Plaza Branch
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto custom-scrollbar">
        <ul className="space-y-sm">
          {navItems.map((item) => {
            const active = isActive(item.to);
            return (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={`flex items-center gap-md rounded-lg px-md py-sm transition-colors ${
                    active
                      ? 'text-primary dark:text-primary-fixed-dim font-bold border-r-2 border-primary dark:border-primary-fixed-dim opacity-80 bg-surface-container dark:bg-surface-container-highest'
                      : 'text-on-surface-variant dark:text-surface-variant hover:bg-surface-container dark:hover:bg-surface-container-highest'
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >
                    {item.icon}
                  </span>
                  <span className="font-label-md text-label-md">{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto pt-md border-t border-outline-variant">
        <button className="flex w-full items-center justify-center gap-sm bg-primary px-md py-sm rounded-lg font-label-md text-label-md text-on-primary hover:bg-primary-container transition-colors mb-md">
          <span className="material-symbols-outlined text-[18px]">add</span>
          New Reservation
        </button>
        <ul className="space-y-sm">
          <li>
            <a
              href="#"
              className="flex items-center gap-md rounded-lg px-md py-sm text-on-surface-variant dark:text-surface-variant hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors"
            >
              <span className="material-symbols-outlined">help</span>
              <span className="font-label-md text-label-md">Help</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-md rounded-lg px-md py-sm text-on-surface-variant dark:text-surface-variant hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors"
            >
              <span className="material-symbols-outlined">logout</span>
              <span className="font-label-md text-label-md">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
