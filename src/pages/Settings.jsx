import { Link } from 'react-router-dom';

const cards = [
  { icon: 'meeting_room', title: 'Room Management', desc: 'Add, edit, or archive rooms and their rates.', to: '/settings/rooms/add' },
  { icon: 'grid_view', title: 'Room Map', desc: 'Visual status board and housekeeping queue.', to: '/room-map' },
  { icon: 'payments', title: 'Rates & Packages', desc: 'Seasonal pricing, promotions, and packages.', to: '/settings/rates' },
  { icon: 'category', title: 'Room Types', desc: 'Manage standard, deluxe, suite, and more.', to: '/settings/room-types' },
];

export default function SettingsHome() {
  return (
    <div>
      <div className="mb-lg">
        <nav aria-label="Breadcrumb" className="flex text-on-surface-variant mb-sm">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <span className="font-label-md text-label-md">Settings</span>
            </li>
          </ol>
        </nav>
        <h1 className="font-headline-lg text-headline-lg text-on-surface">Room Management</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
          Configure rooms, types, availability, and related operational data.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {cards.map((card) => (
          <Link
            key={card.title}
            to={card.to}
            className="group rounded-xl border border-outline-variant bg-surface-container-lowest p-lg transition-colors hover:border-primary"
          >
            <div className="flex items-start gap-sm mb-md">
              <span className="material-symbols-outlined text-primary mt-0.5">{card.icon}</span>
              <h3 className="font-headline-md text-headline-md text-on-surface">{card.title}</h3>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{card.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
