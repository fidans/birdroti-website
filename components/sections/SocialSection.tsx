const socials = [
  {
    name: "Instagram",
    label: "@birdrotialanya",
    href: "https://www.instagram.com/birdrotialanya/",
    className: "bg-[#E1306C]",
    icon: "◎",
  },
  {
    name: "Facebook",
    label: "Bird Roti Alanya",
    href: "https://www.facebook.com/birdroti.alanya",
    className: "bg-[#1877F2]",
    icon: "f",
  },
  {
    name: "TikTok",
    label: "TikTok'ta Bird Roti",
    href: "https://www.tiktok.com/",
    className: "bg-[#111111]",
    icon: "♪",
  },
  {
    name: "YouTube",
    label: "YouTube'da Bird Roti",
    href: "https://www.youtube.com/",
    className: "bg-[#FF0000]",
    icon: "▶",
  },
];

export default function SocialSection() {
  return (
    <section className="border-b border-black/10 bg-white py-5">
      <div className="mx-auto max-w-[1380px] px-6 lg:px-10">
        <div className="flex items-center gap-4 overflow-x-auto pb-1 scrollbar-hide">
          <div className="mr-2 hidden shrink-0 lg:block">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
              Bizi takip et
            </p>
          </div>

          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex w-[78vw] min-w-[280px] max-w-[340px] shrink-0 items-center gap-4 rounded-2xl px-5 py-4 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-w-[300px] lg:w-auto lg:min-w-[190px] lg:max-w-none ${social.className}`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-xl font-black">
                {social.icon}
              </span>

              <span className="leading-tight">
                <span className="block text-sm font-black">
                  {social.name}
                </span>
                <span className="mt-1 block text-xs text-white/80">
                  {social.label}
                </span>
              </span>

              <span className="ml-auto text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
