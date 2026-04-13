import Link from "next/link";
import Image from "next/image";
import { Building2, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-primary text-brand-white/80 py-16 px-4 sm:px-6 lg:px-8 border-t border-brand-primary/20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand & Mission */}
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="flex items-center gap-3 group mb-6">
                        <div className="relative h-12 w-12 transition-transform group-hover:scale-105">
                            <Image
                                src="/images/logo.png"
                                alt="Grit Real Estate Logo"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                        <span className="font-serif text-2xl font-bold tracking-tight text-white">
                            Grit Real Estate
                        </span>
                    </Link>
                    <p className="text-sm leading-relaxed mb-6">
                        Hardworking Real Estate Experts for the Kansas and Missouri Market. We bring grit, integrity, and deep local knowledge to every transaction.
                    </p>
                    <div className="flex space-x-4">
                        <SocialIcon href="#" icon={<Facebook className="w-5 h-5" />} />
                        <SocialIcon href="#" icon={<Twitter className="w-5 h-5" />} />
                        <SocialIcon href="#" icon={<Instagram className="w-5 h-5" />} />
                        <SocialIcon href="#" icon={<Linkedin className="w-5 h-5" />} />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                    <ul className="space-y-4 text-sm">
                        <li><FooterLink href="/">Home</FooterLink></li>
                        <li><FooterLink href="/about">About Us</FooterLink></li>
                        <li><FooterLink href="/agents">Agents</FooterLink></li>
                        <li><FooterLink href="/home-value">Home Value</FooterLink></li>
                        <li><FooterLink href="/podcast">Podcast</FooterLink></li>
                        <li><FooterLink href="/contact">Contact</FooterLink></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-white font-semibold mb-6">Legal</h3>
                    <ul className="space-y-4 text-sm">
                        <li><FooterLink href="/privacy">Privacy Policy</FooterLink></li>
                        <li><FooterLink href="/terms">Terms of Service</FooterLink></li>
                        <li><FooterLink href="/cookie-policy">Cookie Policy</FooterLink></li>
                    </ul>
                </div>

                {/* Contact info */}
                <div>
                    <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                    <ul className="space-y-4 text-sm">
                        <li>122 Main St.</li>
                        <li>Blackwater, MO 65322</li>
                        <li>realestategrit@gmail.com</li>
                        <li>785-218-8577</li>
                    </ul>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-primary/20 text-center text-sm">
                <p>&copy; 2022 Grit Real Estate. All rights reserved.</p>
            </div>
        </footer>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="hover:text-white transition-colors duration-200">
            {children}
        </Link>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-white hover:bg-white hover:text-brand-primary transition-all duration-200"
        >
            {icon}
        </a>
    );
}
