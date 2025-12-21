"use client";

const logoUrl = "/logo.webp";

interface HeaderProps {
  activeNav?: string;
}

export default function Header({ activeNav }: HeaderProps) {
  const navItems = [
    { name: "Benefits", href: "/benefits" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Locations", href: "/#locations" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Calculator", href: "/calculator" },
    { name: "Builders", href: "/builders" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--color-border-light)]">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="flex items-center">
          <img src={logoUrl} alt="Roomy Domy" className="h-10 w-auto" />
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--color-primary)] after:transition-all hover:after:w-full ${
                activeNav === item.name
                  ? "text-emerald-500"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/get-quote"
            className="rounded-full border-2 border-[var(--color-primary)] px-5 py-2 text-sm font-semibold text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary)] hover:text-white"
          >
            Get a Quote
          </a>
          <button className="rounded-full bg-gradient-to-r from-[var(--color-primary)] to-emerald-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition-all hover:shadow-xl hover:shadow-emerald-300 hover:-translate-y-0.5">
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
}


