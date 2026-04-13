import { Car, KeyRound, Timer, ArrowLeftRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type ProductStep = {
  title: string
  description: string
  image: string
}

export type ProductColor = "violet" | "lime" | "plum" | "olive"

export type Product = {
  id: string
  name: string
  tagline: string
  description: string
  icon: LucideIcon
  color: ProductColor
  steps: ProductStep[]
}

export const PRODUCTS: Product[] = [
  {
    id: "auto-drive",
    name: "AutoDrive",
    tagline: "Pożyczka pod zabezpieczenie",
    description:
      "Zabezpiecz pożyczkę swoim pojazdem i korzystaj z niego bez ograniczeń. Idealne, gdy potrzebujesz gotówki, ale nie chcesz rezygnować z auta.",
    icon: Car,
    color: "plum",
    steps: [
      {
        title: "Skontaktuj się z nami",
        description: "Zadzwoń lub wypełnij formularz — doradzimy najlepsze rozwiązanie",
        image: "/auto-drive-step-1-contact.jpg",
      },
      {
        title: "Wypełnij wniosek",
        description: "Szybki wniosek online — to proste i zajmuje chwilę",
        image: "/auto-drive-step-2-form.jpg",
      },
      {
        title: "Wyślij dokumenty",
        description: "Prześlij nam wymagane dokumenty — pomagamy na każdym kroku",
        image: "/auto-drive-step-3-documents.jpg",
      },
      {
        title: "Wycena pojazdu",
        description:
          "Wycenimy Twój pojazd na podstawie dokumentów i wideorozmowy z rzeczoznawcą lub dokumentów złożonych przez Ciebie",
        image: "/auto-drive-step-4-valuation.jpg",
      },
      {
        title: "Notariusz i rejestracja",
        description:
          "Podpisanie dokumentów u notariusza i wizyta w urzędzie komunikacji",
        image: "/auto-drive-step-5-notary.jpg",
      },
    ],
  },
  {
    id: "auto-start",
    name: "AutoStart",
    tagline: "Pożyczka na zakup",
    description:
      "Znajdź auto dla firmy, a my zapewnimy finansowanie zakupu. Ty wybierasz pojazd — my załatwiamy resztę.",
    icon: KeyRound,
    color: "lime",
    steps: [
      {
        title: "Wybór pojazdu",
        description: "Znajdź auto, które chcesz kupić — musisz już mieć wybrany model oraz dealera samochodowego lub osobę sprzedającą",
        image: "/auto-start-step-1-vehicle-select.jpg",
      },
      {
        title: "Wniosek i wycena",
        description: "Składasz wniosek, a my wyceniamy wybrany pojazd",
        image: "/auto-start-step-2-form.jpg",
      },
      {
        title: "Dokumenty i notariusz",
        description: "Przygotowujemy dokumenty, podpisujemy umowę u notariusza",
        image: "/auto-start-step-3-documents.jpg",
      },
      {
        title: "Rejestracja",
        description: "Rejestrujemy pojazd na Ciebie z zabezpieczeniem na czas spłaty",
        image: "/auto-start-step-4-registration.jpg",
      },
    ],
  },
  {
    id: "auto-park",
    name: "AutoPark",
    tagline: "Zostaw swój samochód u nas",
    description:
      "Zostaw pojazd na naszym strzeżonym placu, a odbierz go po spłacie. Minimum formalności, maksimum szybkości.",
    icon: Timer,
    color: "violet",
    steps: [
      {
        title: "Kontakt",
        description: "Zadzwoń lub wypełnij wniosek.",
        image: "/auto-park-step-1-contact.jpg",
      },
      {
        title: "Dojazd",
        description: "Dojazd na wyznaczony przez nas parking",
        image: "/auto-park-step-2-navigation.jpg",
      },
      {
        title: "Wycena",
        description: "Przyjeżdżasz do nas, wyceniamy auto na miejscu",
        image: "/auto-park-step-3-valuation.jpg",
      },
      {
        title: "Podpisanie umowy, przekazanie auta",
        description: "Zostawiasz pojazd na naszym strzeżonym placu",
        image: "/auto-park-step-4-handover.jpg",
      },
      {
        title: "Wypłata",
        description: "Gotówka nawet tego samego dnia przelewem na konto wyznaczone przez Ciebie",
        image: "/auto-park-step-5-payout.jpg",
      },
    ],
  },
  {
    id: "smart-plan",
    name: "SmartPlan",
    tagline: "Sprzedaj auto — jeździj nim dalej",
    description:
      "Odkupujemy Twój pojazd i dajemy Ci opcję odkupu do 36 miesięcy. Płacisz opłatę rezerwacyjną, a jeździsz jak dotychczas.",
    icon: ArrowLeftRight,
    color: "olive",
    steps: [
      {
        title: "Skontaktuj się z nami",
        description: "Zadzwoń lub wypełnij formularz — doradzimy najlepsze rozwiązanie",
        image: "/smart-plan-step-1-contact.jpg",
      },
      {
        title: "Wypełnij wniosek",
        description: "Szybki wniosek online — to proste i zajmuje chwilę",
        image: "/smart-plan-step-2-form.jpg",
      },
      {
        title: "Wyślij dokumenty",
        description: "Prześlij nam wymagane dokumenty — pomagamy na każdym kroku",
        image: "/smart-plan-step-3-documents.jpg",
      },
      {
        title: "Wycena pojazdu",
        description:
          "Wycenimy Twój pojazd na podstawie dokumentów i wideorozmowy z rzeczoznawcą lub dokumentów złożonych przez Ciebie",
        image: "/smart-plan-step-4-valuation.jpg",
      },
      {
        title: "Notariusz i rejestracja",
        description:
          "Podpisanie dokumentów u notariusza i wizyta w urzędzie komunikacji",
        image: "/smart-plan-step-5-notary.jpg",
      },
    ],
  },
]
