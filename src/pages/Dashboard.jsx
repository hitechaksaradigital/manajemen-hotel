import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import StatsGrid from '../components/StatsGrid';
import Charts from '../components/Charts';
import RecentActivity from '../components/RecentActivity';
import QuickActions from '../components/QuickActions';

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-background text-on-background font-body-md text-body-md">
      <Sidebar />

      <div className="ml-64 flex min-w-0 flex-1 flex-col">
        <TopBar />
        <main className="custom-scrollbar flex-1 overflow-y-auto bg-surface-container-low p-lg">
          <div className="mx-auto max-w-[1600px] space-y-lg">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-background">Dashboard Overview</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  Today's snapshot: Wednesday, October 25th
                </p>
              </div>
              <div className="flex gap-sm">
                <button className="flex items-center gap-xs border border-outline-variant bg-surface px-md py-xs rounded font-label-sm text-label-sm hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  Export
                </button>
              </div>
            </div>

            <StatsGrid />
            <Charts />

            <div className="grid grid-cols-1 gap-gutter lg:grid-cols-3">
              <RecentActivity />
              <QuickActions />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
