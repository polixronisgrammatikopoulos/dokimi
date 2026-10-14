import { Phone } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { Hero, StatsBar } from "@/components/site/hero";
import {
  Solutions,
  Products,
  Process,
  WhyUs,
  SectionHeader,
} from "@/components/site/sections";
import { SavingsCalculator } from "@/components/site/calculator";
import { FaqSection } from "@/components/site/faq";
import { ContactForm } from "@/components/site/contact-form";
import { SiteFooter } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, PhoneCall, Mail, Clock } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Διεύθυνση",
    lines: ["Καραολή & Δημητρίου 242", "Εύοσμος 56431, Θεσσαλονίκη"],
    href: "https://maps.google.com/?q=Καραολή+και+Δημητρίου+242,+Εύοσμος+56431",
    action: "Οδηγίες",
  },
  {
    icon: PhoneCall,
    title: "Τηλέφωνα",
    lines: ["2310 644 512", "6947 166 244"],
    href: "tel:+302310644512",
    action: "Καλέστε μας",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@prostegi.gr"],
    href: "mailto:info@prostegi.gr",
    action: "Στείλτε email",
  },
  {
    icon: Clock,
    title: "Εξυπηρέτηση",
    lines: ["Δευτέρα – Παρασκευή", "Σάββατο: με ραντεβού"],
    href: "#epikoinonia",
    action: "Φόρμα επικοινωνίας",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <Solutions />
        <Products />
        <Process />
        <WhyUs />

        {/* Υπολογιστής εξοικονόμησης */}
        <section id="ypologistis" className="bg-[#f5f3ec] py-16 sm:py-24" aria-label="Υπολογιστής εξοικονόμησης">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Διαδραστικό Εργαλείο"
              title="Υπολογίστε την Εξοικονόμησή σας"
              subtitle="Περάστε τον διακόπτη στην ισχύ που σας ενδιαφέρει και δείτε αμέσως ενδεικτική παραγωγή, εξοικονόμηση και απόσβεση."
            />
            <Reveal>
              <SavingsCalculator />
            </Reveal>
          </div>
        </section>

        {/* Συχνές Ερωτήσεις */}
        <section id="faq" className="bg-white py-16 sm:py-24" aria-label="Συχνές ερωτήσεις">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Συχνές Ερωτήσεις"
              title="Ό,τι Πρέπει να Ξέρετε"
              subtitle="Οι πιο συνηθισμένες ερωτήσεις των πελατών μας — απαντημένες με σαφήνεια και απλά λόγια."
            />
            <Reveal>
              <FaqSection />
            </Reveal>
          </div>
        </section>

        {/* Επικοινωνία */}
        <section id="epikoinonia" className="bg-[#f5f3ec] py-16 sm:py-24" aria-label="Επικοινωνία">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Επικοινωνία"
              title="Ζητήστε τη Δωρεάν σας Μελέτη"
              subtitle="Συμπληρώστε τη φόρμα ή καλέστε μας απευθείας — σας απαντάμε εντός μίας εργάσιμης ημέρας."
            />

            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
              {/* Info cards */}
              <Reveal className="flex flex-col gap-4">
                {CONTACT_INFO.map((item) => (
                  <Card key={item.title} className="border-border shadow-sm transition-shadow hover:shadow-md">
                    <CardContent className="flex items-start gap-4 p-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
                        <item.icon className="h-6 w-6 text-[#2c7a3e]" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-heading text-base font-extrabold text-[#0d4c74]">
                          {item.title}
                        </h3>
                        {item.lines.map((line) => (
                          <p key={line} className="text-[15px] leading-relaxed text-muted-foreground">
                            {line}
                          </p>
                        ))}
                        <a
                          href={item.href}
                          className="mt-1.5 inline-block text-sm font-bold text-[#2c7a3e] underline-offset-4 hover:underline"
                        >
                          {item.action} →
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </Reveal>

              {/* Form */}
              <Reveal delay={0.1}>
                <ContactForm />
              </Reveal>
            </div>
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
