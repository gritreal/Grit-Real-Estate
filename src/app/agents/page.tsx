"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { agents } from "@/data/agents";

export default function AgentsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-brand-bg dark:bg-brand-primary">
            {/* Header Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-brand-primary">
                    <div className="absolute inset-0 bg-[url('/images/home_hero.jpg')] bg-cover bg-center mix-blend-overlay opacity-20" />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
                    >
                        Our Agents
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
                    >
                        Real People. Real Relationships. Real Results.
                    </motion.p>
                </div>
            </section>

            {/* Agents Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {agents.map((agent, index) => (
                        <motion.div
                            key={agent.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link href={`/agents/${agent.slug}`} className="group block">
                                <div className="rounded-2xl overflow-hidden bg-white dark:bg-brand-primary border border-brand-bg dark:border-brand-secondary transition-all hover:shadow-2xl">
                                    <div className="relative h-96 overflow-hidden">
                                        <Image
                                            src={agent.image}
                                            alt={agent.name}
                                            fill
                                            className="object-cover transition-all duration-500 transform group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-all duration-500" />
                                    </div>
                                    <div className="p-8 text-center relative">
                                        <h3 className="text-2xl font-serif font-bold text-brand-primary mb-1 dark:text-white group-hover:text-brand-secondary transition-colors">
                                            {agent.name}
                                        </h3>
                                        <p className="text-brand-text/70 font-medium mb-6 dark:text-white">{agent.title}</p>

                                        <div className="flex flex-col space-y-3 pt-6 border-t border-brand-bg dark:border-brand-secondary">
                                            <div className="flex items-center justify-center text-brand-text/70 text-sm dark:text-brand-white">
                                                <Phone className="w-4 h-4 mr-2" />
                                                {agent.phone}
                                            </div>
                                            <div className="flex items-center justify-center text-brand-text/70 text-sm dark:text-brand-white">
                                                <Mail className="w-4 h-4 mr-2" />
                                                {agent.email}
                                            </div>
                                        </div>

                                        <div className="mt-8 flex items-center justify-center gap-2 text-brand-secondary font-bold group-hover:translate-x-1 transition-transform">
                                            View Profile <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
