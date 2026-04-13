"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Shield, Star, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home_hero.jpg"
            alt="Home hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 -mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white leading-tight drop-shadow-lg">
              Guided by Purpose. <br /> Driven By Grit.
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
              Helping you move forward with confidence in every season.
            </p>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto drop-shadow-md italic">
              Jeremiah 29:11 &quot;For I know the plans I have for you... plans to give you hope and a future.&quot;
            </p>

            <div className="mt-10 max-w-2xl mx-auto">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const address = (e.currentTarget.elements.namedItem("address") as HTMLInputElement).value;
                  window.location.href = `/home-value?address=${encodeURIComponent(address)}`;
                }}
                className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-full border border-white/20 shadow-2xl"
              >
                <div className="flex-grow flex items-center px-4 py-3 sm:py-0">
                  <MapPin className="w-6 h-6 text-[#C9A227] mr-3 shrink-0" />
                  <input
                    name="address"
                    type="text"
                    placeholder="Enter your property address..."
                    required
                    className="w-full bg-transparent border-none text-white placeholder-white/60 focus:outline-none text-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 rounded-xl sm:rounded-full bg-[#C9A227] text-black font-bold text-lg hover:bg-[#d4ac2b] transition-all whitespace-nowrap"
                >
                  Get Home Value
                </button>
              </form>
              
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors flex items-center gap-2 font-medium"
                >
                  Book a Consultation Instead →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white dark:bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 px-4">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-primary font-bold mb-8 dark:text-white">
              The Grit Advantage
            </h2>
            <div className="text-brand-text/80 dark:text-white/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed space-y-6">
              <p>
                GRIT Real Estate was built on one simple belief: our clients deserve an agent who shows up, stays consistent, and never quits on their goals.
              </p>
              <p>
                We are a boutique real estate brokerage serving our community with honesty, hustle, and heart. Our approach is personal, strategic, and grounded in strong communication, so you always feel informed and supported.
              </p>
              <p className="font-semibold text-brand-primary dark:text-brand-secondary pt-2">
                At GRIT, you&apos;re never just another transaction; you&apos;re a relationship we&apos;re committed to protecting long after closing day.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureBlock
              icon={<Star className="w-8 h-8 text-yellow-500" />}
              title="Deep Local Knowledge"
              description="Our experts live and work in the communities we serve, providing unmatched insight into the Kansas and Missouri market."
            />
            <FeatureBlock
              icon={<Shield className="w-8 h-8 text-brand-primary dark:text-brand-300" />}
              title="Grit & Integrity"
              description="We stand by our word. Our negotiation strategy is built on honest values and hard-earned results."
            />
            <FeatureBlock
              icon={<Clock className="w-8 h-8 text-brand-primary dark:text-brand-300" />}
              title="Full-Service Strategy"
              description="From listing to closing, we handle every detail with precision so you can focus on your next move."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-brand-secondary rounded-full blur-3xl opacity-30 pointer-events-none" />
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-brand-primary/80 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Make Your Next Move With Confidence?
          </h2>
          <p className="text-xl text-brand-bg mb-10">
            Honest guidance. Strong Strategy. A team you can trust every step of the way.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-primary rounded-full font-semibold text-lg hover:bg-brand-bg hover:scale-105 transition-all shadow-xl"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureBlock({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center group">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-50 mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 dark:bg-brand-950 dark:border dark:border-brand-800">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-brand-900 mb-3 font-serif dark:text-white">{title}</h3>
      <p className="text-brand-600 leading-relaxed dark:text-brand-300">
        {description}
      </p>
    </div>
  );
}
