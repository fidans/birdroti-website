const orderChannels = [
  {
    name: "WhatsApp",
    description: "Bize yaz, siparişini hızlıca oluştur.",
    href: "https://wa.me/905559772120?text=Merhaba%20Bird%20Roti%2C%20sipari%C5%9F%20vermek%20istiyorum.",
    color: "bg-[#25D366]",
  },
  {
    name: "Yemeksepeti",
    description: "Bird Roti'yi Yemeksepeti üzerinden sipariş et.",
    href: "https://www.yemeksepeti.com/restaurant/nxv9/bird-roti?utm_source=chatgpt.com",
    color: "bg-[#D70F64]",
  },
  {
    name: "Migros Yemek",
    description: "Bird Roti'yi Migros Yemek üzerinden sipariş et.",
    href: "https://www.migros.com.tr/yemek/bird-roti-alanya-saray-mah-st-361ac?utm_source=chatgpt.com",
    color: "bg-[#F58220]",
  },
  {
    name: "Trendyol Go",
    description: "Bird Roti'yi Trendyol Go üzerinden sipariş et.",
    href: "https://tgoyemek.com/restoranlar/463851?utm_source=chatgpt.com#bu-restoranin-en-sevilenleri",
    color: "bg-[#00A86B]",
  },
];

export default function OrderSection() {
  return (
    <section id="order" className="bg-primary py-24 text-white lg:py-32">
      <div className="mx-auto max-w-[1380px] px-6 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-white/60">
            Bird Roti Kapında
          </p>

          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">
            Siparişini
            <br />
            nasıl istersin?
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            Dilediğin platformu seç, Bird Roti siparişini hemen oluştur.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {orderChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex min-h-[210px] flex-col justify-between rounded-[28px] p-7 text-white transition duration-300 hover:-translate-y-1 ${channel.color}`}
            >
              <div>
                <h3 className="text-2xl font-black tracking-[-0.03em]">
                  {channel.name}
                </h3>

                <p className="mt-3 leading-7 text-white/85">
                  {channel.description}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between font-bold text-white">
                <span>Sipariş Ver</span>
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-sm text-white/60">
          WhatsApp Sipariş Hattı:{" "}
          <a
            href="tel:+905559772120"
            className="font-bold text-white hover:underline"
          >
            +90 555 977 21 20
          </a>
        </div>
      </div>
    </section>
  );
}
