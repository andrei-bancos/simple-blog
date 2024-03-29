import ContactForm from "@/app/(root)/contact/components/contactForm";
import SocialMedia from "@/app/(root)/contact/components/socialMedia";

export const metadata = {
  title: 'Contact'
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto">
        <div className="flex flex-col items-center mb-[50px]">
          <h1 className="text-[35px] font-medium">Contact</h1>
          <p className="text-[20px] text-center">For contact us use form below</p>
        </div>
        <div className="flex flex-wrap justify-center gap-[50px] w-full">
          <ContactForm />
          <SocialMedia />
        </div>
      </section>
    </main>
  )
}