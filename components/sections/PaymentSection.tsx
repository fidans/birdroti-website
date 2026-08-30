import Image from "next/image";

const paymentCards = [
  {
    name: "Multinet",
    image: "/images/payment/multinet.png",
  },
  {
    name: "Pluxee",
    image: "/images/payment/pluxee.png",
  },
  {
    name: "Setcard",
    image: "/images/payment/setcard.png",
  },
  {
    name: "Metropol",
    image: "/images/payment/metropol.png",
  },
  {
    name: "Edenred",
    image: "/images/payment/edenred.png",
  },
];

const otherPayments = [
  {
    name: "Kredi Kartı",
    icon: "▣",
  },
  {
    name: "Nakit",
    icon: "₺",
  },
];

export default function PaymentSection() {
  return (
    <section id="payment" className="bg-[#f7f5f2] py-20 lg:py-24">
      <div className="mx-auto max-w-[1380px] px-6 lg:px-10">

        <div className="mb-10">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-primary">
            Ödeme Yöntemleri
          </p>

          <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Dilediğin şekilde öde.
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Bird Roti Alanya'da yemek kartları, kredi kartı ve nakit ödeme
            seçeneklerini kullanabilirsin.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {paymentCards.map((payment) => (
            <div
              key={payment.name}
              className="flex h-[120px] items-center justify-center rounded-[24px] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <Image
                src={payment.image}
                alt={`${payment.name} ödeme yöntemi`}
                width={220}
                height={100}
                className="max-h-[80px] w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          {otherPayments.map((payment) => (
            <div
              key={payment.name}
              className="flex min-h-[100px] items-center gap-5 rounded-[24px] bg-white px-6 shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-black text-white">
                {payment.icon}
              </span>

              <span className="text-lg font-black">
                {payment.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
