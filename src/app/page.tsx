import { Suspense } from "react"
import Loading from "@/components/Loading"
import Hero from "@/components/Hero"
import ServicesGrid from "@/components/ServicesGrid"
import CtaSection from "@/components/CtaSection"
import ContactForm from "@/components/ContactForm"

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Hero />
      <ServicesGrid />
      <CtaSection />
      <ContactForm />
    </Suspense>
  )
}
