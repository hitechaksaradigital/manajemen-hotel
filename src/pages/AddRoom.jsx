import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function AddRoom() {
  const [form, setForm] = useState({
    room_number: '',
    floor: '',
    room_type: '',
    adult_cap: 2,
    child_cap: 0,
    bed_type: 'queen',
    base_price: '',
    amenities: ['wifi', 'ac', 'tv'],
    initial_status: 'vacant_clean',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    if (field === 'amenities') {
      setForm((prev) => ({
        ...prev,
        amenities: value
          ? [...prev.amenities, e.target.value]
          : prev.amenities.filter((a) => a !== e.target.value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const price = Number(String(form.base_price).replace(/\./g, '')) || 0;

    const { data, error: insertError } = await supabase
      .from('rooms')
      .insert({
        number: form.room_number.trim(),
        floor: Number(form.floor),
        type: form.room_type,
        adult_capacity: form.adult_cap,
        child_capacity: form.child_cap,
        bed_type: form.bed_type,
        base_price: price,
        amenities: form.amenities,
        status: form.initial_status,
        description: form.description.trim() || null,
      })
      .select()
      .single();

    setLoading(false);

    if (insertError) {
      setError(insertError.message || 'Gagal menyimpan data kamar.');
      return;
    }

    setSuccess(true);
    setForm({
      room_number: '',
      floor: '',
      room_type: '',
      adult_cap: 2,
      child_cap: 0,
      bed_type: 'queen',
      base_price: '',
      amenities: ['wifi', 'ac', 'tv'],
      initial_status: 'vacant_clean',
      description: '',
    });
  };

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

      {error && (
        <div className="mb-lg rounded-lg border border-error bg-error-container px-md py-sm text-error">
          {error}
        </div>
      )}
      {success && (
        <div className="mb-lg rounded-lg border border-primary bg-primary-fixed px-md py-sm text-primary">
          Data kamar berhasil disimpan.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-lg">
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
                    value={form.room_number}
                    onChange={update('room_number')}
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
                    value={form.floor}
                    onChange={update('floor')}
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
                    <option disabled value="">
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
                    value={form.room_type}
                    onChange={update('room_type')}
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
                    <option disabled value="">
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
                      onClick={() => setForm((prev) => ({ ...prev, adult_cap: Math.max(1, prev.adult_cap - 1) }))}
                    >
                      <span className="material-symbols-outlined text-[20px]">remove</span>
                    </button>
                    <input
                      readOnly
                      type="number"
                      value={form.adult_cap}
                      min={1}
                      max={10}
                      className="w-full border-none text-center font-jetbrains font-bold text-on-surface bg-transparent p-sm focus:ring-0"
                    />
                    <button
                      type="button"
                      className="px-sm py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors"
                      onClick={() => setForm((prev) => ({ ...prev, adult_cap: Math.min(10, prev.adult_cap + 1) }))}
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
                      onClick={() => setForm((prev) => ({ ...prev, child_cap: Math.max(0, prev.child_cap - 1) }))}
                    >
                      <span className="material-symbols-outlined text-[20px]">remove</span>
                    </button>
                    <input
                      readOnly
                      type="number"
                      value={form.child_cap}
                      min={0}
                      max={10}
                      className="w-full border-none text-center font-jetbrains font-bold text-on-surface bg-transparent p-sm focus:ring-0"
                    />
                    <button
                      type="button"
                      className="px-sm py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors"
                      onClick={() => setForm((prev) => ({ ...prev, child_cap: Math.min(10, prev.child_cap + 1) }))}
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
                      { value: 'queen', label: 'Queen', icon: 'bed' },
                      { value: 'king', label: 'King', icon: 'king_bed' },
                    ].map((bed) => (
                      <label key={bed.value} className="cursor-pointer">
                        <input
                          type="radio"
                          name="bed_type"
                          value={bed.value}
                          checked={form.bed_type === bed.value}
                          onChange={update('bed_type')}
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
                    value={form.base_price}
                    onChange={(e) => {
                      const raw = e.target.value.replace(/[^\d]/g, '');
                      e.target.value = raw ? Number(raw).toLocaleString('id-ID') : '';
                      setForm((prev) => ({ ...prev, base_price: e.target.value }));
                    }}
                    required
                    placeholder="0"
                    type="text"
                    className="w-full rounded border border-outline-variant bg-surface-container-lowest pl-xl pr-md py-sm font-jetbrains text-right text-lg font-bold text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-sm">
                  Fasilitas Kamar (Pilih yang sesuai)
                </label>
                <div className="flex flex-wrap gap-sm">
                  {[
                    { value: 'wifi', label: 'Wi-Fi', icon: 'wifi' },
                    { value: 'ac', label: 'AC', icon: 'ac_unit' },
                    { value: 'tv', label: 'TV', icon: 'tv' },
                    { value: 'minibar', label: 'Minibar', icon: 'kitchen' },
                    { value: 'bathtub', label: 'Bathtub', icon: 'bathtub' },
                    { value: 'city_view', label: 'City View', icon: 'location_city' },
                  ].map((amenity) => (
                    <label key={amenity.value} className="cursor-pointer">
                      <input
                        type="checkbox"
                        name="amenities[]"
                        value={amenity.value}
                        checked={form.amenities.includes(amenity.value)}
                        onChange={update('amenities')}
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
                  value={form.initial_status}
                  onChange={update('initial_status')}
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
                  value={form.description}
                  onChange={update('description')}
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
            onClick={() =>
              setForm({
                room_number: '',
                floor: '',
                room_type: '',
                adult_cap: 2,
                child_cap: 0,
                bed_type: 'queen',
                base_price: '',
                amenities: ['wifi', 'ac', 'tv'],
                initial_status: 'vacant_clean',
                description: '',
              })
            }
            className="rounded border border-primary px-lg py-sm font-label-md text-label-md text-primary transition-colors hover:bg-primary-fixed-dim/10"
            type="button"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={loading}
            className="rounded bg-primary px-lg py-sm font-label-md text-label-md text-on-primary transition-colors hover:bg-primary/90 shadow-sm disabled:opacity-70"
          >
            {loading ? 'Menyimpan...' : 'Simpan Data Kamar'}
          </button>
        </div>
        <div className="h-20 md:hidden" />
      </form>
    </div>
  );
}
