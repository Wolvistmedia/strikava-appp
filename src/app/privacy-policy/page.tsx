import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-20 relative min-h-screen">
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/20 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="mb-8 text-sm text-foreground/60 flex items-center space-x-2">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary">Privacy Policy</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Privacy <span className="text-gradient">Policy</span></h1>
        <p className="text-foreground/70 mb-10">Last updated: August 2024</p>
        
        <GlassCard delay={0.1} className="p-8 md:p-12 space-y-8 text-foreground/80 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              At Strikava, we respect your privacy. We collect personal data necessary to provide our training and certification services. This includes your name, email address, phone number, and professional details provided during registration or inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/70">
              <li>To deliver training content, mentorship, and course materials.</li>
              <li>To process transactions and issue certification vouchers.</li>
              <li>To communicate important updates regarding schedules and curriculum changes.</li>
              <li>To provide tailored career roadmap recommendations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Sharing & Third Parties</h2>
            <p className="mb-4">
              Strikava does not sell, rent, or trade your personal information to third parties. We may share necessary data exclusively with official certification bodies (e.g., AWS, CompTIA, PMI) solely for the purpose of booking your exams and issuing credentials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Security Measures</h2>
            <p className="mb-4">
              We implement industry-standard encryption and secure server hosting to protect your personal data against unauthorized access, alteration, or data breaches.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Information</h2>
            <p className="mb-4">
              If you have any questions regarding this Privacy Policy or how your data is handled, please reach out to our support team at <a href="mailto:info@strikava.com" className="text-primary hover:underline">info@strikava.com</a> or via phone at <a href="tel:+918383854378" className="text-primary hover:underline">+91 8383854378</a>.
            </p>
          </section>
        </GlassCard>
      </div>
    </div>
  );
}
