import Link from "next/link";
import { Check, ShieldCheck, Wifi, Layers, BatteryCharging, SunMedium, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { Products, SectionHeader } from "@/components/site/sections";
import { Reveal } from "@/components/site/reveal";
import { JsonLd } from "@/components/site/json-ld";
import { Button } from "@/components/ui/button";
import { buildPageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Προϊόντα & Εξοπλισμός — Deye Inverters, Μπαταρίες V-TAC & Φωτοβολταϊκά Πάνελ",
  description:
    "Πιστοποιημένος φωτοβολταϊκός εξοπλισμός τελευταίας γενιάς: υβριδικοί inverters Deye, μπαταρίες λιθίου V-TAC & DEYE, high voltage racks και μονοκρυσταλλικά πάνελ 500W-700W. Θεσσαλονίκη.",
  path: "/proionta",
  keywords: [
    "Deye inverter Ελλάδα",
    "υβριδικός inverter 48V",
    "μπαταρία λιθίου LiFePO4",
    "V-TAC μπαταρία 10kWh",
    "φωτοβολταϊκά πάνελ 500W",
    "μονοκρυσταλλικά πάνελ",
    "high voltage battery rack",
    "φωτοβολταϊκός εξοπλισμός Θεσσαλονίκη",
  ],
});

const PRODUCT_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Φωτοβολταϊκός Εξοπλισμός ProΣτέγη",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Υβριδικοί Inverters DEYE 48V (6–20 kW)",
        brand: { "@type": "Brand", name: "Deye" },
        description:
          "Υβριδικοί αντιστροφείς τελευταίας γενιάς με παράλληλη λειτουργία, Wi-Fi παρακολούθηση και υψηλή απόδοση μετατροπής.",
        image: `${SITE_URL}/products/deye-inverter.png`,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Μπαταρίες Λιθίου V-TAC & DEYE 10 kWh 48V LFP",
        brand: { "@type": "Brand", name: "V-TAC" },
        description:
          "Μπαταρίες λιθίου LiFePO4 με 6.000+ κύκλους ζωής, ενσωματωμένο BMS ασφαλείας και συμπαγές κρεμαστό σχέδιο.",
        image: `${SITE_URL}/products/vtac-battery.png`,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "DEYE High Voltage Racks 200V–500V DC",
        brand: { "@type": "Brand", name: "Deye" },
        description:
          "Επαγγελματικά συστήματα αποθήκευσης τύπου rack για μεγάλες ενεργειακές απαιτήσεις, πλήρως επεκτάσιμα.",
        image: `${SITE_URL}/products/deye-rack.png`,
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Μονοκρυσταλλικά Φωτοβολταϊκά Πάνελ 500W–700W",
        brand: { "@type": "Brand", name: "Tier-1" },
        description:
          "Πάνελ τελευταίας γενιάς με υψηλή απόδοση ακόμα και σε συννεφιά, αντοχή σε χαλάζι και εγγύηση απόδοσης 25–30 ετών.",
        image: `${SITE_URL}/products/solar-panels.png`,
      },
    },
  ],
};

const DEEP_DIVES = [
  {
    id: "inverters",
    icon: SunMedium,
    title: "Υβριδικοί Inverters DEYE — ο «εγκέφαλος» του συστήματός σας",
    paragraphs: [
      "Ο inverter είναι η καρδιά κάθε φωτοβολταϊκού: μετατρέπει τη συνεχή τάση (DC) των πάνελ σε εναλλασσόμενο ρεύμα (AC) που χρησιμοποιεί το σπίτι σας. Οι υβριδικοί inverter DEYE που εγκαθιστούμε διαθέτουν ενσωματωμένο controller μπαταρίας, λειτουργία backup χωρίς διακοπή, και μπορούν να συνδεθούν παράλληλα έως και 16 μονάδες για συστήματα μεγάλης ισχύος.",
      "Μέσω της δωρεάν εφαρμογής στο κινητό σας, βλέπετε σε πραγματικό χρόνο πόση ενέργεια παράγεται, καταναλώνεται, αποθηκεύεται ή πωλείται στο δίκτυο. Οι inverter Deye διαθέτουν ευρωπαϊκή πιστοποίηση CE, πιστοποίηση G99/EN50549 για σύνδεση με το δίκτυο και 5+ χρόνια εγγύηση κατασκευαστή.",
    ],
    points: ["Παράλληλη λειτουργία έως 16 μονάδες", "Wi-Fi παρακολούθηση από κινητό", "Backup χωρίς διακοπή (UPS λειτουργία)", "Εγγύηση 5+ ετών"],
  },
  {
    id: "batteries",
    icon: BatteryCharging,
    title: "Μπαταρίες Λιθίου V-TAC & DEYE — ενέργεια που δεν πάει χαμένη",
    paragraphs: [
      "Οι μπαταρίες λιθίου LiFePO4 (LFP) είναι η σύγχρονη, ασφαλής τεχνολογία αποθήκευσης: χωρίς συντήρηση, χωρίς εκπομπές, με 6.000+ κύκλους φόρτισης-εκφόρτισης — δηλαδή 10 έως 15 χρόνια καθημερινής χρήσης. Η ενσωματωμένη ηλεκτρονική μονάδα BMS προστατεύει από υπερφόρτιση, βαθιά εκφόρτιση και υπερθέρμανση.",
      "Το συμπαγές κρεμαστό σχέδιο των μπαταριών V-TAC 10 kWh εξοικονομεί χώρο, ενώ τα high-voltage racks DEYE (200–500V DC) καλύπτουν επαγγελματικές εφαρμογές με επεκτασιμότητα ανά μονάδα. Όλες οι μπαταρίες επικοινωνούν CAN/RS485 με τους inverter Deye για βέλτιστη διαχείριση φόρτισης.",
    ],
    points: ["6.000+ κύκλοι ζωής LiFePO4", "BMS ασφαλείας ενσωματωμένο", "Κρεμαστό συμπαγές design", "Επικοινωνία CAN/RS485 με Deye"],
  },
  {
    id: "panels",
    icon: SunMedium,
    title: "Φωτοβολταϊκά Πάνελ 500W–700W — περισσότερη ενέργεια ανά τ.μ.",
    paragraphs: [
      "Τα μονοκρυσταλλικά πάνελ τελευταίας γενιάς με τεχνολογία PERC/TOPCon προσφέρουν υψηλή απόδοση 21%+, δηλαδή περισσότερη ενέργεια στον ίδιο χώρο. Στην πράξη, ένα σύγχρονο πάνελ 700W παράγει όσο δύο παλιά πάνελ 350W — με λιγότερο χώρο, λιγότερα στηρίγματα και χαμηλότερο κόστος εγκατάστασης.",
      "Όλα τα πάνελ που χρησιμοποιούμε διαθέτουν εγγύηση προϊόντος 15–25 ετών και εγγύηση απόδοσης 25–30 ετών (80–87% της αρχικής ισχύος στο τέλος της περιόδου), πιστοποίηση αντοχής σε χαλάζι (IEC 61215) και επίστρωση ανθεκτική στη γύρη και τη σκόνη.",
    ],
    points: ["Απόδοση 21%+ (PERC/TOPCon)", "Εγγύηση απόδοσης 25–30 ετών", "Αντοχή σε χαλάζι & ισχυρούς ανέμους", "Βέλτιστη απόδοση σε μερική σκίαση"],
  },
  {
    id: "systems",
    icon: Layers,
    title: "Ολοκληρωμένα Πακέτα — όλα από ένα χέρι",
    paragraphs: [
      "Κάθε εγκατάσταση της ProΣτέγη παραδίδεται ως ολοκληρωμένο σύστημα: πάνελ, inverter, μπαταρίες, μεταλλικά στηρίγματα, καλωδιώσεις φωτοβολταϊκών (DC) και εναλλασσόμενου ρεύματος (AC), ασφάλειες, κουτί σύνδεσης, προστασίες υπερτάσης και συστήματος γείωσης.",
      "Δεν «ανακατεύουμε» εξαρτήματα ασυμβίβαστα μεταξύ τους — όλα τα στοιχεία του συστήματός σας είναι επιλεγμένα ώστε να συνεργάζονται άψογα, να διαχειρίζονται από μία εφαρμογή και να υποστηρίζονται από μία ομάδα: τη δική μας, εδώ στη Θεσσαλονίκη.",
    ],
    points: ["Πλήρης εξοπλισμός εγκατάστασης", "Συμβατά εξαρτήματα ενσωματωμένα", "Μία εφαρμογή διαχείρισης", "Τοπική εγγύηση & υποστήριξη"],
  },
];

export default function ProiontaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={PRODUCT_LD} />
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Προϊόντα & Εξοπλισμός"
          title="Εξοπλισμός Κορυφαίων Μαρκών, Πιστοποιημένος για Δεκαετίες"
          lead="Συνεργαζόμαστε μόνο με κατασκευαστές με αποδεδειγμένη αξιοπιστία — Deye, V-TAC και Tier-1 κατασκευαστές πάνελ — ώστε η επένδυσή σας να αποδίδει αψεγίδιαστα για 25+ χρόνια."
          crumbs={[{ name: "Προϊόντα", path: "/proionta" }]}
        />

        {/* Πλέγμα προϊόντων */}
        <div className="bg-white pt-4">
          <Products />
        </div>

        {/* Αναλυτικές ενότητες */}
        <section className="bg-[#f5f3ec] py-14 sm:py-20" aria-label="Αναλυτικά για τον εξοπλισμό">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Γιατί αυτόν τον εξοπλισμό"
              title="Τεχνολογία που Αποδίδει, Μάρκες που Εμπιστεύεστε"
              subtitle="Ό,τι εγκαθιστούμε το επιλέγουμε με ένα και μόνο κριτήριο: να λειτουργεί χωρίς προβλήματα για δεκαετίες."
            />

            <div className="flex flex-col gap-8">
              {DEEP_DIVES.map((section) => (
                <Reveal key={section.id}>
                  <article
                    id={section.id}
                    className="scroll-mt-28 rounded-2xl border border-border bg-card p-6 shadow-lg shadow-[#0d4c74]/5 sm:p-8"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
                        <section.icon className="h-6 w-6 text-[#2c7a3e]" aria-hidden />
                      </span>
                      <h3 className="font-heading text-xl font-extrabold leading-snug text-[#0d4c74] sm:text-2xl">
                        {section.title}
                      </h3>
                    </div>
                    <div className="mt-4 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
                      <div className="space-y-3.5">
                        {section.paragraphs.map((p) => (
                          <p key={p.slice(0, 40)} className="text-[15px] leading-relaxed text-muted-foreground">
                            {p}
                          </p>
                        ))}
                      </div>
                      <ul className="flex flex-col gap-2.5 self-start rounded-xl border border-[#2c7a3e]/20 bg-[#e9f3eb]/60 p-5">
                        {section.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm font-semibold text-[#256d34]">
                            <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Πιστοποιήσεις */}
            <Reveal className="mt-10">
              <div className="flex flex-col items-center gap-4 rounded-2xl bg-[#0d4c74] p-7 text-center sm:flex-row sm:text-left">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <ShieldCheck className="h-8 w-8 text-[#7fc795]" aria-hidden />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-extrabold text-white">
                    Μόνο πιστοποιημένος εξοπλισμός με ευρωπαϊκή σήμανση CE
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                    Κάθε συσκευή που εγκαθιστούμε φέρει πιστοποιήσεις IEC/EN για
                    την ευρωπαϊκή αγορά, με επίσημη εγγύηση αντιπροσωπείας και
                    πλήρη τεχνική τεκμηρίωση — δείτε τα πιστοποιητικά σε κάθε
                    προσφορά που παραλαμβάνετε.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="mt-10 flex justify-center">
              <Link href="/epikoinonia">
                <Button
                  size="lg"
                  className="h-13 rounded-xl bg-[#2c7a3e] px-8 font-heading text-base font-bold shadow-xl shadow-[#2c7a3e]/25 hover:bg-[#256d34]"
                >
                  Ζητήστε Προσφορά για Εξοπλισμό
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
                </Button>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
