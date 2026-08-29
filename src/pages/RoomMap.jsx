import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import { supabase } from '../lib/supabaseClient';

const statusConfig = {
  available: { label: 'Tersedia', color: 'bg-primary-fixed text-primary' },
  occupied: { label: 'Terisi', color: 'bg-tertiary-fixed text-tertiary' },
  cleaning: { label: 'Cleaning', color: 'bg-secondary-fixed text-secondary' },
  maintenance: { label: 'Maintenance', color: 'bg-surface-variant text-on-surface-variant' },
  vacant_clean: { label: 'Tersedia', color: 'bg-primary-fixed text-primary' },
};

export default function RoomMap() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const { data, error: fetchError } = await supabase
        .from('rooms')
        .select('*')
        .order('number', { ascending: true });

      setLoading(false);

      if (fetchError) {
        setError(fetchError.message);
        return;
      }

      setRooms(data || []);
    };

    fetchRooms();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-background text-on-background font-body-md text-body-md">
      <Sidebar />
      <div className="ml-64 flex min-w-0 flex-1 flex-col">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-lg custom-scrollbar bg-surface-container-low">
          <div className="mx-auto max-w-[1600px] space-y-lg">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-background">Room Map</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  Daftar kamar dan status operasional saat ini.
                </p>
              </div>
              <div className="flex gap-sm">
                <button className="flex items-center gap-xs border border-outline-variant bg-surface px-md py-xs rounded font-label-sm text-label-sm hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-[16px]">filter_list</span>
                  Filter
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-lg border border-error bg-error-container px-md py-sm text-error">
                Gagal memuat data kamar: {error}
              </div>
            )}

            {loading && (
              <div className="py-lg text-center text-on-surface-variant">Memuat data kamar...</div>
            )}

            {!loading && !error && rooms.length === 0 && (
              <div className="py-lg text-center text-on-surface-variant">Belum ada data kamar.</div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
              {rooms.map((room) => {
                const status = statusConfig[room.status] || statusConfig.vacant_clean;
                return (
                  <div
                    key={room.id}
                    className="group rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-sm transition-colors hover:border-primary"
                  >
                    <div className="flex items-start justify-between mb-md">
                      <div>
                        <div className="font-display-lg text-display-lg text-on-background leading-none">
                          {room.number}
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant mt-xs">
                          Lantai {room.floor}
                        </div>
                      </div>
                      <span className={`rounded-full px-2 py-1 font-label-sm text-label-sm uppercase ${status.color}`}>
                        {status.label}
                      </span>
                    </div>

                    <div className="space-y-sm">
                      <div className="flex items-center gap-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px]">meeting_room</span>
                        <span className="font-body-sm text-body-sm capitalize">{room.type}</span>
                      </div>
                      <div className="flex items-center gap-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px]">bed</span>
                        <span className="font-body-sm text-body-sm capitalize">{room.bed_type}</span>
                      </div>
                      <div className="flex items-center gap-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px]">payments</span>
                        <span className="font-body-sm text-body-sm font-jetbrains">
                          Rp {Number(room.base_price).toLocaleString('id-ID')}
                        </span>
                      </div>
                    </div>

                    <div className="mt-md flex gap-sm">
                      <button className="flex-1 rounded-lg border border-outline-variant py-sm font-label-md text-label-sm text-primary hover:bg-primary-fixed transition-colors">
                        Detail
                      </button>
                      <button className="rounded-lg border border-outline-variant p-sm text-on-surface-variant hover:bg-surface-container transition-colors">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
