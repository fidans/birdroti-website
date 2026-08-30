export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold tracking-tight">
          Bird Roti
        </h1>

        <nav className="hidden gap-8 md:flex">
          <a href="#">Menü</a>
          <a href="#">Hakkımızda</a>
          <a href="#">Franchise</a>
          <a href="#">İletişim</a>
        </nav>
      </div>
    </header>
  );
}