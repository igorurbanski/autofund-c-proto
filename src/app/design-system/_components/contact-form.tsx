"use client"

import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

export function ContactForm() {
  return (
    <Section narrow>
      <div className="flex flex-col gap-10">
        <SectionHeading
          title="Skontaktuj się z nami"
          subtitle="Odpowiemy na każde pytanie"
        />
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Formularz kontaktowy</CardTitle>
            <CardDescription>
              Opisz swoją sytuację, a my przygotujemy indywidualną ofertę.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <form className="grid gap-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="grid gap-2.5">
                  <Label htmlFor="ds-name">Imię i nazwisko</Label>
                  <Input id="ds-name" placeholder="Jan Kowalski" />
                </div>
                <div className="grid gap-2.5">
                  <Label htmlFor="ds-email">Adres e-mail</Label>
                  <Input
                    id="ds-email"
                    type="email"
                    placeholder="jan@firma.pl"
                  />
                </div>
              </div>
              <div className="grid gap-2.5">
                <Label htmlFor="ds-phone">Numer telefonu</Label>
                <Input
                  id="ds-phone"
                  type="tel"
                  placeholder="+48 600 000 000"
                />
              </div>
              <div className="grid gap-2.5">
                <Label htmlFor="ds-message">Wiadomość</Label>
                <Textarea
                  id="ds-message"
                  placeholder="Opisz czego potrzebujesz..."
                  rows={4}
                />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-base text-muted-foreground">
                  Wysyłając akceptujesz{" "}
                  <Dialog>
                    <DialogTrigger className="underline underline-offset-3 hover:text-foreground">
                      politykę prywatności
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Polityka prywatności</DialogTitle>
                        <DialogDescription>
                          Twoje dane osobowe przetwarzamy zgodnie z RODO
                          wyłącznie w celu obsługi Twojego zapytania. Nie
                          udostępniamy danych podmiotom trzecim. Masz prawo do
                          wglądu, poprawy i usunięcia swoich danych w każdym
                          momencie.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter showCloseButton />
                    </DialogContent>
                  </Dialog>
                </p>
                <Button className="mt-4 sm:mt-0">
                  Wyślij wiadomość
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
