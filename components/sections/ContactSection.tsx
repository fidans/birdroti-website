export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#f7f5f2] py-24 lg:py-32">
      <div className="mx-auto max-w-[1380px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">

          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-primary">
              İletişim
            </p>

            <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">
              Bird Roti
              <br />
              Alanya
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              Sipariş, bilgi ve diğer tüm sorularınız için bize ulaşabilirsiniz.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-neutral-500">
              Telefon
            </p>

            <a
              href="tel:+905559772120"
              className="mt-3 block text-3xl font-black tracking-[-0.03em] text-primary transition hover:opacity-75 sm:text-4xl"
            >
              +90 555 977 21 20
            </a>

            <a
              href="tel:+905559772120"
              className="mt-6 inline-flex rounded-full bg-primary px-7 py-4 font-bold text-white transition hover:bg-secondary"
            >
              Hemen Ara →
            </a>

            <div className="mt-8 border-t border-black/10 pt-6">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-neutral-400">
                E-posta
              </p>

              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="mailto:kurumsal@birdroti.com"
                  className="font-medium text-neutral-700 transition hover:text-primary"
                >
                  kurumsal@birdroti.com
                </a>

                <a
                  href="mailto:muhasebe@birdroti.com"
                  className="font-medium text-neutral-700 transition hover:text-primary"
                >
                  muhasebe@birdroti.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
