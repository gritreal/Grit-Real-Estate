"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { Search, Home, TrendingUp, Calculator, MapPin, User, Mail, Phone, Calendar, Send, CheckCircle2 } from "lucide-react";
import { Suspense } from "react";

function HomeValueContent() {
    const searchParams = useSearchParams();
    const [address, setAddress] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const addrParam = searchParams.get("address");
        if (addrParam) {
            setAddress(addrParam);
            // Smooth scroll to form if address is provided
            setTimeout(() => {
                formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 500);
        }
    }, [searchParams]);

    const scrollToForm = (e: React.FormEvent) => {
        e.preventDefault();
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-brand-primary">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/home_hero.jpg" 
                            alt="Beautiful Kansas Neighborhood"
                            fill
                            className="object-cover opacity-40"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/60 via-brand-primary/40 to-brand-primary" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 max-w-4xl mx-auto text-center px-6"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                            Built on Grit. <br /> Backed by Results.
                        </h1>

                        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                            Get a precision valuation of your property from Kansas and Missouri real estate experts who know your neighborhood.
                        </p>

                        <div className="mt-10 max-w-2xl mx-auto w-full">
                            <form 
                                onSubmit={scrollToForm}
                                className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-full border border-white/20 shadow-2xl"
                            >
                                <div className="flex-grow flex items-center px-4 py-3 sm:py-0">
                                    <MapPin className="w-6 h-6 text-[#C9A227] mr-3 shrink-0" />
                                    <input
                                        type="text"
                                        placeholder="Enter your property address..."
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                        className="w-full bg-transparent border-none text-white placeholder-white/60 focus:outline-none text-lg"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="px-8 py-4 rounded-xl sm:rounded-full bg-[#C9A227] text-black font-bold text-lg hover:bg-[#d4ac2b] transition-all whitespace-nowrap"
                                >
                                    Get Started
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </section>

                {/* Lead Capture Form Section */}
                <section ref={formRef} className="py-24 bg-white relative scroll-mt-20">
                    <div className="max-w-4xl mx-auto px-6">
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    viewport={{ once: true }}
                                    className="bg-brand-bg rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-brand-primary/5"
                                >
                                    <div className="text-center mb-10">
                                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary mb-4">
                                            Request My Free Valuation
                                        </h2>
                                        <p className="text-brand-text/70">
                                            Please provide a few details so we can prepare your custom market analysis.
                                        </p>
                                    </div>

                                    <form 
                                        action="https://api.web3forms.com/submit"
                                        method="POST"
                                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                    >
                                        <input type="hidden" name="access_key" value="f370555b-6ced-4107-b42d-e2e237e6a434" />
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-bold text-brand-primary mb-2">Property Address</label>
                                            <div className="relative">
                                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-primary/40" />
                                                <input 
                                                    type="text"
                                                    name="address"
                                                    required 
                                                    value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                    className="w-full pl-12 pr-4 py-4 bg-white border border-brand-primary/10 rounded-2xl focus:ring-2 focus:ring-[#C9A227] focus:border-transparent outline-none transition-all"
                                                    placeholder="123 Sunflower Ln, Wichita, KS"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-brand-primary mb-2">Full Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-primary/40" />
                                                <input 
                                                    type="text"
                                                    name="name"
                                                    required 
                                                    className="w-full pl-12 pr-4 py-4 bg-white border border-brand-primary/10 rounded-2xl focus:ring-2 focus:ring-[#C9A227] focus:border-transparent outline-none transition-all"
                                                    placeholder="Jane Doe"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-brand-primary mb-2">Email Address</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-primary/40" />
                                                <input 
                                                    type="email"
                                                    name="email"
                                                    required 
                                                    className="w-full pl-12 pr-4 py-4 bg-white border border-brand-primary/10 rounded-2xl focus:ring-2 focus:ring-[#C9A227] focus:border-transparent outline-none transition-all"
                                                    placeholder="jane@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-brand-primary mb-2">Phone Number</label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-primary/40" />
                                                <input 
                                                    type="tel"
                                                    name="phone"
                                                    required 
                                                    className="w-full pl-12 pr-4 py-4 bg-white border border-brand-primary/10 rounded-2xl focus:ring-2 focus:ring-[#C9A227] focus:border-transparent outline-none transition-all"
                                                    placeholder="(316) 555-0123"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-brand-primary mb-2">Timeline to Sell</label>
                                            <div className="relative">
                                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-primary/40" />
                                                <select name="timeline" className="w-full pl-12 pr-4 py-4 bg-white border border-brand-primary/10 rounded-2xl focus:ring-2 focus:ring-[#C9A227] focus:border-transparent outline-none appearance-none transition-all">
                                                    <option>Immediately</option>
                                                    <option>1-3 Months</option>
                                                    <option>3-6 Months</option>
                                                    <option>6+ Months</option>
                                                    <option>Just curious</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="md:col-span-2 mt-4">
                                            <div className="flex items-start space-x-3 p-4 bg-white/50 border border-brand-primary/10 rounded-2xl mb-6">
                                                <input
                                                    type="checkbox"
                                                    id="tcpa-optin"
                                                    name="tcpa_optin"
                                                    value="agreed"
                                                    className="w-5 h-5 rounded text-brand-primary focus:ring-brand-primary cursor-pointer mt-1"
                                                    required
                                                />
                                                <label htmlFor="tcpa-optin" className="text-xs font-medium text-brand-text/80 leading-relaxed cursor-pointer hover:text-brand-primary transition-colors">
                                                    I agree to be contacted by Grit Real Estate via call, email, and text for real estate services. To opt-out, you can reply &apos;stop&apos; at any time or reply &apos;help&apos; for assistance. You can also click the unsubscribe link in the emails. Message and data rates may apply. Message frequency may vary. <Link href="/privacy" className="text-[#C9A227] underline">Privacy Policy</Link>.
                                                </label>
                                            </div>
                                            <button 
                                                type="submit"
                                                className="w-full py-5 bg-brand-primary text-white rounded-2xl font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-xl flex items-center justify-center gap-3"
                                            >
                                                <Send className="w-5 h-5" />
                                                Get My Custom Valuation
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-brand-primary text-white rounded-[2.5rem] p-12 text-center shadow-2xl"
                                >
                                    <div className="flex justify-center mb-8">
                                        <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                                            <CheckCircle2 className="w-12 h-12 text-[#C9A227]" />
                                        </div>
                                    </div>
                                    <h2 className="text-4xl font-serif font-bold mb-4">Request Received!</h2>
                                    <p className="text-xl text-white/80 mb-8 max-w-lg mx-auto">
                                        Thank you, we&apos;ve received your request for {address}. A Grit Real Estate expert will reach out shortly with your detailed market analysis.
                                    </p>
                                    <button 
                                        onClick={() => setIsSubmitted(false)}
                                        className="px-8 py-3 bg-[#C9A227] text-black rounded-full font-bold hover:bg-[#d4ac2b] transition-all"
                                    >
                                        Close
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>

                {/* Value Prop Section */}
                <section className="py-24 bg-brand-bg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary mb-4">
                                Why Know Your Home&apos;s Value?
                            </h2>
                            <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
                                In the Kansas and Missouri market, timing and data are everything. Get a professional analysis of your property&apos;s worth.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <ValueItem
                                icon={<TrendingUp className="w-10 h-10 text-[#C9A227]" />}
                                title="Market Trends"
                                description="With deep knowledge of the Kansas and Missouri markets, we help clients make smart real estate decisions backed by real experience."
                            />
                            <ValueItem
                                icon={<Search className="w-10 h-10 text-[#C9A227]" />}
                                title="Detailed Analysis"
                                description="We look beyond the algorithm to see the unique features of your specific home."
                            />
                            <ValueItem
                                icon={<Calculator className="w-10 h-10 text-[#C9A227]" />}
                                title="Seller Strategy"
                                description="Precision pricing is the first step to a successful, high-return sale."
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default function HomeValuePage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-brand-primary"></div>}>
            <HomeValueContent />
        </Suspense>
    );
}

function ValueItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-brand-bg group">
            <div className="mb-6 bg-brand-bg w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-brand-primary mb-4">{title}</h3>
            <p className="text-brand-text/70 leading-relaxed">{description}</p>
        </div>
    );
}
