import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { Hero3D } from "@/components/site/hero-3d";
import { StatsBar } from "@/components/site/hero";
import {
  Solutions,
  Products,
  Process,
  WhyUs,
  TrustBar,
  Testimonials,
  SectionHeader,
} from "@/components/site/sections";
import { SavingsCalculator } from "@/components/site/calculator";
import { FaqSection } from "@/components/site/faq";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { SiteFooter } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { JsonLd } from "@/components/site/json-ld";
import { Button } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title:
    "Φωτοβολταϊκά Συστήματα Θεσσαλονίκης — Αυτόνομα, Net Billing & Υβριδικά",
  description:
    "Η ProΣτέγη σχεδιάζει και εγκαθιστά αυτόνομα και διασυνδεδεμένα φωτοβολταϊκά συστήματα με εξοπλισμό Deye & V-TAC στη Θεσσαλονίκη. Δωρεάν μελέτη, πιστοποιημένος εξοπλισμός, διά βίου υποστήριξη.",
  path: "/",
  keywords: [
    "φωτοβολταϊκά τιμές",
    "φωτοβολταϊκά για σπίτι",
    "αυτονομία ενέργειας",
    "ηλιακά πάνελ Θεσσαλονίκη",
  ],
});

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.slice(0, 5).map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={FAQ_SCHEMA} />
      <SiteHeader />
      <main className="flex-1">
        <Hero3D />
        <StatsBar />
        <TrustBar />
        <Solutions />
        <Products />
        <Process />
        <Testimonials />
        <WhyUs />

        {/* Υπολογιστής εξοικονόμησης */}
        <section
          id="ypologistis"
          className="bg-[#f5f3ec] py-16 sm:py-24"
          aria-label="Υπολογιστής εξοικονόμησης"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Διαδραστικό Εργαλείο"
              title="Υπολογίστε την Εξοικονόμησή σας"
              subtitle="Περάστε τον διακόπτη στην ισχύ που σας ενδιαφέρει και δείτε αμέσως ενδεικτική παραγωγή, εξοικονόμηση και απόσβεση."
            />
            <Reveal>
              <SavingsCalculator />
            </Reveal>
            <Reveal delay={0.15} className="mt-8 flex justify-center">
              <Link href="/ypologistis">
                <Button
                  variant="outline"
                  className="h-12 rounded-xl border-[#0d4c74]/30 px-7 font-heading text-base font-bold text-[#0d4c74] hover:bg-[#0d4c74] hover:text-white"
                >
                  Πώς υπολογίζεται η εξοικονόμηση
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Button>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Συχνές Ερωτήσεις — προεπισκόπηση */}
        <section
          id="faq"
          className="bg-white py-16 sm:py-24"
          aria-label="Συχνές ερωτήσεις"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Συχνές Ερωτήσεις"
              title="Ό,τι Πρέπει να Ξέρετε"
              subtitle="Οι πιο συνηθισμένες ερωτήσεις των πελατών μας — απαντημένες με σαφήνεια και απλά λόγια."
            />
            <Reveal>
              <FaqSection limit={3} />
            </Reveal>
            <Reveal delay={0.15} className="mt-8 flex justify-center">
              <Link href="/faq">
                <Button
                  variant="outline"
                  className="h-12 rounded-xl border-[#2c7a3e]/40 px-7 font-heading text-base font-bold text-[#256d34] hover:bg-[#2c7a3e] hover:text-white"
                >
                  Όλες οι Ερωτήσεις & Απαντήσεις
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Button>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* CTA band */}
        <section className="bg-leaf-gradient py-14 sm:py-16" aria-label="Πρόσκληση δράσης">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl">
                Έτοιμοι να ξεκινήσετε το δικό σας φωτοβολταϊκό;
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
                Ζητήστε τη δωρεάν μελέτη σας σήμερα — οι μηχανικοί μας επισκέπτονται
                τον χώρο σας, αναλύουν τις ανάγκες σας και σας παραδίδουν αναλυτική
                προσφορά χωρίς καμία δέσμευση.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Link href="/epikoinonia">
                  <Button
                    size="lg"
                    className="h-13 rounded-xl bg-white px-7 font-heading text-base font-bold text-[#256d34] shadow-xl hover:bg-[#f2f0e9]"
                  >
                    Δωρεάν Μελέτη & Προσφορά
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
                  </Button>
                </Link>
                <a href="tel:+302310644512">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-13 gap-2 rounded-xl border-white/40 bg-transparent px-7 font-heading text-base font-bold text-white hover:bg-white/10 hover:text-white"
                  >
                    <Phone className="h-5 w-5" aria-hidden />
                    2310 644 512
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* Floating call button (mobile) */}
      <a
        href="tel:+302310644512"
        aria-label="Κλήση στο 2310 644 512"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#2c7a3e] shadow-xl shadow-[#2c7a3e]/40 transition-transform hover:scale-105 sm:hidden"
      >
        <Phone className="h-6 w-6 text-white" aria-hidden />
      </a>
    </div>
  );
}
