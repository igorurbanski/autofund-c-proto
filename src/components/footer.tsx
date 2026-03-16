import Link from "next/link"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const NAV_LINKS = [
  { href: "#oferta", label: "Oferta" },
  { href: "#jak-to-dziala", label: "Jak to działa" },
  { href: "#wniosek", label: "Złóż wniosek" },
  { href: "#faq", label: "FAQ" },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-container px-6 py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold tracking-tight">AutoFund</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Pożyczki pod zabezpieczenie pojazdu dla firm. Działamy na terenie całej Polski.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium">Nawigacja</p>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium">Kontakt</p>
            <ul className="mt-3 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="mt-0.5 size-4 shrink-0" />
                <div>
                  <a href="tel:+48798390147" className="font-semibold transition-colors hover:text-foreground">
                    +48 798 390 147
                  </a>
                  <p className="text-xs">Biuro Obsługi Klienta</p>
                </div>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="size-4 shrink-0" />
                <a href="mailto:bok@autofund.pl" className="transition-colors hover:text-foreground">
                  bok@autofund.pl
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="size-4 shrink-0" />
                <span>pon. – pt. 9:00 – 17:00</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium">Adres</p>
            <div className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <address className="not-italic">
                ul. Batorego 23/7<br />
                81-365 Gdynia
              </address>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} AutoFund. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  )
}
