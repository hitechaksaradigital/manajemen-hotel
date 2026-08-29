const actions = [
  { icon: 'add_circle', title: 'New Reservation', desc: 'Create a walk-in booking' },
  { icon: 'login', title: 'Check-in Guest', desc: 'Process arrival' },
  { icon: 'cleaning_services', title: 'Housekeeping', desc: 'Assign priority rooms' },
];

export default function QuickActions() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-outline-variant bg-surface p-lg">
      <h3 className="font-headline-md text-headline-md text-on-background mb-md">Quick Actions</h3>
      <div className="flex-1 space-y-md">
        {actions.map((action) => (
          <button
            key={action.title}
            className="group flex w-full items-center justify-between rounded-lg border border-outline-variant p-md transition-all hover:border-primary hover:bg-primary-fixed"
          >
            <div className="flex items-center gap-md">
              <span className="material-symbols-outlined text-primary transition-transform group-hover:scale-110">
                {action.icon}
              </span>
              <div className="text-left">
                <div className="font-label-md text-label-md font-bold text-on-background transition-colors group-hover:text-primary">
                  {action.title}
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">{action.desc}</div>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline-variant transition-colors group-hover:text-primary">
              chevron_right
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
