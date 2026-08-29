export default function TopBar() {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b-2 border-primary bg-surface-bright px-lg pr-margin-desktop dark:border-primary-fixed-dim dark:bg-surface-container-lowest">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">
            search
          </span>
          <input
            type="text"
            placeholder="Search guests, rooms, invoices..."
            className="w-full rounded-lg border border-outline-variant bg-surface-container-low py-sm pl-xl pr-md font-body-sm text-body-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="flex items-center gap-md">
        <button className="border border-primary px-md py-sm font-label-md text-label-md rounded-lg text-primary hover:bg-primary-fixed transition-colors">
          Property Switcher
        </button>
        <button className="bg-primary hover:bg-primary-container shadow-sm shadow-primary/20 px-md py-sm rounded-lg font-label-md text-label-md text-on-primary transition-colors">
          Quick Check-in
        </button>

        <div className="ml-sm flex items-center gap-sm border-l border-outline-variant pl-sm">
          <button className="p-xs text-on-surface-variant transition-all hover:text-primary">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-xs text-on-surface-variant transition-all hover:text-primary">
            <span className="material-symbols-outlined">history</span>
          </button>
          <button className="h-8 w-8 overflow-hidden rounded-full border border-outline-variant transition-all hover:border-primary">
            <img
              className="h-full w-full object-cover"
              data-alt="A professional headshot of a female hotel manager in her late 30s, wearing a crisp dark navy blazer over a light blue collared shirt. She has a warm, confident smile and short neatly styled dark hair. The background is a slightly blurred, brightly lit hotel lobby with modern decor, ensuring the focus remains entirely on her face. High-key lighting, corporate and approachable aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgFXb79Cs9WSZ7yGCCyPfNVSFqU80ZUPb_Fj9CSRdAYsR_PZJqePyAYTlCmZUZumtnG1zw3kRsNp43_jbhrSHO7ZPjJfoUMla9l-VoSri0NO7lC7PY9Urldvhv2zK4sa8TlpfUxKLJuRfii2k2ea9SvnMRsO3DFcNIQw1pUwSTKuJrVwYY6kheJAGuuGhGDDnPPCvSwxRLLyulbFJH7_-287ygAgy6Zb_8M7sKahjtFZHtAg6pPkwx"
              alt="Manager"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
