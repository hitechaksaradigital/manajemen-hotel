import { useRef } from 'react';

export default function AddRoom() {
  const formRef = useRef(null);

  return (
    <div>
      <div className="mb-lg">
        <nav aria-label="Breadcrumb" className="flex text-on-surface-variant mb-sm">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a className="inline-flex items-center font-label-md text-label-md hover:text-primary transition-colors" href="#">
                Settings
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-[16px] mx-1">chevron_right</span>
                <a className="font-label-md text-label-md hover:text-primary transition-colors" href="/settings">Room Management</a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-[16px] mx-1">chevron_right</span>
                <span className="font-label-md text-label-md text-on-surface">Add Room</span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="font-headline-lg text-headline-lg text-on-surface">Tambah Data Kamar Hotel</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
          Masukkan detail informasi untuk mendaftarkan kamar baru ke dalam sistem operasional.
        </p>
      </div>

      <form ref={formRef} className="space-y-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
          <div className="md:col-span-8 space-y-lg">
            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-sm">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-md flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary">info</span>
                Informasi Dasar
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                <div className="col-span-1 sm:col-span-2">
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-xs" htmlFor="room_number">
                    Nomor Kamar <span className="text-error">*</span>
                  </label>
                  <input
                    id="room_number"
                    name="room_number"
                    required
                    placeholder="Misal: 101"
                    type="text"
                    className="w-full rounded border border-outline-variant bg-surface-container-lowest px-md py-sm font-jetbrains text-lg font-bold text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-xs" htmlFor="floor">
                    Lantai <span className="text-error">*</span>
                  </label>
                  <select
                    id="floor"
                    name="floor"
                    required
                    className="w-full appearance-none rounded border border-outline-variant bg-surface-container-lowest px-md py-sm font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23404751' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                      backgroundSize: '16px',
                    }}
                  >
                    <option disabled selected value="">
                      Pilih Lantai
                    </option>
                    <option value="1">Lantai 1</option>
                    <option value="2">Lantai 2</option>
                    <option value="3">Lantai 3</option>
                    <option value="4">Lantai 4</option>
                    <option value="5">Lantai 5</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-xs" htmlFor="room_type">
                    Tipe Kamar <span className="text-error">*</span>
                  </label>
                  <select
                    id="room_type"
                    name="room_type"
                    required
                    className="w-full appearance-none rounded border border-outline-variant bg-surface-container-lowest px-md py-sm font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23404751' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                      backgroundSize: '16px',
                    }}
                  >
                    <option disabled selected value="">
                      Pilih Tipe
                    </option>
                    <option value="standard">Standard</option>
                    <option value="deluxe">Deluxe</option>
                    <option value="suite">Suite</option>
                    <option value="executive">Executive</option>
                  </select>
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-sm">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-md flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary">group</span>
                Kapasitas & Tempat Tidur
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-md items-end">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Kapasitas Dewasa</label>
                  <div className="flex items-center border border-outline-variant rounded overflow-hidden bg-surface-container-lowest">
                    <button
                      type="button"
                      className="px-sm py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors"
                      onClick={() => {
                        const el = document.getElementById('adult_cap');
                        el.value = Math.max(1, Number(el.value) - 1);
                      }}
                    >
                      <span className="material-symbols-outlined text-[20px]">remove</span>
                    </button>
                    <input
                      id="adult_cap"
                      name="adult_cap"
                      readOnly
                      type="number"
                      value={2}
                      min={1}
                      max={10}
                      className="w-full border-none text-center font-jetbrains font-bold text-on-surface bg-transparent p-sm focus:ring-0"
                    />
                    <button
                      type="button"
                      className="px-sm py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors"
                      onClick={() => {
                        const el = document.getElementById('adult_cap');
                        el.value = Math.min(10, Number(el.value) + 1);
                      }}
                    >
                      <span className="material-symbols-outlined text-[20px]">add</span>
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Kapasitas Anak</label>
                  <div className="flex items-center border border-outline-variant rounded overflow-hidden bg-surface-container-lowest">
                    <button
                      type="button"
                      className="px-sm py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors"
                      onClick={() => {
                        const el = document.getElementById('child_cap');
                        el.value = Math.max(0, Number(el.value) - 1);
                      }}
                    >
                      <span className="material-symbols-outlined text-[20px]">remove</span>
                    </button>
                    <input
                      id="child_cap"
                      name="child_cap"
                      readOnly
                      type="number"
                      value={0}
                      min={0}
                      max={10}
                      className="w-full border-none text-center font-jetbrains font-bold text-on-surface bg-transparent p-sm focus:ring-0"
                    />
                    <button
                      type="button"
                      className="px-sm py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors"
                      onClick={() => {
                        const el = document.getElementById('child_cap');
                        el.value = Math.min(10, Number(el.value) + 1);
                      }}
                    >
                      <span className="material-symbols-outlined text-[20px]">add</span>
                    </button>
                  </div>
                </div>
                <div className="col-span-1 sm:col-span-2 mt-sm">
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-sm">Tipe Tempat Tidur</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-sm">
                    {[
                      { value: 'single', label: 'Single', icon: 'bed' },
                      { value: 'twin', label: 'Twin', icon: 'bed' },
                      { value: 'queen', label: 'Queen', icon: 'bed', defaultChecked: true },
                      { value: 'king', label: 'King', icon: 'king_bed' },
                    ].map((bed) => (
                      <label key={bed.value} className="cursor-pointer">
                        <input
                          type="radio"
                          name="bed_type"
                          value={bed.value}
                          defaultChecked={!!bed.defaultChecked}
                          className="peer sr-only"
                        />
                        <div className="rounded-lg border border-outline-variant p-sm text-center transition-all hover:border-primary hover:bg-primary-fixed-dim/10 peer-checked:border-primary peer-checked:bg-primary-container peer-checked:text-on-primary-container">
                          <span className="material-symbols-outlined mb-xs">{bed.icon}</span>
                          <span className="block font-label-md text-label-md">{bed.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-sm">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-md flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary">payments</span>
                Harga Dasar & Fasilitas
              </h3>
              <div className="mb-md">
                <label className="block font-label-md text-label-md text-on-surface-variant mb-xs" htmlFor="base_price">
                  Harga Dasar per Malam (IDR) <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-sm flex items-center pointer-events-none">
                    <span className="font-jetbrains font-bold text-on-surface-variant">Rp</span>
                  </div>
                  <input
                    id="base_price"
                    name="base_price"
                    required
                    placeholder="0"
                    type="text"
                    className="w-full rounded border border-outline-variant bg-surface-container-lowest pl-xl pr-md py-sm font-jetbrains text-right text-lg font-bold text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    onInput={(e) => {
                      const raw = e.target.value.replace(/\D/g, '');
                      e.target.value = raw ? Number(raw).toLocaleString('id-ID') : '';
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-sm">
                  Fasilitas Kamar (Pilih yang sesuai)
                </label>
                <div className="flex flex-wrap gap-sm">
                  {[
                    { value: 'wifi', label: 'Wi-Fi', icon: 'wifi', defaultChecked: true },
                    { value: 'ac', label: 'AC', icon: 'ac_unit', defaultChecked: true },
                    { value: 'tv', label: 'TV', icon: 'tv', defaultChecked: true },
                    { value: 'minibar', label: 'Minibar', icon: 'kitchen' },
                    { value: 'bathtub', label: 'Bathtub', icon: 'bathtub' },
                    { value: 'city_view', label: 'City View', icon: 'location_city' },
                  ].map((amenity) => (
                    <label key={amenity.value} className="cursor-pointer">
                      <input
                        type="checkbox"
                        name="amenities[]"
                        value={amenity.value}
                        defaultChecked={!!amenity.defaultChecked}
                        className="peer sr-only"
                      />
                      <div className="flex items-center gap-xs rounded-full border border-outline-variant px-sm py-xs font-label-sm text-label-sm transition-colors hover:bg-surface-container peer-checked:bg-secondary-fixed peer-checked:text-on-secondary-fixed peer-checked:border-secondary">
                        <span className="material-symbols-outlined text-[16px]">{amenity.icon}</span>
                        {amenity.label}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="md:col-span-4 space-y-lg">
            <section className="flex h-full flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-sm">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-md flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary">analytics</span>
                Status & Catatan
              </h3>
              <div className="mb-md">
                <label className="block font-label-md text-label-md text-on-surface-variant mb-xs" htmlFor="initial_status">
                  Status Awal
                </label>
                <select
                  id="initial_status"
                  name="initial_status"
                  className="w-full appearance-none rounded border border-outline-variant bg-surface-container-lowest px-md py-sm font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23404751' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    backgroundSize: '16px',
                  }}
                >
                  <option value="vacant_clean">Vacant / Clean (VC)</option>
                  <option value="maintenance">Maintenance (OOO)</option>
                </select>
              </div>
              <div className="flex flex-1 flex-col">
                <label className="block font-label-md text-label-md text-on-surface-variant mb-xs" htmlFor="description">
                  Deskripsi / Catatan Internal
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Tambahkan catatan khusus mengenai kamar ini (opsional)..."
                  rows={5}
                  className="flex-1 resize-none rounded border border-outline-variant bg-surface-container-lowest px-md py-sm font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
            </section>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 md:static bg-surface-container-lowest md:bg-transparent border-t border-outline-variant md:border-none z-20 flex justify-end gap-md p-margin-mobile md:p-0">
          <button
            type="button"
            className="rounded border border-primary px-lg py-sm font-label-md text-label-md text-primary transition-colors hover:bg-primary-fixed-dim/10"
          >
            Batal
          </button>
          <button
            type="submit"
            className="rounded bg-primary px-lg py-sm font-label-md text-label-md text-on-primary transition-colors hover:bg-primary/90 shadow-sm"
          >
            Simpan Data Kamar
          </button>
        </div>
        <div className="h-20 md:hidden" />
      </form>
    </div>
  );
}
