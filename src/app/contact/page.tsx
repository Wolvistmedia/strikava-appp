"use client";

import { useActionState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null);

  return (
    <div className="pt-24 pb-20 relative min-h-screen">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6">Talk to an <span className="text-gradient">Advisor</span></h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Book a consultation to map your career gap and find the right roadmap for your next promotion.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-6">
            <GlassCard delay={0.1} className="p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-foreground/50 uppercase tracking-wider mb-1">Email</h4>
                    <p className="text-white font-medium">info@strikava.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-foreground/50 uppercase tracking-wider mb-1">Phone / WhatsApp</h4>
                    <a href="https://wa.me/918383854378" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-accent transition-colors">+91 8383854378</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-foreground/50 uppercase tracking-wider mb-1">Location</h4>
                    <p className="text-white font-medium">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <GlassCard delay={0.2} className="p-8 md:p-10 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>

              {state?.success ? (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in duration-500">

                  <div className="w-20 h-20 bg-green-500/45 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="text-green-500 w-10 h-10" />
                  </div>

                  <h3 className="text-2xl font-bold text-white  mb-4">
                    Request Received!
                  </h3>

                  <p className="text-white/80 font-bold text-base sm:text-xl md:text-xl lg:text-xl mb-8 max-w-md">
                    {state.message}
                  </p>

                  <AnimatedButton
                    onClick={() => window.location.reload()}
                    variant="outline"
                    className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95"
                  >
                    Send Another Message
                  </AnimatedButton>

                </div>
              ) : null}

              <form action={formAction} className="space-y-6">

                {state?.error ? (
                  <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-start">
                    <AlertCircle className="text-red-400 w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-red-200 text-sm">{state.error}</p>
                  </div>
                ) : null}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={isPending}
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-black font-bold focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={isPending}
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-black font-bold focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground/80">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      disabled={isPending}
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-black font-bold focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="program" className="text-sm font-medium text-foreground/80">Program of Interest</label>
                    <select
                      id="program"
                      name="program"
                      disabled={isPending}
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-3   text-black font-bold focus:outline-none focus:border-primary transition-colors appearance-none disabled:opacity-50"
                    >
                      <option value="">Select a program</option>
                      <option value="cloud">Cloud Security Roadmap</option>
                      <option value="aws">AWS Certifications</option>
                      <option value="cyber">Ethical Hacking</option>
                      <option value="devops">DevOps Engineering</option>
                    </select>
                  </div>
                  
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message / Career Goals *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    disabled={isPending}
                    className="w-full bg-background/50 border border-border rounded-lg px-4 py-3  text-black font-medium text-xl focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
                    placeholder="Tell us about your current role and what you want to achieve..."
                  ></textarea>
                </div>

                <AnimatedButton
                  type="submit"
                  disabled={isPending}
                  className="w-full py-4 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : "Submit Request"}
                </AnimatedButton>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
