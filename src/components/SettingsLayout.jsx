import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function SettingsLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-background text-on-background font-body-md text-body-md">
      <Sidebar />

      <div className="ml-64 flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b-2 border-primary bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
          <div className="flex items-center gap-sm">
            <h2 className="font-headline-md text-headline-md text-primary hidden md:block">Settings</h2>
          </div>
          <div className="flex items-center gap-md">
            <button className="text-on-surface-variant hover:bg-surface-container-high rounded-full p-xs transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold font-manrope">
              AD
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="p-margin-mobile md:p-margin-desktop flex-1 max-w-5xl mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
