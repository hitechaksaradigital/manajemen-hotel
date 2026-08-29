const activities = [
  { name: 'Sarah Jenkins', id: '#RES-8921', action: 'Check-in', room: '402', time: '10:42 AM', status: 'Complete', statusClass: 'bg-primary-fixed text-primary' },
  { name: 'Michael Chen', id: '#RES-8922', action: 'New Booking', room: 'TBD', time: '10:15 AM', status: 'Pending', statusClass: 'bg-surface-variant text-on-surface-variant' },
  { name: 'Elena Rodriguez', id: '#RES-8919', action: 'Check-in', room: '215', time: '09:30 AM', status: 'Complete', statusClass: 'bg-primary-fixed text-primary' },
  { name: 'David Smith', id: '#RES-8923', action: 'New Booking', room: 'TBD', time: '09:05 AM', status: 'Deposit Req', statusClass: 'bg-tertiary-fixed text-tertiary' },
  { name: 'Emily Wong', id: '#RES-8910', action: 'Check-out', room: '510', time: '08:45 AM', status: 'Clean Req', statusClass: 'bg-secondary-fixed text-secondary' },
];

export default function RecentActivity() {
  return (
    <div className="rounded-xl border border-outline-variant bg-surface lg:col-span-2">
      <div className="flex items-center justify-between border-b border-outline-variant bg-surface-bright p-lg">
        <h3 className="font-headline-md text-headline-md text-on-background">Recent Activity</h3>
        <a className="font-label-sm text-label-sm text-primary hover:underline" href="#">View All</a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-primary bg-surface-container-low">
              <th className="p-md font-label-sm text-label-sm text-on-surface-variant uppercase">Guest / ID</th>
              <th className="p-md font-label-sm text-label-sm text-on-surface-variant uppercase">Action</th>
              <th className="p-md font-label-sm text-label-sm text-on-surface-variant uppercase">Room</th>
              <th className="p-md font-label-sm text-label-sm text-on-surface-variant uppercase">Time</th>
              <th className="p-md font-label-sm text-label-sm text-on-surface-variant uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="font-body-sm text-body-sm">
            {activities.map((row) => (
              <tr key={row.id} className="border-b border-outline-variant transition-colors hover:bg-surface-container-low group">
                <td className="p-md">
                  <div className="font-bold text-on-background">{row.name}</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant font-mono">{row.id}</div>
                </td>
                <td className="p-md text-on-surface-variant">{row.action}</td>
                <td className="p-md font-label-sm text-label-sm font-mono">{row.room}</td>
                <td className="p-md text-on-surface-variant">{row.time}</td>
                <td className="p-md">
                  <span className={`px-2 py-1 rounded-full font-label-sm text-label-sm uppercase ${row.statusClass}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
