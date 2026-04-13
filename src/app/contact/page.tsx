"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
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
                        Contact Us
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

            {/* Contact Form & Info Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-brand-primary p-8 md:p-12 rounded-3xl shadow-2xl border border-brand-bg dark:border-brand-secondary"
                    >
                        <h2 className="text-3xl font-serif font-bold text-brand-primary mb-8 dark:text-white">Send Us a Message</h2>
                        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                            <input type="hidden" name="access_key" value="f370555b-6ced-4107-b42d-e2e237e6a434" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-brand-text/70 dark:text-brand-white">Display Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full px-5 py-4 rounded-xl bg-brand-bg dark:bg-brand-secondary border-none focus:ring-2 focus:ring-brand-secondary transition-all outline-none"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-brand-text/70 dark:text-brand-white">Lead Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="john@example.com"
                                        className="w-full px-5 py-4 rounded-xl bg-brand-bg dark:bg-brand-secondary border-none focus:ring-2 focus:ring-brand-secondary transition-all outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-semibold text-brand-text/70 dark:text-brand-white">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full px-5 py-4 rounded-xl bg-brand-bg dark:bg-brand-secondary border-none focus:ring-2 focus:ring-brand-secondary transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="location" className="text-sm font-semibold text-brand-text/70 dark:text-brand-white">Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        id="location"
                                        placeholder="City, State"
                                        className="w-full px-5 py-4 rounded-xl bg-brand-bg dark:bg-brand-secondary border-none focus:ring-2 focus:ring-brand-secondary transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="goal" className="text-sm font-semibold text-brand-text/70 dark:text-brand-white">Primary Goal</label>
                                    <select
                                        name="goal"
                                        id="goal"
                                        className="w-full px-5 py-4 rounded-xl bg-brand-bg dark:bg-brand-secondary border-none focus:ring-2 focus:ring-brand-secondary transition-all outline-none appearance-none cursor-pointer"
                                    >
                                        <option value="">Select a goal</option>
                                        <option value="buy">Buying a Home</option>
                                        <option value="sell">Selling a Home</option>
                                        <option value="invest">Relocating</option>
                                        <option value="other">General Inquiry</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="tone" className="text-sm font-semibold text-brand-text/70 dark:text-brand-white">Tone</label>
                                    <select
                                        name="tone"
                                        id="tone"
                                        className="w-full px-5 py-4 rounded-xl bg-brand-bg dark:bg-brand-secondary border-none focus:ring-2 focus:ring-brand-secondary transition-all outline-none appearance-none cursor-pointer"
                                    >
                                        <option value="professional">Professional</option>
                                        <option value="casual">Casual</option>
                                        <option value="urgent">Urgent</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-brand-text/70 dark:text-brand-white">How can we help?</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    placeholder="Tell us about your real estate needs..."
                                    className="w-full px-5 py-4 rounded-xl bg-brand-bg dark:bg-brand-secondary border-none focus:ring-2 focus:ring-brand-secondary transition-all outline-none resize-none"
                                    required
                                ></textarea>
                            </div>

                            <div className="flex items-center space-x-3 p-4 bg-brand-bg/50 dark:bg-brand-secondary/50 rounded-xl border border-brand-bg dark:border-brand-secondary">
                                <input
                                    type="checkbox"
                                    id="spam-protection"
                                    className="w-5 h-5 rounded text-brand-secondary focus:ring-brand-secondary cursor-pointer"
                                    required
                                />
                                <label htmlFor="spam-protection" className="text-sm font-medium text-brand-text/70 dark:text-brand-white cursor-pointer hover:text-brand-primary transition-colors">
                                    I am not a robot (Spam Protection)
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 bg-[#C9A227] text-black font-bold text-lg rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 group shadow-xl"
                            >
                                Send Message
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>

                            <p className="text-xs text-brand-text/50 dark:text-brand-white/50 text-center mt-4">
                                By submitting this form, you agree to being contacted by Grit Real Estate regarding your inquiry.
                            </p>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <div className="flex flex-col justify-center space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h2 className="text-4xl font-serif font-bold text-brand-primary mb-6 dark:text-white">Get in Touch</h2>
                            <p className="text-lg text-brand-text/70 mb-10 dark:text-brand-white leading-relaxed">
                                When you&apos;re ready to move, we&apos;re ready to lead. From first homes to major investments, we bring strategy, heart, and relentless grit to get you results.
                            </p>

                            <div className="space-y-8">
                                <ContactInfoItem
                                    icon={<Phone className="w-6 h-6 text-brand-secondary" />}
                                    title="Call Us"
                                    detail="785-218-8577"
                                    href="tel:785-218-8577"
                                />
                                <ContactInfoItem
                                    icon={<Mail className="w-6 h-6 text-brand-secondary" />}
                                    title="Email Us"
                                    detail="realestategrit@gmail.com"
                                    href="mailto:realestategrit@gmail.com"
                                />
                                <ContactInfoItem
                                    icon={<MapPin className="w-6 h-6 text-brand-secondary" />}
                                    title="Visit Our Office"
                                    detail="122 Main St. Blackwater, MO 65322"
                                />
                                <ContactInfoItem
                                    icon={<Clock className="w-6 h-6 text-brand-secondary" />}
                                    title="Office Hours"
                                    detail="Mon–Fri: 9am – 3pm"
                                />
                            </div>
                        </motion.div>

                        <div className="pt-8 border-t border-brand-bg dark:border-brand-secondary">
                            <h4 className="font-bold text-brand-primary mb-4 dark:text-white uppercase tracking-wider text-sm">Follow Our Journey</h4>
                            <div className="flex space-x-4">
                                <a href="https://facebook.com/your-page" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-bg dark:bg-brand-secondary flex items-center justify-center hover:bg-brand-secondary hover:-translate-y-1 transition-all cursor-pointer text-brand-primary dark:text-white hover:text-white shadow-sm">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="https://instagram.com/your-page" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-bg dark:bg-brand-secondary flex items-center justify-center hover:bg-brand-secondary hover:-translate-y-1 transition-all cursor-pointer text-brand-primary dark:text-white hover:text-white shadow-sm">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="https://linkedin.com/company/your-page" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-bg dark:bg-brand-secondary flex items-center justify-center hover:bg-brand-secondary hover:-translate-y-1 transition-all cursor-pointer text-brand-primary dark:text-white hover:text-white shadow-sm">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="https://youtube.com/@your-channel" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-bg dark:bg-brand-secondary flex items-center justify-center hover:bg-brand-secondary hover:-translate-y-1 transition-all cursor-pointer text-brand-primary dark:text-white hover:text-white shadow-sm">
                                    <Youtube className="w-5 h-5" />
                                </a>
                                <a href="https://google.com/search?q=your-business" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-bg dark:bg-brand-secondary flex items-center justify-center hover:bg-brand-secondary hover:-translate-y-1 transition-all cursor-pointer text-brand-primary dark:text-white hover:text-white shadow-sm">
                                    <GoogleIcon className="w-[18px] h-[18px]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ContactInfoItem({
    icon,
    title,
    detail,
    href,
}: {
    icon: React.ReactNode;
    title: string;
    detail: string;
    href?: string;
}) {
    const Content = () => (
        <div className="flex items-start space-x-4 group">
            <div className="p-3 bg-brand-bg dark:bg-brand-secondary rounded-xl group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-brand-primary dark:text-white">{title}</h4>
                <p className="text-brand-text/70 dark:text-brand-white/70">{detail}</p>
            </div>
        </div>
    );

    if (href) {
        return (
            <a href={href} className="block hover:opacity-80 transition-opacity">
                <Content />
            </a>
        );
    }

    return <Content />;
}

function GoogleIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
        </svg>
    );
}
