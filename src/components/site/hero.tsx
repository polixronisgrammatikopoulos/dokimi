import { BadgeCheck, Sun, Timer, Zap } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

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
