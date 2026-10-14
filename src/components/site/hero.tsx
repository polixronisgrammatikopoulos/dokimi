import Image from "next/image";
import { ArrowRight, BadgeCheck, Sun, Timer, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

const TRUST_POINTS = [
  "Δωρεάν μελέτη & προσφορά",
  "Πιστοποιημένος εξοπλισμός Deye · V-TAC",
  "Τοπική τεχνική υποστήριξη",
];

const STATS = [
  {
    icon: Sun,
    value: "1.500+",
    label: "kWh ετήσια παραγωγή ανά kWp στην Ελλάδα",
  },
  {
    icon: Timer,
    value: "4–7",
    label: "χρόνια μέση απόσβεση της επένδυσης",
  },
  {
    icon: Zap,
    value: "85%",
    label: "αυτοκατανάλωση με μπαταρίες αποθήκευσης",
  },
  {
    icon: BadgeCheck,
    value: "25+",
    label: "χρόνια διάρκεια ζωής φωτοβολταϊκών πάνελ",
  },
];

export function Hero() {
  return (
    <section
      id="arxiki"
      className="relative overflow-hidden bg-[#fbfaf6] pt-[72px]"
      aria-label="Εισαγωγή"
    >
      {/* decorative background shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#2c7a3e]/8 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 h-[380px] w-[380px] rounded-full bg-[#0d4c74]/8 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:pb-24 lg:pt-16">
        {/* Left — copy */}
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2c7a3e]/25 bg-[#e9f3eb] px-4 py-1.5 text-sm font-semibold text-[#256d34]">
            <Sun className="h-4 w-4" aria-hidden />
            Ειδικοί σε Αυτόνομα &amp; Υβριδικά Φωτοβολταϊκά
          </span>

          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.12] tracking-tight text-[#0d4c74] text-balance sm:text-5xl lg:text-[3.4rem]">
            Ηλιακή Ενέργεια,{" "}
            <span className="relative inline-block text-[#2c7a3e]">
              Ανεξάρτητη Ζωή
              <svg
                aria-hidden
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C60 3 240 3 298 9"
                  stroke="#2c7a3e"
                  strokeWidth="5"
                  strokeLinecap="round"
                  opacity="0.35"
                />
              </svg>
            </span>
            .
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Στην <strong className="font-semibold text-foreground">ProΣτέγη</strong>{" "}
            σχεδιάζουμε και εγκαθιστούμε φωτοβολταϊκά συστήματα τελευταίας γενιάς,
            προσαρμοσμένα στις ανάγκες σας. Ζήστε με αυτονομία και εξοικονόμηση
            ενέργειας — με πιστοποιημένο εξοπλισμό Deye &amp; V-TAC και εγγύηση
            απόδοσης 25+ ετών.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#epikoinonia">
              <Button
                size="lg"
                className="h-13 gap-2 rounded-xl bg-[#2c7a3e] px-7 font-heading text-base font-bold shadow-xl shadow-[#2c7a3e]/25 hover:bg-[#256d34]"
              >
                Ζητήστε Δωρεάν Προσφορά
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Button>
            </a>
            <a href="#proionta">
              <Button
                size="lg"
                variant="outline"
                className="h-13 rounded-xl border-[#0d4c74]/30 px-7 font-heading text-base font-bold text-[#0d4c74] hover:bg-[#0d4c74] hover:text-white"
              >
                Δείτε τα Προϊόντα
              </Button>
            </a>
          </div>

          <ul className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-[15px] font-medium text-foreground/80"
              >
                <BadgeCheck className="h-5 w-5 shrink-0 text-[#2c7a3e]" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right — visual */}
        <Reveal delay={0.15} className="relative">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#2c7a3e]/15 to-[#0d4c74]/15"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl shadow-[#0d4c74]/20">
              <Image
                src="/hero-solar.jpg"
                alt="Φωτοβολταϊκό πάρκο μπροστά από πέτρινα σπίτια σε ελληνικό τοπίο"
                width={1466}
                height={574}
                priority
                className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[420px]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#0d4c74]/35 via-transparent to-transparent"
              />
            </div>

            {/* floating card — production */}
            <div className="animate-float absolute -left-3 top-8 flex items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-xl shadow-[#0d4c74]/15 backdrop-blur sm:-left-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f3eb]">
                <Sun className="h-6 w-6 text-[#2c7a3e]" aria-hidden />
              </span>
              <div>
                <p className="font-heading text-lg font-extrabold leading-none text-[#0d4c74]">
                  1.400–1.600 kWh
                </p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">
                  ετησίως ανά 1 kWp εγκατεστημένο
                </p>
              </div>
            </div>

            {/* floating card — payback */}
            <div
              className="animate-float-delayed absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-xl shadow-[#0d4c74]/15 backdrop-blur"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf2f8]">
                <Timer className="h-6 w-6 text-[#0d4c74]" aria-hidden />
              </span>
              <div>
                <p className="font-heading text-lg font-extrabold leading-none text-[#0d4c74]">
                  4–7 χρόνια
                </p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">
                  μέση απόσβεση επένδυσης
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function StatsBar() {
  return (
    <section className="bg-brand-gradient" aria-label="Βασικά μεγέθη">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-12">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="flex flex-col items-center gap-2 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <stat.icon className="h-6 w-6 text-[#7fc795]" aria-hidden />
            </span>
            <p className="font-heading text-3xl font-extrabold text-white lg:text-4xl">
              {stat.value}
            </p>
            <p className="max-w-[220px] text-sm leading-snug text-white/65">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
