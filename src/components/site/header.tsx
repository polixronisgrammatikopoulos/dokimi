"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "#arxiki", label: "Αρχική" },
  { href: "#lyseis", label: "Λύσεις" },
  { href: "#proionta", label: "Προϊόντα" },
  { href: "#ypologistis", label: "Υπολογιστής" },
  { href: "#faq", label: "Ερωτήσεις" },
  { href: "#epikoinonia", label: "Επικοινωνία" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-md shadow-black/5 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="#arxiki"
          className="flex items-center gap-3"
          aria-label="ProΣτέγη — Αρχική"
        >
          <span
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl p-1 transition-colors",
              scrolled ? "bg-white" : "bg-white/90"
            )}
          >
            <Image
              src="/logo.png"
              alt="Λογότυπο ProΣτέγη"
              width={48}
              height={48}
              className="h-11 w-11 object-contain"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-heading text-xl font-extrabold tracking-tight",
                scrolled ? "text-[#0d4c74]" : "text-[#0d4c74]"
              )}
            >
              ProΣτέγη
            </span>
            <span
              className={cn(
                "text-[11px] font-medium tracking-wide transition-colors",
                scrolled ? "text-[#2c7a3e]" : "text-[#2c7a3e]"
              )}
            >
              Ηλιακή Ενέργεια, Ανεξάρτητη Ζωή
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Κύρια πλοήγηση">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                scrolled
                  ? "text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                  : "text-[#17324a]/85 hover:bg-white/60 hover:text-[#0d4c74]"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Phone CTA */}
          <a href="tel:+302310644512" className="hidden sm:block">
            <Button className="gap-2 rounded-xl bg-[#2c7a3e] px-4 font-heading font-bold shadow-lg shadow-[#2c7a3e]/25 hover:bg-[#256d34]">
              <Phone className="h-4 w-4" aria-hidden />
              2310 644 512
            </Button>
          </a>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden border-border bg-white/90"
                aria-label="Άνοιγμα μενού"
              >
                <Menu className="h-5 w-5 text-[#0d4c74]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 font-heading text-[#0d4c74]">
                  <Image
                    src="/logo.png"
                    alt="Λογότυπο ProΣτέγη"
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain"
                  />
                  ProΣτέγη
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-2 flex flex-col gap-1 px-4" aria-label="Μενού κινητού">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-semibold text-foreground/85 transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.label}
                  </a>
                ))}
                <a href="tel:+302310644512" onClick={() => setOpen(false)}>
                  <Button className="mt-4 w-full gap-2 rounded-xl bg-[#2c7a3e] font-heading font-bold hover:bg-[#256d34]">
                    <Phone className="h-4 w-4" aria-hidden />
                    2310 644 512
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
