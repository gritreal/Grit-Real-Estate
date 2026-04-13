"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Youtube, Mic2, ArrowRight } from "lucide-react";

export default function PodcastPage() {
    return (
        <div className="flex flex-col min-h-screen bg-brand-bg dark:bg-brand-primary">
            {/* Header Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-brand-primary">
                    <div className="absolute inset-0 bg-[url('/images/home_hero.jpg')] bg-cover bg-center mix-blend-overlay opacity-30" />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/20 text-brand-secondary font-bold text-sm mb-8 backdrop-blur-md border border-brand-secondary/30"
                    >
                        <Mic2 className="w-4 h-4" /> NEW EPISODES WEEKLY
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
                    >
                        She&apos;s Got Grit
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-brand-bg/90 max-w-2xl mx-auto mb-10"
                    >
                        Real stories of resilience, hard work, and the Midwest real estate hustle. Hosted by Jenna Pearce.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-brand-secondary/20 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/images/podcast-cover.jpg"
                                alt="Podcast Featured Image"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <p className="text-sm font-bold uppercase tracking-widest text-brand-secondary mb-2">Featured Show</p>
                                <h3 className="text-3xl font-serif font-bold">She&apos;s Got Grit</h3>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-secondary rounded-full -z-10 blur-2xl opacity-40 shrink-0" />
                    </motion.div>

                    {/* Description & Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-serif font-bold text-brand-primary dark:text-white mb-6">
                            Where Grit Meets Real Estate
                        </h2>
                        <div className="space-y-6 text-lg text-brand-text/80 dark:text-brand-white/80 leading-relaxed mb-10">
                            <p>
                                Join us every week as we dive into the raw, honest side of the real estate industry. From navigating tough markets to building a business from the ground up, we share the stories that define what it means to have true grit.
                            </p>
                            <p>
                                Whether you&apos;re a first-time homebuyer, a seasoned investor, or just love a good story of hardworking folks, this show is for you.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="http://www.youtube.com/@shesgotgrit"
                                target="_blank"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-secondary text-black font-bold rounded-full hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                            >
                                <Youtube className="w-6 h-6" /> Watch on YouTube <ArrowRight className="w-4 h-4" />
                            </Link>
                            {/* Future platforms can go here */}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
