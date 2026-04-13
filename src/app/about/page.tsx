"use client";

import Image from "next/image";
import { Award, Target, Users, Globe2, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { agents } from "@/data/agents";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-brand-bg dark:bg-brand-primary">

            {/* Page Header */}
            <section className="relative h-[50vh] flex items-end justify-center overflow-hidden pb-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('/images/brokeragegroup.jpg')] bg-cover bg-[center_35%]" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif font-medium text-white/90 drop-shadow-xl">
                        The Grit Standard.
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium drop-shadow-lg">
                        Real estate Built on Trust, Integrity, and Results.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-serif text-brand-primary font-bold mb-6 dark:text-white">
                            The Grit Difference
                        </h2>
                        <p className="text-lg text-brand-text/70 mb-6 leading-relaxed dark:text-brand-white">
                            We&apos;re not just another brokerage—and you&apos;re not just another transaction. At Grit Real Estate, we&apos;re built on purpose, driven by grit, and grounded in a genuine love for people. Every client matters. Every relationship matters. And every decision we make is centered around serving you the right way.
                        </p>
                        <p className="text-lg text-brand-text/70 mb-6 leading-relaxed dark:text-brand-white">
                            This isn&apos;t about chasing deals. It&apos;s about building trust, creating lasting relationships, and showing up with consistency and integrity—every single time.
                        </p>
                        <p className="text-lg text-brand-text/70 mb-8 leading-relaxed dark:text-brand-white">
                            Because real estate isn&apos;t just business to us. It&apos;s personal. This is more than a service. It&apos;s a movement. <span className="font-semibold text-brand-primary dark:text-brand-secondary">And it&apos;s built for people who expect and deserve better.</span>
                        </p>

                        <div className="grid grid-cols-1 gap-8 pt-4">
                            <div className="flex items-start space-x-4">
                                <div className="w-10 flex justify-center flex-shrink-0 mt-0.5">
                                    <Image src="/images/logo.png" alt="Grit Logo" width={40} height={40} className="object-contain brightness-75 contrast-125 drop-shadow-[0_0_1px_rgba(0,0,0,0.5)] dark:brightness-150 dark:drop-shadow-[0_0_1px_rgba(255,255,255,0.5)]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-900 mb-2 dark:text-white">Our Mission</h4>
                                    <p className="text-sm text-brand-600 dark:text-brand-400">At Grit Real Estate, our mission is to serve people with integrity, lead with purpose, and build lasting relationships—not transactions. We show up with grit, heart, and a commitment to doing what&apos;s right, every time.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-10 flex justify-center flex-shrink-0 mt-0.5">
                                    <Globe2 className="w-7 h-7 text-brand-secondary dark:text-brand-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-primary mb-2 dark:text-white">Local Reach</h4>
                                    <p className="text-sm text-brand-text/70 dark:text-brand-white">Connecting buyers and sellers across the great states of Kansas and Missouri.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-brand-bg/50 dark:bg-brand-secondary/50">
                        <Image
                            src="/images/Mobrokerage.jpg"
                            alt="Grit Real Estate Brokers"
                            fill
                            className="object-contain"
                        />

                    </div>
                </div>
            </section>

            <section id="agents" className="py-24 bg-white dark:bg-brand-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-brand-primary font-bold mb-4 dark:text-white">
                            Grit Agents
                        </h2>
                        <p className="text-brand-text/70 max-w-2xl mx-auto text-lg dark:text-brand-white">
                            Meet the hardworking team behind Grit Real Estate. Our team brings decades of combined experience in local real estate and finance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {agents.map((agent) => (
                            <Link key={agent.slug} href={`/agents/${agent.slug}`}>
                                <AgentCard
                                    image={agent.image}
                                    name={agent.name}
                                    role={agent.title}
                                    phone={agent.phone}
                                    email={agent.email}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}

function AgentCard({
    image,
    name,
    role,
    phone,
    email,
}: {
    image: string;
    name: string;
    role: string;
    phone: string;
    email: string;
}) {
    return (
        <div className="group rounded-2xl overflow-hidden bg-brand-bg transition-all hover:shadow-2xl dark:bg-brand-primary border border-brand-bg dark:border-brand-secondary">
            <div className="relative h-96 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-all duration-500" />
            </div>
            <div className="p-8 text-center relative bg-white dark:bg-brand-primary">
                <h3 className="text-2xl font-serif font-bold text-brand-primary mb-1 dark:text-white">{name}</h3>
                <p className="text-brand-text/70 font-medium mb-6 dark:text-brand-white">{role}</p>

                <div className="flex flex-col space-y-3 pt-6 border-t border-brand-bg dark:border-brand-secondary">
                    <a href={`tel:${phone}`} className="flex items-center justify-center text-brand-text/70 hover:text-brand-primary transition-colors text-sm dark:text-brand-white dark:hover:text-brand-secondary">
                        <Phone className="w-4 h-4 mr-2" />
                        {phone}
                    </a>
                    <a href={`mailto:${email}`} className="flex items-center justify-center text-brand-text/70 hover:text-brand-primary transition-colors text-sm dark:text-brand-white dark:hover:text-brand-secondary">
                        <Mail className="w-4 h-4 mr-2" />
                        {email}
                    </a>
                </div>
            </div>
        </div>
    );
}
