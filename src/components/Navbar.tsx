"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Building2 } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/80 backdrop-blur-lg shadow-sm py-4 dark:bg-brand-primary/80"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative h-12 w-12 transition-transform group-hover:scale-105">
                            <Image
                                src="/images/logo.png"
                                alt="Grit Real Estate Logo"
                                fill
                                className="object-contain dark:invert transition-all"
                                priority
                            />
                        </div>
                        <span className="font-serif text-2xl font-bold tracking-tight text-brand-primary dark:text-white">
                            Grit Real Estate
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About Us</NavLink>
                        <NavLink href="/agents">Agents</NavLink>
                        <NavLink href="/home-value">Home Value</NavLink>
                        <NavLink href="/podcast">Podcast</NavLink>
                        <NavLink href="/reviews">Reviews</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 bg-[#C9A227] text-black rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-brand-text/70 hover:text-brand-primary dark:text-brand-white dark:hover:text-brand-secondary"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-brand-bg dark:bg-brand-primary dark:border-brand-secondary">
                    <div className="flex flex-col px-4 py-6 space-y-4">
                        <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>
                            Home
                        </MobileNavLink>
                        <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                            About Us
                        </MobileNavLink>
                        <MobileNavLink href="/home-value" onClick={() => setIsMobileMenuOpen(false)}>
                            Home Value
                        </MobileNavLink>
                        <MobileNavLink href="/podcast" onClick={() => setIsMobileMenuOpen(false)}>
                            Podcast
                        </MobileNavLink>
                        <MobileNavLink href="/reviews" onClick={() => setIsMobileMenuOpen(false)}>
                            Reviews
                        </MobileNavLink>
                        <MobileNavLink href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                            Contact
                        </MobileNavLink>
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-sm font-medium text-brand-text/70 hover:text-brand-primary transition-colors dark:text-brand-white dark:hover:text-brand-secondary"
        >
            {children}
        </Link>
    );
}

function MobileNavLink({
    href,
    onClick,
    children,
}: {
    href: string;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="text-base font-medium text-brand-text hover:text-brand-primary py-2 border-b border-brand-bg dark:text-brand-white dark:border-brand-secondary"
        >
            {children}
        </Link>
    );
}
