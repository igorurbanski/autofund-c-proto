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

const IMG_CAR = "/illustration-example.png"
const IMG_DOC = "/illustration-example-2.png"

export const PRODUCTS: Product[] = [
  {
    id: "auto-drive",
    name: "AutoDrive",
    tagline: "Jedź dalej — my finansujemy",
    description:
      "Zabezpiecz pożyczkę swoim pojazdem i korzystaj z niego bez ograniczeń. Idealne, gdy potrzebujesz gotówki, ale nie chcesz rezygnować z auta.",
    icon: Car,
    color: "plum",
    steps: [
      {
        title: "Skontaktuj się z nami",
        description: "Zadzwoń lub wypełnij formularz — doradzimy najlepsze rozwiązanie",
        image: IMG_CAR,
      },
      {
        title: "Wypełnij wniosek",
        description: "Szybki wniosek online — to proste i zajmuje chwilę",
        image: IMG_DOC,
      },
      {
        title: "Wyślij dokumenty",
        description: "Prześlij nam wymagane dokumenty — pomagamy na każdym kroku",
        image: IMG_DOC,
      },
      {
        title: "Wycena pojazdu",
        description:
          "Wycenimy Twój pojazd na podstawie dokumentów i wideorozmowy z rzeczoznawcą lub dokumentów złożonych przez Ciebie",
        image: IMG_CAR,
      },
      {
        title: "Notariusz i rejestracja",
        description:
          "Podpisanie dokumentów u notariusza i wizyta w urzędzie komunikacji",
        image: IMG_DOC,
      },
    ],
  },
  {
    id: "auto-start",
    name: "AutoStart",
    tagline: "Sfinansuj swój następny pojazd",
    description:
      "Znajdź auto dla firmy, a my zapewnimy finansowanie zakupu. Ty wybierasz pojazd — my załatwiamy resztę.",
    icon: KeyRound,
    color: "lime",
    steps: [
      {
        title: "Wybór pojazdu",
        description: "Znajdź auto, które chcesz kupić — nowe lub używane",
        image: IMG_CAR,
      },
      {
        title: "Wniosek i wycena",
        description: "Składasz wniosek, a my wyceniamy wybrany pojazd",
        image: IMG_DOC,
      },
      {
        title: "Dokumenty i notariusz",
        description: "Przygotowujemy dokumenty, podpisujemy umowę u notariusza",
        image: IMG_DOC,
      },
      {
        title: "Rejestracja",
        description: "Rejestrujemy pojazd na Ciebie z zabezpieczeniem na czas spłaty",
        image: IMG_DOC,
      },
      {
        title: "Finalizacja",
        description: "Otrzymujesz kluczyki i środki — auto jest Twoje",
        image: IMG_CAR,
      },
    ],
  },
  {
    id: "auto-park",
    name: "AutoPark",
    tagline: "Szybka gotówka na krótki okres",
    description:
      "Zostaw pojazd na naszym strzeżonym placu, a odbierz go po spłacie. Minimum formalności, maksimum szybkości.",
    icon: Timer,
    color: "violet",
    steps: [
      {
        title: "Kontakt",
        description: "Zadzwoń lub napisz — odpowiadamy od razu",
        image: IMG_CAR,
      },
      {
        title: "Wycena pojazdu",
        description: "Przyjeżdżasz do nas, wyceniamy auto na miejscu",
        image: IMG_CAR,
      },
      {
        title: "Wniosek",
        description: "Szybki wniosek — minimum formalności",
        image: IMG_DOC,
      },
      {
        title: "Przekazanie auta",
        description: "Zostawiasz pojazd na naszym strzeżonym placu",
        image: IMG_CAR,
      },
      {
        title: "Wypłata",
        description: "Gotówka nawet tego samego dnia",
        image: IMG_DOC,
      },
    ],
  },
  {
    id: "smart-plan",
    name: "SmartPlan",
    tagline: "Twoje auto, Twoje zasady",
    description:
      "Odkupujemy Twój pojazd i dajemy Ci opcję odkupu do 36 miesięcy. Płacisz opłatę rezerwacyjną, a jeździsz jak dotychczas.",
    icon: ArrowLeftRight,
    color: "olive",
    steps: [
      {
        title: "Wycena",
        description: "Wyceniamy Twoje auto i ustalamy warunki odkupu",
        image: IMG_CAR,
      },
      {
        title: "Odkup pojazdu",
        description: "Kupujemy Twój samochód — otrzymujesz środki od razu",
        image: IMG_CAR,
      },
      {
        title: "Umowa opcji",
        description: "Podpisujesz umowę opcji odkupu na okres do 36 miesięcy",
        image: IMG_DOC,
      },
      {
        title: "Użytkowanie",
        description: "Jeździsz dalej jak dotychczas, płacąc opłatę rezerwacyjną",
        image: IMG_CAR,
      },
      {
        title: "Twoja decyzja",
        description: "Odkup auto po stałej cenie lub rozwiąż umowę bez zobowiązań",
        image: IMG_DOC,
      },
    ],
  },
]
