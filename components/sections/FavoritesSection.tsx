import Image from "next/image";

const favorites = [
  {
    name: "Herb Roti",
    description: "Özel baharatlarla marine edilmiş, Bird Roti imzalı rotisserie tavuk.",
    image: "/images/products/herb-roti.png",
  },
  {
    name: "Crispy Burger",
    description: "Çıtır tavuk, taze malzemeler ve Bird Roti imzalı sos.",
    image: "/images/products/crispy-burger.png",
  },
  {
    name: "Tenders",
    description: "Dışı çıtır, içi yumuşak tavuk tenders ve özel soslar.",
    image: "/images/products/tenders-2.png",
  },
  {
    name: "Spicy Roti Wrap",
    description: "Çıtır tavuk, taze sebzeler ve hafif acılı özel sos.",
    image: "/images/products/spicy-roti-wrap.png",
  },
  {
    name: "Asian Bowl",
    description: "Tavuk, taze sebzeler ve Asya esintili özel soslarla bowl.",
    image: "/images/products/asian-bowl.png",
  },
];

export default function FavoritesSection() {
  return (
    <section id="menu" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1380px] px-6 lg:px-10">

        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-primary">
              Bird Favorites
            </p>

            <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">
              En sevilenler.
            </h2>
          </div>

          <a
            href="/menu/bird-roti-menu-tr.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-full border border-black/15 px-7 py-4 font-bold transition hover:bg-black hover:text-white"
          >
            Tüm Menüyü Gör →
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {favorites.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-[28px] bg-[#f7f5f2] transition duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-contain p-0 scale-[1.18] transition duration-500 group-hover:scale-[1.24] sm:scale-100 sm:p-3 sm:group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black tracking-[-0.03em]">
                  {item.name}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-neutral-600">
                  {item.description}
                </p>

                <a
                  href="#order"
                  className="mt-5 block rounded-full bg-primary px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-secondary"
                >
                  Sipariş Ver
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
