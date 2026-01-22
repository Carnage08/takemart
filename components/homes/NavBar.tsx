'use client'
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button"; // Assuming shadcn
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Our Franchise", href: "#franchise" },
    { name: "Blog", href: "#blog" },
    { name: "Contact Us", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Common pill styling
  const pillBase = "bg-white/90 backdrop-blur-md border border-gray-100 shadow-sm rounded-full flex items-center px-4 py-2 transition-all duration-300";

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex items-center gap-3 w-full max-w-7xl justify-between">
        
        {/* LEFT PILL: Contact Info */}
        <div className={cn(pillBase, "hidden lg:flex gap-2")}>
          <div className="flex items-center gap-2 py-1">
            <div className="w-2 h-2  rounded-full bg-green-500 animate-pulse" />
            <Phone className={cn("w-4 h-4 ", isScrolled ? "text-primary" : "text-gray-600")} />
            <span className="text-sm font-medium text-gray-900">+91 98765 43210</span>
          </div>
        </div>

        {/* CENTER PILL: Navigation Links */}
        <div className={cn(pillBase, "px-2 py-2 lg:px-6")}>
          {/* Logo or Brand Mark (Optional, like the tree in your image) */}
          <div className="bg-black rounded-full p-1.5 mr-4 hidden md:block">
            <div className="w-5 h-5 bg-white rounded-full" /> {/* Replace with your actual Logo */}
          </div>

          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* RIGHT PILL: CTA Button */}
        <div className={cn(pillBase, "hidden sm:flex")}>
          <Button 
            variant="secondary" 
            className="rounded-full bg-black text-white hover:bg-gray-800 h-9 px-6 transition-transform active:scale-95"
          >
            Apply Franchise
          </Button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-lg font-semibold block py-2">{link.name}</a>
              </li>
            ))}
            <hr />
            <div className="flex items-center gap-3 py-2">
              <Phone size={18} />
              <span className="font-medium">+91 98765 43210</span>
            </div>
            <Button className="w-full rounded-2xl py-6 text-lg">Apply Franchise</Button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;