"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Community", href: "/community" },
  { name: "Articles", href: "/articles" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [rotateDeg, setRotateDeg] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setRotateDeg(window.scrollY * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 p-16 ${
        scrolled
          ? "bg-gray/90 text-white backdrop-blur-md py-3 shadow-md"
          : "bg-gray text-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative h-20">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={150}
            height={50}
            alt="Logo"
            className="flex items-center"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-base  text-gray hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Work With Us Circle - Aligned within Navbar */}
        <motion.div
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          style={{ rotate: rotateDeg }}
          className="hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-zaza text-white shadow-lg cursor-pointer absolute right-4"
        >
          <span className="text-[10px] font-medium tracking-widest text-center leading-tight">
            WORK WITH US
          </span>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-base text-gray-900 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {/* Work With Us Circle - Mobile */}
              <motion.div
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{ rotate: rotateDeg }}
                className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg cursor-pointer mx-auto"
              >
                <span className="text-[10px] font-medium tracking-widest text-center leading-tight">
                  WORK WITH US
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
