const principles = [
  {
    title: "Kalite",
    text: "Her Bird Roti'de aynı ürün standardını korumak.",
  },
  {
    title: "Standart",
    text: "Reçeteden operasyona, servisten sunuma kadar Bird Roti standartlarını korumak.",
  },
  {
    title: "Doğru Ortaklık",
    text: "Hızlı büyümek yerine doğru lokasyon ve doğru iş ortaklarıyla sürdürülebilir büyümek.",
  },
];

export default function FranchiseSection() {
  return (
    <section id="franchise" className="bg-[#751f2a] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-[1380px] px-6 lg:px-10">

        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-white/60">
            Franchise
          </p>

          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">
            Bird Roti büyüyor.
            <br />
            Ama standartlarından ödün vermiyor.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75">
            Bird Roti için her şube yalnızca bir işletme değil, markamızın
            misafirle buluştuğu yeni bir noktadır.
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
            Bu nedenle ürün kalitesi, reçetelerimiz, mutfak operasyonumuz,
            servis anlayışımız ve marka deneyimimizin aynı standartta
            sürdürülebilmesini önceliklendiriyoruz.
          </p>

          <p className="mt-8 max-w-3xl text-xl font-bold leading-8">
            Bu aşamada klasik franchise modelini uygulamıyoruz.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/75">
            Bunun yerine, markamızın büyüme sürecinde şube ortaklığı ve
            işletme ortaklığı gibi daha kontrollü modelleri ilerleyen
            dönemde değerlendirmeyi planlıyoruz.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/15 bg-white/10 p-7"
            >
              <h3 className="text-2xl font-black">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-white/70">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[28px] bg-white p-8 text-[#171717] sm:p-10">
          <h3 className="text-3xl font-black tracking-[-0.03em]">
            Doğru zamanda, doğru modelle.
          </h3>

          <p className="mt-4 max-w-3xl leading-7 text-neutral-600">
            Bird Roti'nin geleceğinde yer almak isteyenler için şube
            ortaklığı modellerimizi zamanı geldiğinde duyuracağız.
          </p>
        </div>

      </div>
    </section>
  );
}
