export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-4 font-semibold text-primary">
          NEXT LEVEL CHICKEN
        </p>

        <h1 className="max-w-3xl text-6xl font-black leading-tight">
          Rotisserie Chicken,
          <br />
          Crispy Chicken
          <br />
          Done Right.
        </h1>

        <p className="mt-8 max-w-xl text-lg text-neutral-600">
          Gerçek rotisserie tavuk, çıtır burgerler,
          signature soslar ve özenle hazırlanan menüler.
        </p>

        <button className="mt-10 rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90">
          Menüye Göz At
        </button>

      </div>
    </section>
  );
}