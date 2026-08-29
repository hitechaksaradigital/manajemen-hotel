const stats = [
  {
    label: 'Occupancy Rate',
    value: '85%',
    trend: '+5%',
    icon: 'hotel',
    colorClass: 'border-primary hover:border-primary',
    accentBg: 'bg-primary/5',
    iconColor: 'text-primary bg-primary-fixed',
    badgeColor: 'text-secondary bg-secondary-fixed',
    badgeIcon: 'trending_up',
  },
  {
    label: 'Total Revenue',
    value: 'IDR 45M',
    caption: 'Est. completion by midnight',
    icon: 'payments',
    colorClass: 'border-outline-variant hover:border-primary',
    accentBg: 'bg-secondary/5',
    iconColor: 'text-secondary bg-secondary-fixed',
    trend: null,
  },
  {
    label: 'New Bookings',
    value: '12',
    icon: 'book_online',
    colorClass: 'border-outline-variant hover:border-tertiary',
    accentBg: 'bg-tertiary/5',
    iconColor: 'text-tertiary bg-tertiary-fixed',
    trend: null,
    progress: [1, 1, 0.2, 0.2],
  },
  {
    label: 'Rooms to Clean',
    value: '8',
    warning: '2 High Priority',
    icon: 'cleaning_services',
    colorClass: 'border-outline-variant hover:border-primary',
    accentBg: 'bg-outline-variant/10',
    iconColor: 'text-on-surface-variant bg-surface-variant',
    trend: null,
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`group relative overflow-hidden rounded-xl border bg-surface p-lg transition-colors ${stat.colorClass}`}
        >
          <div
            className={`absolute -right-4 -top-4 h-24 w-24 rounded-full transition-transform group-hover:scale-110 ${stat.accentBg}`}
          />
          <div className="relative z-10 flex items-start justify-between mb-md">
            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
              {stat.label}
            </p>
            <span className={`material-symbols-outlined p-sm rounded-lg ${stat.iconColor}`}>{stat.icon}</span>
          </div>

          <div className="relative z-10 flex items-baseline gap-sm">
            <h3 className="font-display-lg text-display-lg text-on-background">{stat.value}</h3>
            {stat.trend && (
              <span
                className={`font-label-sm text-label-sm flex items-center gap-1 rounded-full px-2 py-1 ${stat.badgeColor}`}
              >
                <span className="material-symbols-outlined text-[12px]">{stat.badgeIcon}</span>
                {stat.trend}
              </span>
            )}
          </div>

          {stat.caption && (
            <p className="font-label-sm text-label-sm text-on-surface-variant relative z-10 mt-sm">
              {stat.caption}
            </p>
          )}

          {stat.warning && (
            <p className="font-label-sm text-label-sm text-error relative z-10 mt-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">warning</span>
              {stat.warning}
            </p>
          )}

          {stat.progress && (
            <div className="mt-sm flex gap-xs relative z-10">
              {stat.progress.map((fill, idx) => (
                <span
                  key={idx}
                  className={`h-1 w-full rounded-full ${fill ? 'bg-tertiary' : 'bg-tertiary/20'}`}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
