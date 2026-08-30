export default function BranchesSection() {
  return (
    <section id="branches" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1380px] px-6 lg:px-10">

        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-primary">
            Şubeler
          </p>

          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">
            Bird Roti
            <br />
            nerede?
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Lezzet aynı, adresler çoğalıyor. Bird Roti Alanya'da başladı;
            sıradaki durağımız İstanbul.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          <article className="relative overflow-hidden rounded-[32px] bg-[#751f2a] p-8 text-white sm:p-10">
            <div className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider sm:right-8 sm:top-8 sm:px-4 sm:py-2 sm:text-xs">
              Açık
            </div>

            <p className="pt-10 text-sm font-bold uppercase tracking-[0.18em] text-white/60 sm:pt-0">
              Bird Roti
            </p>

            <h3 className="mt-4 text-4xl font-black tracking-[-0.04em]">
              Alanya
            </h3>

            <p className="mt-5 max-w-md leading-7 text-white/75">
              Bird Roti'nin ilk adresi. Alanya'da seni bekliyoruz.
            </p>

            <a
              href="https://maps.app.goo.gl/9UY4PAoMbxwncSxS9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-bold text-[#751f2a] transition hover:bg-white/90"
            >
              Yol Tarifi →
            </a>
          </article>

          <article className="relative overflow-hidden rounded-[32px] bg-[#f7f5f2] p-8 sm:p-10">
            <div className="absolute right-4 top-4 rounded-full bg-[#751f2a]/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#751f2a] sm:right-8 sm:top-8 sm:px-4 sm:py-2 sm:text-xs">
              Yükleniyor...
            </div>

            <p className="pt-10 text-sm font-bold uppercase tracking-[0.18em] text-neutral-400 sm:pt-0">
              Sıradaki Durağımız
            </p>

            <h3 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#171717]">
              Bird Roti Pendik
            </h3>

            <p className="mt-5 max-w-md leading-7 text-neutral-600">
              İstanbul'daki ilk Bird Roti için hazırlıklarımız devam ediyor.
              Çok yakında.
            </p>

            <div className="mt-8 inline-flex rounded-full bg-[#751f2a] px-6 py-3 font-bold text-white">
              Çok Yakında
            </div>
          </article>

        </div>

        <div className="mt-8 overflow-hidden rounded-[32px] bg-[#f7f5f2] p-6 sm:p-10">
          <div className="relative min-h-[360px] overflow-hidden rounded-[24px] bg-[#eeeae5]">

            <div className="absolute inset-0 opacity-30">
              <div className="absolute left-[8%] top-[25%] h-px w-[84%] rotate-[10deg] bg-[#751f2a]" />
              <div className="absolute left-[15%] top-[48%] h-px w-[70%] rotate-[-8deg] bg-[#751f2a]" />
              <div className="absolute left-[30%] top-[15%] h-[300px] w-px rotate-[20deg] bg-[#751f2a]" />
              <div className="absolute right-[30%] top-[10%] h-[300px] w-px rotate-[-18deg] bg-[#751f2a]" />
            </div>

            <div className="absolute left-[8%] top-[54%] sm:left-[25%] sm:top-[62%]">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-[#751f2a]/15 blur-md" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#751f2a] text-xl text-white shadow-lg">
                  📍
                </div>
              </div>

              <div className="mt-3 rounded-xl bg-white px-4 py-3 shadow-md">
                <p className="text-xs font-black uppercase tracking-wider text-[#751f2a]">
                  Şu An Buradayız
                </p>
                <p className="mt-1 font-black text-[#171717]">
                  Bird Roti Alanya
                </p>
              </div>
            </div>

            <div className="absolute right-[5%] top-[12%] sm:right-[18%] sm:top-[25%]">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-[#751f2a]/15 blur-md" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#751f2a] text-xl text-white shadow-lg">
                  📍
                </div>
              </div>

              <div className="mt-3 rounded-xl bg-white px-4 py-3 shadow-md">
                <p className="text-xs font-black uppercase tracking-wider text-[#751f2a]">
                  Sıradaki Durağımız
                </p>
                <p className="mt-1 font-black text-[#171717]">
                  Bird Roti Pendik
                </p>
              </div>
            </div>

            <div className="absolute left-[28%] top-[43%] h-[2px] w-[42%] origin-left rotate-[-24deg] border-t-2 border-dashed border-[#751f2a]/40 sm:left-[37%] sm:top-[45%] sm:w-[30%]" />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 px-4 py-2.5 text-xs font-bold text-[#171717] shadow-sm backdrop-blur sm:bottom-6 sm:left-6 sm:translate-x-0 sm:px-5 sm:py-3 sm:text-sm">
              Alanya → İstanbul
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
