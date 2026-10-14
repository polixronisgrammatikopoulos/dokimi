import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const QUICK_LINKS = [
  { href: "/", label: "Αρχική" },
  { href: "/fotovoltaika", label: "Φωτοβολταϊκά Συστήματα" },
  { href: "/proionta", label: "Προϊόντα & Εξοπλισμός" },
  { href: "/ypologistis", label: "Υπολογιστής Εξοικονόμησης" },
  { href: "/etaireia", label: "Η Εταιρεία μας" },
  { href: "/faq", label: "Συχνές Ερωτήσεις" },
  { href: "/epikoinonia", label: "Επικοινωνία" },
];

export function SiteFooter() {
  return (
    <footer className="bg-brand-gradient text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr] lg:px-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f2f0e9] p-2 shadow-lg">
              <Image
                src="/logo.png"
                alt="Λογότυπο ProΣτέγη"
                width={56}
                height={56}
                className="h-12 w-12 object-contain"
              />
            </span>
            <div>
              <p className="font-heading text-2xl font-extrabold tracking-tight">ProΣτέγη</p>
              <p className="text-sm font-medium text-white/70">
                Ηλιακή Ενέργεια, Ανεξάρτητη Ζωή
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
            Σχεδιάζουμε, εγκαθιστούμε και συντηρούμε αυτόνομα και διασυνδεδεμένα
            φωτοβολταϊκά συστήματα τελευταίας γενιάς με πιστοποιημένο εξοπλισμό
            Deye &amp; V-TAC, στη Θεσσαλονίκη και σε όλη τη Βόρεια Ελλάδα. Δωρεάν
            μελέτη, διαφανείς προσφορές και διά βίου τεχνική υποστήριξη.
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label="Πλοήγηση υποσέλιδου">
          <h3 className="font-heading text-base font-bold uppercase tracking-wider text-white/90">
            Σελίδες
          </h3>
          <ul className="mt-4 space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-base font-bold uppercase tracking-wider text-white/90">
            Επικοινωνία
          </h3>
          <ul className="mt-4 space-y-3.5 text-[15px] text-white/75">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#7fc795]" aria-hidden />
              <span>
                Καραολή &amp; Δημητρίου 242,
                <br />
                Εύοσμος 56431, Θεσσαλονίκη
              </span>
            </li>
            <li>
              <a href="tel:+302310644512" className="flex items-center gap-3 transition-colors hover:text-white">
                <Phone className="h-5 w-5 shrink-0 text-[#7fc795]" aria-hidden />
                2310 644 512 · 6947 166 244
              </a>
            </li>
            <li>
              <a href="mailto:info@prostegi.gr" className="flex items-center gap-3 transition-colors hover:text-white">
                <Mail className="h-5 w-5 shrink-0 text-[#7fc795]" aria-hidden />
                info@prostegi.gr
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-sm text-white/55 sm:flex-row sm:px-6 lg:px-8 lg:text-left">
          <p>© {new Date().getFullYear()} ProΣτέγη — Φωτοβολταϊκά Θεσσαλονίκη. Όλα τα δικαιώματα κατοχυρωμένα.</p>
          <p>Όροι Χρήσης · Πολιτική Απορρήτου · Cookies</p>
        </div>
      </div>
    </footer>
  );
}
