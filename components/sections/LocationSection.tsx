export default function LocationSection() {
  const mapsUrl = "https://maps.app.goo.gl/9UY4PAoMbxwncSxS9";

  return (
    <section id="location" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1380px] px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-primary">
              Bird Roti Alanya
            </p>

            <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">
              Bizi
              <br />
              kolayca bul.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              Bird Roti Alanya şubesine yol tarifi almak için Google Maps'i aç.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-8 py-4 font-bold text-white transition hover:bg-secondary"
              >
                Yol Tarifi Al
              </a>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/15 bg-white px-8 py-4 font-bold transition hover:bg-black hover:text-white"
              >
                Google Maps'te Aç
              </a>
            </div>
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative min-h-[420px] overflow-hidden rounded-[32px] bg-[#f7f5f2]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(117,31,42,0.12),transparent_60%)]" />

            <div className="relative flex h-full min-h-[420px] flex-col items-center justify-center p-8 text-center">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl text-white shadow-lg">
                📍
              </div>

              <h3 className="text-3xl font-black tracking-[-0.04em]">
                Bird Roti Alanya
              </h3>

              <p className="mt-3 max-w-md text-neutral-600">
                Haritada aç, bulunduğun konumdan en hızlı rotayı gör.
              </p>

              <span className="mt-7 font-bold text-primary transition group-hover:translate-x-1">
                Yol tarifine git →
              </span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
