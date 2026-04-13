"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, User, ArrowRight, CheckCircle, MapPin } from "lucide-react";
import Link from "next/link";

const reviews = [
    {
        name: "Sarah & Mike Thompson",
        location: "Gardner, KS",
        text: "Jenna and her team at Grit Real Estate were absolutely incredible. We had a complex sell-buy situation, and they handled every detail with such precision and grit. They got us over asking for our home and found us exactly what we needed in record time.",
        rating: 5,
        type: "Seller & Buyer",
        agent: "Jenna Pearce"
    },
    {
        name: "David Rodriguez",
        location: "Overland Park, KS",
        text: "I've worked with several agents over the years, but Jasmine's approach was a breath of fresh air. No fluff, just hard work and results. She knows the KC metro market better than anyone else I've met. Highly recommend if you want things done right.",
        rating: 5,
        type: "Buyer",
        agent: "Jasmine Russell"
    },
    {
        name: "Emily Chen",
        location: "Boonville, MO",
        text: "Megan made our first home search so much easier than we expected. She was patient, knowledgeable, and always had our best interests in mind. She didn't just show us houses; she explained the strategy behind our offers.",
        rating: 5,
        type: "First-Time Buyer",
        agent: "Megan Reuter"
    },
    {
        name: "Robert & Linda Miller",
        location: "Overland Park, KS",
        text: "Hardworking is an understatement. Jessica went above and beyond to make sure our property was staged and marketed perfectly. The communication was top-notch, and we felt supported every step of the way.",
        rating: 5,
        type: "Seller",
        agent: "Jessica Goodwin"
    },
    {
        name: "Mark Wilson",
        location: "Kansas City, MO",
        text: "If you want a brokerage that actually fights for you, go with Grit. Julia was relentless in helping us secure our dream home in a very competitive market. Her negotiation skills are unmatched.",
        rating: 5,
        type: "Buyer",
        agent: "Julia Lyashevskiy"
    },
    {
        name: "The Grahams",
        location: "Lenexa, KS",
        text: "Rachel was a delight to work with. She was incredibly responsive and always had the answers to our questions. She made the entire process feel seamless and stress-free.",
        rating: 5,
        type: "Buyer",
        agent: "Rachel Rolfe"
    }
];

export default function ReviewsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-brand-primary">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/home_hero.jpg"
                            alt="Grit Real Estate Client Success"
                            fill
                            className="object-cover opacity-30"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 via-transparent to-brand-primary" />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-1.5 bg-[#C9A227]/20 text-[#C9A227] rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-[#C9A227]/30">
                                Client Success Stories
                            </span>
                            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
                                Built on Grit. <br /> Proven by <span className="text-[#C9A227]">Results.</span>
                            </h1>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                                Don&apos;t just take our word for it. See why homeowners across Kansas and Missouri trust our hardworking experts.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Recap */}
                <section className="py-12 bg-white border-b border-brand-bg relative z-20 -mt-10 max-w-5xl mx-auto rounded-3xl shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brand-bg">
                        <div className="text-center p-8">
                            <div className="text-4xl font-serif font-bold text-brand-primary mb-2">5.0</div>
                            <div className="flex justify-center gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-[#C9A227] text-[#C9A227]" />
                                ))}
                            </div>
                            <p className="text-brand-text/60 font-medium">Average Rating</p>
                        </div>
                        <div className="text-center p-8">
                            <div className="text-4xl font-serif font-bold text-brand-primary mb-2">500+</div>
                            <p className="text-brand-text/60 font-medium">Families Assisted</p>
                        </div>
                        <div className="text-center p-8">
                            <div className="text-4xl font-serif font-bold text-brand-primary mb-2">98%</div>
                            <p className="text-brand-text/60 font-medium">Referral Rate</p>
                        </div>
                    </div>
                </section>

                {/* Reviews Grid */}
                <section className="py-24 bg-brand-bg/30">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {reviews.map((review, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 border border-brand-bg group relative flex flex-col"
                                >
                                    <div className="absolute top-8 right-8 text-brand-bg group-hover:text-[#C9A227]/10 transition-colors">
                                        <Quote className="w-12 h-12" />
                                    </div>

                                    <div className="flex gap-1 mb-6">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-[#C9A227] text-[#C9A227]" />
                                        ))}
                                    </div>

                                    <p className="text-brand-primary leading-relaxed mb-8 flex-grow italic text-lg">
                                        &quot;{review.text}&quot;
                                    </p>

                                    <div className="pt-8 border-t border-brand-bg flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold">
                                                {review.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-brand-primary">{review.name}</h4>
                                                <div className="flex items-center text-xs text-brand-text/60 gap-1">
                                                    <MapPin className="w-3 h-3" />
                                                    {review.location}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center gap-2">
                                        <span className="px-3 py-1 bg-brand-bg text-[10px] font-bold text-brand-primary rounded-full uppercase tracking-tighter border border-brand-primary/5">
                                            {review.type}
                                        </span>
                                        <span className="text-[10px] text-brand-text/70 italic font-medium">
                                            with {review.agent}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-6">
                            Ready to be our next success story?
                        </h2>
                        <p className="text-xl text-brand-text/70 mb-10">
                            Experience the Grit Real Estate difference firsthand. Whether buying or selling, we&apos;re here to work harder for you.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-brand-primary text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                Get Started Today
                            </Link>
                            <Link
                                href="/home-value"
                                className="px-8 py-4 bg-white text-brand-primary border border-brand-primary/10 rounded-full font-bold text-lg hover:bg-brand-bg transition-all"
                            >
                                What&apos;s My Home Worth?
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
