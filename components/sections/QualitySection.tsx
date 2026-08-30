import Image from "next/image";

const partners = [
  {
    name: "Coca-Cola",
    image: "/images/partners/coca-cola.png",
    href: "https://www.coca-cola.com/tr/tr",
  },
  {
    name: "Beypiliç",
    image: "/images/partners/beypilic.png",
    href: "https://www.beypilic.com.tr/",
  },
  {
    name: "AAK",
    image: "/images/partners/aak.png",
    href: "https://www.aak.com/tr-TR/",
  },
  {
    name: "Colorado",
    image: "/images/partners/colorado.png",
    href: null,
  },
  {
    name: "Tat",
    image: "/images/partners/tat.png",
    href: "https://www.tatgida.com.tr/tr/",
  },
  {
    name: "Tukaş",
    image: "/images/partners/tukas.png",
    href: "https://www.tukas.com.tr/?l=tr",
  },
];

export default function QualitySection() {
  return (
    <section id="quality" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-[1380px] px-6 lg:px-10">

        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-primary">
            Kalite & İş Ortaklarımız
          </p>

          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">
            Lezzetin arkasında,
            <br />
            güvendiğimiz markalar.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Bird Roti'de kullandığımız ürünleri seçerken kalite, süreklilik
            ve güvenilirliği ön planda tutuyoruz.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => {
            const card = (
              <div className="group flex h-[150px] items-center justify-center rounded-[26px] bg-[#f7f5f2] p-8 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <Image
                  src={partner.image}
                  alt={`${partner.name} logo`}
                  width={240}
                  height={120}
                  className="max-h-[82px] w-auto max-w-[180px] object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
            );

            if (!partner.href) {
              return (
                <div key={partner.name}>
                  {card}
                </div>
              );
            }

            return (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${partner.name} resmi web sitesi`}
              >
                {card}
              </a>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-neutral-400">
          Ürün ve tedarikçi portföyümüz zaman içinde gelişmektedir.
        </p>

      </div>
    </section>
  );
}
