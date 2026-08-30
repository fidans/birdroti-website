import Image from "next/image";
import OrderSection from "@/components/sections/OrderSection";
import LocationSection from "@/components/sections/LocationSection";
import ContactSection from "@/components/sections/ContactSection";
import FavoritesSection from "@/components/sections/FavoritesSection";
import SocialSection from "@/components/sections/SocialSection";
import PaymentSection from "@/components/sections/PaymentSection";
import BranchesSection from "@/components/sections/BranchesSection";
import FranchiseSection from "@/components/sections/FranchiseSection";
import QualitySection from "@/components/sections/QualitySection";

const products = [
  {
    name: "Rotisserie",
    image: "/images/products/herb-roti.png",
    description: "Yavaş pişen, dışı kızarmış, içi sulu gerçek rotisserie tavuk.",
  },
  {
    name: "Crispy Burger",
    image: "/images/products/crispy-burger.png",
    description: "Çıtır tavuk, cheddar ve Bird Roti dokunuşuyla.",
  },
  {
    name: "Tenders",
    image: "/images/products/tenders-2.png",
    description: "Özel pane, güçlü çıtırlık ve signature soslar.",
  },
  {
    name: "Wrap",
    image: "/images/products/spicy-roti-wrap.png",
    description: "Bol tavuk, sıcak lavaş ve dengeli soslar.",
  },
  {
    name: "Bowls",
    image: "/images/products/asian-bowl.png",
    description: "Tavuk, basmati ve taze eşlikçilerle dolu tabaklar.",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[104px] max-w-[1380px] items-center justify-between px-6 lg:px-10">

          <a href="#top" className="flex items-center gap-4">
            <Image
              src="/logos/bird-roti-symbol.svg"
              alt="Bird Roti"
              width={74}
              height={74}
              priority
              className="h-[66px] w-auto"
            />

            <div className="leading-[0.82]">
              <div className="text-[28px] font-black tracking-[-0.045em] text-primary">
                BIRD
              </div>
              <div className="text-[28px] font-black tracking-[-0.045em] text-primary">
                ROTI
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-[16px] font-bold lg:flex">
            <a href="#menu" className="transition hover:text-primary">
              Menü
            </a>

            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-2 transition hover:text-primary"
              >
                Kurumsal
                <span className="text-xs transition-transform group-hover:rotate-180">
                  ↓
                </span>
              </button>

              <div className="invisible absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2 rounded-2xl border border-black/5 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <a
                  href="#story"
                  className="block rounded-xl px-4 py-3 transition hover:bg-[#f7f5f2]"
                >
                  <span className="block font-bold">Bird Roti</span>
                  <span className="mt-1 block text-xs text-neutral-500">
                    Hikayemiz
                  </span>
                </a>

                <a
                  href="#branches"
                  className="block rounded-xl px-4 py-3 transition hover:bg-[#f7f5f2]"
                >
                  <span className="block font-bold">Şubeler</span>
                  <span className="mt-1 block text-xs text-neutral-500">
                    Alanya & Pendik
                  </span>
                </a>

                <a
                  href="#quality"
                  className="block rounded-xl px-4 py-3 transition hover:bg-[#f7f5f2]"
                >
                  <span className="block font-bold">
                    Kalite & İş Ortaklarımız
                  </span>
                  <span className="mt-1 block text-xs text-neutral-500">
                    Standartlarımız
                  </span>
                </a>

                <a
                  href="#franchise"
                  className="block rounded-xl px-4 py-3 transition hover:bg-[#f7f5f2]"
                >
                  <span className="block font-bold">Franchise</span>
                  <span className="mt-1 block text-xs text-neutral-500">
                    Büyüme modelimiz
                  </span>
                </a>
              </div>
            </div>

            <a href="#restaurant" className="transition hover:text-primary">
              Mekan
            </a>

            <a href="#location" className="transition hover:text-primary">
              Konum
            </a>

            <a href="#contact" className="transition hover:text-primary">
              İletişim
            </a>
          </nav>

          <a
            href="#order"
            className="rounded-full bg-[#25D366] px-7 py-4 text-[15px] font-bold text-white transition duration-300 hover:scale-[1.03] hover:bg-[#1ebe5d]"
          >
            Sipariş Ver
          </a>

        </div>
      </header>

      <SocialSection />


      {/* HERO */}
      <section
        id="top"
        className="relative overflow-hidden bg-[#f7f5f2]"
      >
        {/* decorative blur */}
        <div className="pointer-events-none absolute right-[-15%] top-[5%] h-[650px] w-[650px] rounded-full bg-primary/[0.07] blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1380px] items-center px-6 py-8 sm:py-14 lg:min-h-[calc(100vh-86px)] lg:grid-cols-[0.82fr_1.18fr] lg:px-10 lg:py-8">

          {/* HERO TEXT */}
          <div className="relative z-20 max-w-[610px] pt-1 lg:pt-0">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-primary sm:mb-7 sm:text-sm sm:tracking-[0.28em]">
              The Best Rotisserie in Town
            </p>

            <h1 className="text-[48px] font-black leading-[0.9] tracking-[-0.065em] text-[#171717] sm:text-[72px] lg:text-[88px] xl:text-[96px]">
              Tavuğun
              <br />
              en lezzetli
              <br />
              halleri.
            </h1>

            <p className="mt-5 max-w-[510px] text-[16px] leading-[1.55] text-neutral-600 sm:mt-8 sm:text-[18px] lg:text-[19px]">
              Rotisserie tavuk, çıtır burger, tenders, wrap, bowl ve Bird Roti
              signature sosları.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-9">
              <a
                href="#menu"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-bold text-white transition duration-300 hover:scale-[1.03] hover:bg-secondary"
              >
                Menüyü İncele
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#restaurant"
                className="rounded-full border border-black/15 bg-white px-7 py-4 font-bold transition duration-300 hover:border-black hover:bg-black hover:text-white"
              >
                Bird Roti&apos;yi Keşfet
              </a>
            </div>
          </div>


          {/* HERO PRODUCT */}
          <div className="relative z-10 mt-1 flex min-h-[320px] items-center justify-center sm:mt-10 sm:min-h-[420px] lg:mt-0 lg:min-h-[680px]">

            <div className="absolute h-[65%] w-[80%] rounded-full bg-black/[0.08] blur-[70px]" />

            <Image
              src="/images/products/herb-roti.png"
              alt="Bird Roti rotisserie tavuk menüsü"
              width={1800}
              height={1400}
              priority
              className="
                relative
                z-10
                w-[115%]
                max-w-none
                rotate-[-4deg]
                object-contain
                drop-shadow-[0_35px_35px_rgba(0,0,0,0.23)]
                transition
                duration-700
                hover:rotate-[-2deg]
                hover:scale-[1.02]
                sm:w-[105%]
                lg:w-[125%]
                xl:w-[132%]
              "
            />
          </div>
        </div>
      </section>


      {/* PRODUCTS */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1380px] px-6 lg:px-10">

          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-primary">
                Bird Favorites
              </p>

              <h2 className="text-4xl font-black leading-[1] tracking-[-0.045em] sm:text-6xl">
                Favorini
                <br />
                seçmek zor.
              </h2>
            </div>

            <p className="max-w-md text-lg leading-8 text-neutral-600">
              Rotisserie&apos;den çıtır tavuğa, Bird Roti menüsünün favorilerini
              keşfet.
            </p>
          </div>


          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">

            {products.map((product, index) => (
              <article
                key={product.name}
                className={`
                  group
                  overflow-hidden
                  rounded-[30px]
                  bg-[#f7f5f2]
                  transition
                  duration-500
                  hover:-translate-y-1
                  ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}
                `}
              >
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden p-4 sm:p-6">

                  <div className="absolute h-[60%] w-[65%] rounded-full bg-black/[0.08] blur-3xl" />

                  <Image
                    src={product.image}
                    alt={`Bird Roti ${product.name}`}
                    width={1400}
                    height={1000}
                    className="
                      relative
                      z-10
                      h-full
                      w-full
                      object-contain
                      drop-shadow-[0_18px_18px_rgba(0,0,0,0.18)]
                      transition
                      duration-500
                      group-hover:scale-[1.06]
                      group-hover:rotate-[-1deg]
                    "
                  />
                </div>

                <div className="px-7 pb-8">
                  <h3 className="text-2xl font-black tracking-[-0.03em]">
                    {product.name}
                  </h3>

                  <p className="mt-3 leading-7 text-neutral-600">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>


      {/* BRAND STORY */}
      <section
        id="story"
        className="relative overflow-hidden bg-primary py-28 text-white lg:py-36"
      >
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-white/[0.05] blur-[80px]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <Image
            src="/logos/bird-roti-symbol.svg"
            alt=""
            width={110}
            height={110}
            className="mx-auto mb-8 h-24 w-auto brightness-0 invert"
          />

          <p className="mb-6 text-sm font-black uppercase tracking-[0.25em] text-white/60">
            Taste it. Love it. Bird it.
          </p>

          <h2 className="text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-7xl">
            Tavuk işi
            <br />
            bizden sorulur.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70">
            Bird Roti; rotisserie pişirme tekniğini, çıtır tavukları ve
            karakterli sosları modern ve hızlı bir restoran deneyiminde bir
            araya getiriyor.
          </p>
        </div>
      </section>


      {/* RESTAURANT */}
      <section id="restaurant" className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1380px] px-6 lg:px-10">

          <div className="mb-10 sm:mb-14">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-primary sm:text-sm">
              Inside Bird
            </p>

            <h2 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Açık mutfak.
              <br />
              Gerçek tavuk. Gerçek lezzet.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:gap-5">

            <div className="overflow-hidden rounded-[24px] sm:rounded-[30px]">
              <Image
                src="/images/restaurant/restaurant-04.jpeg"
                alt="Bird Roti restoran iç mekanı"
                width={1800}
                height={1400}
                className="h-[360px] w-full object-cover transition duration-700 hover:scale-[1.025] sm:h-[500px] lg:h-full lg:min-h-[560px]"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-5">

              <div className="overflow-hidden rounded-[24px] sm:rounded-[30px]">
                <Image
                  src="/images/restaurant/restaurant-02.jpeg"
                  alt="Bird Roti açık mutfağı"
                  width={1400}
                  height={1000}
                  className="h-[240px] w-full object-cover transition duration-700 hover:scale-[1.025] sm:h-[300px] lg:h-[270px]"
                />
              </div>

              <div className="overflow-hidden rounded-[24px] sm:rounded-[30px]">
                <Image
                  src="/images/restaurant/restaurant-03.jpeg"
                  alt="Bird Roti restoran detayları"
                  width={1400}
                  height={1000}
                  className="h-[240px] w-full object-cover transition duration-700 hover:scale-[1.025] sm:h-[300px] lg:h-[270px]"
                />
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* MENU */}
      <section id="menu" className="bg-[#f7f5f2] py-28 lg:py-36">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-primary">
            Menü
          </p>

          <h2 className="text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-7xl">
            Ne yiyeceğini
            <br />
            seçmeye hazır mısın?
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-neutral-600">
            Menü dilini seç ve Bird Roti&apos;nin tüm ürünlerini keşfet.
          </p>

          <div className="mt-11 flex flex-wrap justify-center gap-3">

            <a
              href="/menu/bird-roti-menu-tr.pdf"
              target="_blank"
              className="rounded-full bg-primary px-8 py-4 font-bold text-white transition duration-300 hover:scale-[1.03] hover:bg-secondary"
            >
              Türkçe Menü
            </a>

            <a
              href="/menu/bird-roti-menu-en.pdf"
              target="_blank"
              className="rounded-full border border-black/15 bg-white px-8 py-4 font-bold transition duration-300 hover:bg-black hover:text-white"
            >
              English Menu
            </a>

            <a
              href="/menu/bird-roti-menu-ru.pdf"
              target="_blank"
              className="rounded-full border border-black/15 bg-white px-8 py-4 font-bold transition duration-300 hover:bg-black hover:text-white"
            >
              Русское меню
            </a>

          </div>
        </div>
      </section>


      <FavoritesSection />

      <PaymentSection />

      <OrderSection />

      <BranchesSection />

      <LocationSection />

      <ContactSection />

      <QualitySection />

      <FranchiseSection />

      {/* FOOTER */}
      <footer className="bg-[#171717] py-10 text-white lg:py-16">
        <div className="mx-auto max-w-[1380px] px-6 lg:px-10">

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-5 lg:gap-12">

            {/* BRAND */}
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-start gap-4">
                <Image
                  src="/logos/bird-roti-symbol.svg"
                  alt="Bird Roti"
                  width={62}
                  height={62}
                  className="h-14 w-auto brightness-0 invert"
                />

                <div>
                  <p className="text-2xl font-black leading-none">
                    BIRD ROTI
                  </p>

                  <p className="mt-3 text-sm text-white/45">
                    Taste it. Love it. Bird it.
                  </p>
                </div>
              </div>
            </div>

            {/* KURUMSAL */}
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.15em]">
                Kurumsal
              </p>

              <div className="flex flex-col gap-3 text-sm text-white/55">
                <a href="#story" className="transition hover:text-white">
                  Bird Roti
                </a>

                <a href="#branches" className="transition hover:text-white">
                  Şubeler
                </a>

                <a href="#quality" className="transition hover:text-white">
                  Kalite & İş Ortaklarımız
                </a>

                <a href="#franchise" className="transition hover:text-white">
                  Franchise
                </a>
              </div>
            </div>

            {/* MENÜ */}
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.15em]">
                Menü
              </p>

              <div className="flex flex-col gap-3 text-sm text-white/55">
                <a
                  href="/menu/bird-roti-menu-tr.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  Türkçe Menü
                </a>

                <a
                  href="/menu/bird-roti-menu-en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  English Menu
                </a>

                <a
                  href="/menu/bird-roti-menu-ru.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  Русское меню
                </a>
              </div>
            </div>

            {/* SİPARİŞ & ÖDEME */}
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.15em]">
                Sipariş
              </p>

              <div className="flex flex-col gap-3 text-sm text-white/55">
                <a href="#order" className="transition hover:text-white">
                  WhatsApp
                </a>

                <a href="#order" className="transition hover:text-white">
                  Yemeksepeti
                </a>

                <a href="#order" className="transition hover:text-white">
                  Migros Yemek
                </a>

                <a href="#order" className="transition hover:text-white">
                  Trendyol Go
                </a>
              </div>

              <p className="mb-4 mt-8 text-sm font-black uppercase tracking-[0.15em]">
                Ödeme
              </p>

              <a
                href="#payment"
                className="text-sm text-white/55 transition hover:text-white"
              >
                Ödeme Yöntemleri →
              </a>
            </div>

            {/* İLETİŞİM */}
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.15em]">
                İletişim
              </p>

              <div className="flex flex-col gap-4 text-sm">

                <div>
                  <p className="mb-1 text-white/35">
                    Telefon
                  </p>

                  <a
                    href="tel:+905559772120"
                    className="font-bold text-white transition hover:text-white/70"
                  >
                    +90 555 977 21 20
                  </a>
                </div>

                <div>
                  <p className="mb-1 text-white/35">
                    Kurumsal
                  </p>

                  <a
                    href="mailto:kurumsal@birdroti.com"
                    className="text-white/60 transition hover:text-white"
                  >
                    kurumsal@birdroti.com
                  </a>
                </div>

                <div>
                  <p className="mb-1 text-white/35">
                    Muhasebe
                  </p>

                  <a
                    href="mailto:muhasebe@birdroti.com"
                    className="text-white/60 transition hover:text-white"
                  >
                    muhasebe@birdroti.com
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* LEGAL */}
          <div className="mt-16 border-t border-white/10 pt-8">

            <p className="text-sm text-white/45">
              Bird Roti, Unity Partners Gıda Turizm Ticaret A.Ş.
              iştirakidir.
            </p>


            <div className="mt-6 flex flex-col justify-between gap-3 text-xs text-white/25 sm:flex-row">
              <p>
                © 2026 Bird Roti. Tüm hakları saklıdır.
              </p>

              <p>
                İstanbul / Antalya, Türkiye
              </p>
            </div>

          </div>

        </div>
      </footer>

    </main>
  );
}
