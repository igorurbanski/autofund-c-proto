import { Hero } from "./_components/hero"
import { Features } from "./_components/features"
import { Stats } from "./_components/stats"
import { Products } from "./_components/products"
import { Testimonials } from "./_components/testimonials"
import { ContactForm } from "./_components/contact-form"
import { CtaBanner } from "./_components/cta-banner"
import { FooterPlaceholder } from "./_components/footer-placeholder"

export default function DesignSystemPage() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Products />
      <Testimonials />
      <ContactForm />
      <CtaBanner />
      <FooterPlaceholder />
    </>
  )
}
